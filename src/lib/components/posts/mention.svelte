<script lang="ts">
	let { name, href, src } = $props();
</script>

<a {href} class="mention">
	<img {src} alt={name} />
	{name}
</a>

<style>
	.mention {
		display: flex;
		background: var(--secondary);
		padding: 5px;
	}
</style>
