<script>
	import Home from '$lib/components/Home.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import DotsBg from '$lib/components/static/DotsBg.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Cursor from '$lib/components/static/Cursor.svelte';
	import Bar from '$lib/components/static/Bar.svelte';
	import IpsBg from '$lib/components/static/IpsBg.svelte';
	import CubesBg from '$lib/components/static/CubesBg.svelte';

	let isBlack = $state(false);

	$inspect(isBlack);
</script>

<DotsBg />
{#if isBlack}
	<IpsBg />
{:else}
	<CubesBg />
{/if}

<Cursor bind:isBlack />
<Bar />

<main>
	<Home bind:isBlack />
	<div class="lala1">
		<Experience />
		<Projects />
		<Skills />
		<Contact />
	</div>
</main>

<style>
	@import '$lib/styles/global.css';

	.lala1 {
		box-shadow: -1px -20px 20px 10px #00000042;
		background: var(--primary);
		width: 100%;
	}

	main {
	}
</style>
