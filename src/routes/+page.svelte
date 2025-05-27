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
	import { onMount } from 'svelte';

	let theme = $state('light');

	onMount(() => {
		theme = localStorage.getItem('theme') || 'light';
	});
</script>

<DotsBg />
{#if theme === 'light'}
	<CubesBg />
{/if}
{#if theme === 'dark'}
	<IpsBg />
{/if}

<Cursor bind:theme />
<Bar />

<main>
	<Home />
	<div class="lala1">
		<Experience />
		<Projects />
		<Skills />
		<Contact />
	</div>
</main>

<style>
	.lala1 {
		box-shadow: -1px -20px 20px 10px #00000042;
		background: var(--primary);
		width: 100%;
	}
</style>
