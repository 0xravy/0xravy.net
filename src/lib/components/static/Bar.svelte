<script lang="ts">
	import { onMount } from 'svelte';

	let openMenu = $state(false);
	let activeSection = $state('home');
	let pageLoaded = $state(false);
	let windowWidth = $state(0);

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
		windowWidth = window.innerWidth;

		const handleResize = () => {
			windowWidth = window.innerWidth;
		};

		window.addEventListener('resize', handleResize);

		setTimeout(() => {
			pageLoaded = true;
		}, 1000);

		observeSections();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	$inspect(windowWidth);
</script>

<div></div>

{#if windowWidth <= 800}
	<nav style={`${openMenu && 'width: 100%'};`} class:slide-in={pageLoaded}>
		<a
			onclick={() => {
				openMenu = !openMenu;
			}}
			href="/"
			class={activeSection === 'home' ? 'active' : ''}>home<span>/</span></a
		>
		<a
			onclick={() => {
				openMenu = !openMenu;
			}}
			href="#experience"
			class={activeSection === 'experience' ? 'active' : ''}>experience<span>/</span></a
		>
		<a
			onclick={() => {
				openMenu = !openMenu;
			}}
			href="#projects"
			class={activeSection === 'projects' ? 'active' : ''}>projects<span>/</span></a
		>
		<a
			onclick={() => {
				openMenu = !openMenu;
			}}
			href="#skills"
			class={activeSection === 'skills' ? 'active' : ''}>skills<span>/</span></a
		>
		<a
			onclick={() => {
				openMenu = !openMenu;
			}}
			href="#contact"
			class={activeSection === 'contact' ? 'active' : ''}>contact<span>/</span></a
		>
	</nav>
{:else}
	<nav class:slide-in={pageLoaded}>
		<a href="/" class={activeSection === 'home' ? 'active' : ''}>home<span>/</span></a>
		<a href="#experience" class={activeSection === 'experience' ? 'active' : ''}
			>experience<span>/</span></a
		>
		<a href="#projects" class={activeSection === 'projects' ? 'active' : ''}
			>projects<span>/</span></a
		>
		<a href="#skills" class={activeSection === 'skills' ? 'active' : ''}>skills<span>/</span></a>
		<a href="#contact" class={activeSection === 'contact' ? 'active' : ''}>contact<span>/</span></a>
	</nav>
{/if}

<button
	onclick={() => {
		openMenu = !openMenu;
	}}>{openMenu ? 'x' : '#'}</button
>

<style>
	div {
		height: 35px;
	}
	span {
		font-weight: 900;
	}
	button {
		transition: 0.5s ease;
		display: none;
	}

	nav {
		width: min(500px, 90%);
		margin: auto;
		border: 2px solid var(--secondary);
		border-radius: 10px;
		background: var(--primary);
		position: sticky;
		top: 10px;
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
		transform: translateY(0%);
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

	@media only screen and (max-width: 800px) {
		div {
			height: 0px;
		}
		nav {
			position: fixed;
			display: flex;
			flex-direction: column;
			justify-content: start;
			width: 0%;
			height: 100%;
			border-radius: 0;
			align-items: center;
			padding: 0;
			padding-top: 100px;
			top: 0;
			right: 0;
			gap: 0;
			overflow: hidden;
			transition: 0.3s ease;
		}
		nav.slide-in {
			opacity: 0.95;
		}

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 10%;
			width: 100%;
			font-size: var(--font-size-medium);
		}
		a:hover {
			background: var(--secondary);
		}

		button {
			position: fixed;
			display: block;
			font-size: 50px;
			width: 50px;
			height: 50px;
			right: 30px;
			top: 30px;
			border-radius: 10px;
			z-index: 10;
		}
	}
</style>
