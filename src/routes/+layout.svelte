<script lang="ts">
	import '../app.less';
	import { supabase } from '$lib/supabase';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => invalidate('supabase:auth'));

		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Shoutbox</title>
</svelte:head>

<div class="min-h-screen min-w-full inline-flex flex-col text-slate-50">
	<main class="grow bg-slate-700 ">
		<slot />
	</main>
	<div class="p-3 text-center bg-slate-800">
		©
		{new Date().getFullYear()}
		Miika Tuominen
	</div>
</div>
