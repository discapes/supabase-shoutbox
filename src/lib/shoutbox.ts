import { writable } from 'svelte/store';
import { db } from '$lib/supabase';

export type Message = {
	message: string;
	username: string;
	timestamp: Date;
};

export function getShoutbox() {
	const store = writable<Message[] | undefined>([
		{
			message: 'foobar',
			username: 'tester',
			timestamp: new Date()
		}
	]);

	// const q = query(shoutboxCollection, orderBy('timestamp', 'desc'), limit(10));
	// const unsub = onSnapshot(q, (docs) =>
	// 	store.set(
	// 		docs.docs.map((d) =>
	// 			d.metadata.hasPendingWrites
	// 				? {
	// 						...(<Message>d.data()),
	// 						timestamp: Timestamp.now()
	// 				  }
	// 				: <Message>d.data()
	// 		)
	// 	)
	// );
	return store;
}

export async function addToShoutbox(message: string, user: any) {
	// await addDoc(shoutboxCollection, {
	// 	message,
	// 	username: user.login,
	// 	timestamp: serverTimestamp()
	// });
}
