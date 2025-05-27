<script lang="ts">
	import { localStore } from '$lib/localStore.svelte';
	import '$lib/styles/global.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	let theme = localStore<'light' | 'dark'>('theme', 'light');
	const originalPrimaryColor = '#0c0c24';

	onMount(() => {
		theme.value = (localStorage.getItem('theme')?.replaceAll('"', '') || 'light') as
			| 'light'
			| 'dark';
		const root = document.documentElement;
		root.style.setProperty('--primary', theme.value === 'light' ? originalPrimaryColor : 'black');
	});
</script>

{@render children()}
