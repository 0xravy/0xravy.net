<script>
	function generateRandomIP() {
		return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
	}

	let ips = Array.from({ length: 15 }, () => generateRandomIP());

	let ipElements = ips.map((ip) => ({
		ip,
		left: Math.random() * 100,
		size: Math.random() * 25 + 10,
		rotation: Math.random() * 360,
		animationDuration: Math.random() * 5 + 5,
		animationDelay: Math.random() * 20
	}));
</script>

<div class="ip-container">
	{#each ipElements as ipElement}
		<div
			class="ip-address"
			style="
				left: {ipElement.left}%;
				font-size: {ipElement.size}px;
				transform: rotate({ipElement.rotation}deg);
				animation-duration: {ipElement.animationDuration}s;
				animation-delay: {ipElement.animationDelay}s;
			"
		>
			{ipElement.ip}
		</div>
	{/each}
</div>

<style>
	.ip-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
		overflow: hidden;
	}

	.ip-address {
		position: absolute;
		top: -20%;
		color: #00ff00;
		font-family: monospace;
		line-height: 1.5;
		white-space: nowrap;
		animation: fall linear infinite;
	}

	@keyframes fall {
		to {
			transform: translateY(130vh) rotate(360deg);
			opacity: 0;
		}
	}
</style>
