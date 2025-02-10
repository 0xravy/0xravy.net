<script lang="ts">
	import { onMount } from 'svelte';
	import Ravy from './static/Ravy.svelte';
	import Container from './static/Container.svelte';

	let { isBlack = $bindable() } = $props();

	let pageLoaded = $state(false);

	onMount(() => {
		setTimeout(() => {
			pageLoaded = true;
		}, 200);
	});
</script>

<section id="home">
	<Container>
		<div class="container">
			<div class="content" class:fade-in={pageLoaded}>
				<h2>
					<div>
						<span style="color: #E1FF00">ABDULRAHMAN</span><span style="color: #CC241D">@</span
						><span style="color: #458588">ALENEZI</span>
					</div>
					<p>
						<span style="color: red">WHOAMI</span><br />
						A 19-year-old Saudi tech enthusiast with over 5 years of programming experience and a passion
						for networking.<br /><br />Dedicated to developing the Arab community grow in the world
						of technology.
					</p>
				</h2>
			</div>
			<div style="overflow: hidden;" class="image" class:slide-in={pageLoaded}>
				<Ravy bind:isBlack />
			</div>
		</div>
	</Container>
</section>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		overflow-x: hidden;
		padding-bottom: 10%;
	}
	@media only screen and (max-width: 1100px) {
		.container {
			flex-direction: column-reverse;
			gap: 0px;

			& .image {
				scale: 0.9;
			}
		}
	}

	h2 {
		font-size: var(--font-size-large);
		font-weight: 500;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media only screen and (max-width: 700px) {
		h2 {
			font-size: var(--font-size-xmedium);
		}
		.container {
			& .image {
				scale: 0.7;
			}
		}
	}

	p {
		font-size: var(--font-size-medium);
	}

	section {
		position: relative;
		height: 100vh;
		display: flex;
		justify-content: center;
	}

	.content {
		width: min(600px, 100%);
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}

	.content.fade-in {
		opacity: 1;
		transform: translateY(0);
	}

	.image {
		opacity: 0;
		transform: translateX(100px);
		transition:
			opacity 1s ease,
			transform 1s ease;
		padding: 20px 0;
	}

	.image.slide-in {
		opacity: 1;
		transform: translateX(0);
	}
</style>
