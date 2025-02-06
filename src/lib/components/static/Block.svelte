<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		width: min(95%, 1600px);
		margin: auto;
	}
</style>
