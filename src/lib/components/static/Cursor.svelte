<script lang="ts">
	import { onMount } from 'svelte';

	let { isBlack = $bindable() } = $props();

	let mouseX = $state(0);
	let mouseY = $state(0);

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div
	class="custom-cursor"
	data-black={isBlack}
	style="
		transform: translate({mouseX}px, {mouseY}px);
		"
></div>

<style>
	.custom-cursor {
		position: fixed;
		padding: 20px;
		top: -20px;
		left: -20px;
		background: var(--white);
		border-radius: 50%;
		pointer-events: none;
		transform: translate(0%, 50%);
		transition:
			transform 0.1s ease-out,
			width 0.2s ease,
			height 0.2s ease,
			border 1s ease;
		z-index: 9999;

		opacity: 0.3;
	}
	.custom-cursor[data-black='true'] {
		animation: cur 1s infinite linear;
		padding: 30px;
	}

	@keyframes cur {
		0%,
		100% {
			border: solid 10px var(--white);
			top: -40px;
			left: -40px;
		}
		50% {
			border: solid 20px var(--white);
			top: -48px;
			left: -48px;
		}
	}
</style>
