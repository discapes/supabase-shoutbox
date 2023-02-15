import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

export type Message = {
	id: number;
	message: string;
	sender: string;
	created_at: Date;
};

export function getShoutbox() {
	const LIMIT = 10;

	const store = writable<Message[] | undefined>(undefined);

	supabase
		.from('shoutbox')
		.select('*')
		.order('ctid', { ascending: false })
		.limit(LIMIT)
		.then((res) => store.set(res.data ?? []));

	const channel = supabase
		.channel('schema-db-changes')
		.on(
			'postgres_changes',
			{
				event: '*',
				schema: 'public',
				table: 'shoutbox'
			},
			(payload) => store.update((old) => [<Message>payload.new, ...old!.splice(-LIMIT + 1)!])
		)
		.subscribe();
	return store;
}

export async function addToShoutbox(message: string) {
	await supabase.rpc('shout', {
		message
	});
}
