<script lang="ts">
	import { oneField } from '$lib/utils';
	import { addToShoutbox, getShoutbox } from '$lib/shoutbox';
	import type { PageData } from './$types';
	import DeleteAccount from './DeleteAccount.svelte';
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';

	export let data: PageData;
	const shoutbox = getShoutbox();

	async function send(msg: string) {
		if (!msg.length) return false;
		await addToShoutbox(msg);
		return true;
	}

	function time(d: Date) {
		return (
			d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0')
		);
	}
</script>

<div class="center flex flex-col gap-3">
	<h1>Shoutbox</h1>
	{#if $shoutbox}
		<div class="shoutbox">
			{#each $shoutbox.reverse() as shout}
				<p>
					<span class="text-slate-400 mr-3">{time(new Date(shout.created_at))}</span>
					<a
						target="_blank noreferrer"
						href="https://github.com/{shout.sender}"
						class="font-bold hover:underline"
					>
						{shout.sender}:
					</a>
					{shout.message}
				</p>
			{/each}
		</div>
		{#if data.session}
			<form on:submit={oneField(send)}>
				<input name="!" placeholder="..." />
				<input type="submit" value="Send" />
			</form>
		{:else}
			Login to chat
		{/if}
	{:else}
		Loading shoutbox...
	{/if}
	<h1>Account</h1>
	{#if data.session}
		Logged in as {data.session.user.user_metadata.user_name}.
		<Logout />
		<DeleteAccount />
	{:else}
		<Login />
	{/if}
</div>

<style>
	.shoutbox {
		@apply flex flex-col gap-3;
	}
	.shoutbox p {
		@apply bg-slate-600 p-2;
	}
</style>
