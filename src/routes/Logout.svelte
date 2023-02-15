<script lang="ts">
	import { supabase } from '$lib/supabase';

	async function signOut() {
		const { error } = await supabase.auth.signOut();
	}
</script>

<button on:click={signOut}>Sign out</button>
