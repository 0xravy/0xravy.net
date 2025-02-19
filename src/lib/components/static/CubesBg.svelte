<script>
	let cubes = Array.from({ length: 25 }, () => '');

	let cubeElem = cubes.map(() => ({
		left: Math.random() * 100,
		size: Math.random() * 150 + 50,
		rotation: Math.random() * 360,
		animationDuration: Math.random() * 30 + 10,
		animationDelay: Math.random() * 20
	}));
</script>

<div class="cube-container">
	{#each cubeElem as cubeElem}
		<div
			class="cube"
			style="
				left: {cubeElem.left}%;
				width: {cubeElem.size}px;
				height: {cubeElem.size}px;
				transform: rotate({cubeElem.rotation}deg);
				animation-duration: {cubeElem.animationDuration}s;
				animation-delay: {cubeElem.animationDelay}s;
			"
		></div>
	{/each}
</div>

<style>
	.cube-container {
		position: fixed;
		top: 0;
		left: -1vw;
		width: 100%;
		height: 200vh;
		z-index: -1;
		/*overflow: hidden;*/
		rotate: 20deg;
	}

	.cube {
		clip-path: polygon(
			50% 0%,
			61% 35%,
			98% 35%,
			68% 57%,
			79% 91%,
			50% 70%,
			21% 91%,
			32% 57%,
			2% 35%,
			39% 35%
		);

		background: var(--yellow);
		position: absolute;
		top: -20%;
		color: #00ff00;
		font-family: monospace;
		line-height: 1.5;
		white-space: nowrap;
		animation: fall linear infinite;
	}

	@keyframes fall {
		from {
			transform: translateY(-200%) rotate(0deg);
		}
		to {
			background: yellow;
			transform: translateY(400vh) rotate(360deg);
			border-radius: 50%;
			opacity: 0;
		}
	}
</style>
