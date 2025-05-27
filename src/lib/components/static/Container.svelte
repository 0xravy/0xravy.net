<div class="container"><slot /></div>

<style>
	.container {
		position: relative;
		width: min(85%, 1200px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 50px 0;
		margin: 0 auto;
	}

	@media only screen and (max-width: 900px) {
		.container {
			width: min(80%, 1200px);
			padding: 30px 0;
		}
	}
</style>
