<script lang="ts">
	import { supabase } from '$lib/supabase';

	async function signInWithGitHub() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		});
	}
</script>

<button on:click={signInWithGitHub}>Sign in with GitHub</button>
