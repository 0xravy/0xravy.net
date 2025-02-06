<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	const { year, color, children }: { year: string; color: string; children: Snippet } = $props();

	let isVisible = false;

	function observeComponent() {
		const component = document.querySelector('.projects-year');

		if (component) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							isVisible = true;
							observer.unobserve(component);
						}
					});
				},
				{
					rootMargin: '0px',
					threshold: 0.5
				}
			);

			observer.observe(component);
		}
	}

	onMount(() => {
		observeComponent();
	});
</script>

<div class="projects-year animate-on-scroll" class:animate-in={isVisible}>
	<div class="projects">
		{@render children()}
	</div>
	<div class="year">
		<div class="year-line" style="background: var(--{color});"></div>
		<div
			class="year-label"
			style="
				background: var(--{color});
				box-shadow: 0 0 20px 2px var(--{color});
			"
		>
			{year}
		</div>
	</div>
</div>

<style>
	.projects-year {
		display: flex;
		justify-content: space-between;
		width: 100%;
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}

	.projects-year.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 50px;
		width: 100%;
		padding: 20px 0;
	}

	.year {
		position: relative;
		width: 100px;
	}

	.year-line {
		content: '';
		width: 15%;
		height: 100%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.year-label {
		position: sticky;
		top: 10px;
		--size: 100px;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 25px;
		z-index: 2;
	}
</style>
