<script lang="ts">
	import '../app.less';
	import { db } from '$lib/supabase';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = db.auth.onAuthStateChange(() => invalidate('supabase:auth'));

		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Shoutbox</title>
</svelte:head>

<div class="min-h-screen min-w-full inline-flex flex-col text-stone-50">
	<main class="grow bg-stone-700 ">
		<slot />
	</main>
	<div class="p-3 text-center bg-stone-800">
		©
		{new Date().getFullYear()}
		Miika Tuominen
	</div>
</div>
