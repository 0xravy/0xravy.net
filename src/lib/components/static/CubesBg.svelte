<script>
	export let speed = Math.random() * 2 + 1;
	export let left = 0;

	function generateRandomIP() {
		return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
	}

	let ips = Array.from({ length: 20 }, () => generateRandomIP());

	let style = `
    left: ${left}%;
    animation: fall ${speed}s linear infinite;
  `;
</script>

<div class="ip-column" {style}>
	{#each ips as ip}
		<div>{ip}</div>
	{/each}
</div>

<style>
	.ip-column {
		position: absolute;
		top: -100%;
		white-space: nowrap;
		color: #00ff00;
		font-family: monospace;
		font-size: 16px;
		line-height: 1.5;
	}

	@keyframes fall {
		to {
			transform: translateY(100vh);
		}
	}
</style>
