<script lang="ts">
	import { onMount } from 'svelte';

	let activeSection = 'home';

	let pageLoaded = false;

	function observeSections() {
		const sections = document.querySelectorAll('section');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-50% 0px -50% 0px',
				threshold: 0
			}
		);

		sections.forEach((section) => observer.observe(section));
	}

	onMount(() => {
		setTimeout(() => {
			pageLoaded = true;
		}, 1000);

		observeSections();
	});
</script>

<div style="height: 30px;"></div>
<nav class:slide-in={pageLoaded}>
	<a href="/" class={activeSection === 'home' ? 'active' : ''}>home<span>/</span></a>
	<a href="#experience" class={activeSection === 'experience' ? 'active' : ''}
		>experience<span>/</span></a
	>
	<a href="#projects" class={activeSection === 'projects' ? 'active' : ''}>projects<span>/</span></a
	>
	<a href="#skills" class={activeSection === 'skills' ? 'active' : ''}>skills<span>/</span></a>
	<a href="#contact" class={activeSection === 'contact' ? 'active' : ''}>contact<span>/</span></a>
</nav>

<style>
	span {
		font-weight: 900;
	}

	nav {
		border: 2px solid var(--secondary);
		border-radius: 10px;
		background: var(--primary);
		position: sticky;
		width: 500px;
		top: -20px;
		left: 50%;
		transform: translate(-50%, 30px);
		padding: 0px 30px;
		display: flex;
		justify-content: space-between;
		z-index: 10;
		opacity: 0;
		transform: translate(-50%, -50px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;
	}

	nav.slide-in {
		opacity: 1;
		transform: translate(-50%, 30px);
	}

	a {
		color: #fff;
		list-style: none;
		font-size: var(--font-size-small);
		padding: 10px;
		transition: 0.2s ease;

		&:hover {
			color: var(--red);
		}

		&.active {
			span {
				color: var(--red);
			}
		}
	}
</style>
