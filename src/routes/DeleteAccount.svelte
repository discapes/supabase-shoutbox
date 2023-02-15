<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { supabase } from '$lib/supabase';

	async function deleteAccount() {
		if (!confirm('Are you sure you want to delete your account?')) return;
		await supabase.rpc('deleteUser');
		await supabase.auth.signOut();
	}
</script>

<button on:click={deleteAccount}>Delete account</button>
