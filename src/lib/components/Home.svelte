<script lang="ts">
	import { onMount } from 'svelte';
	import Bar from './static/Bar.svelte';
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

<Bar />
<section id="home">
	<Container>
		<div class="content" class:fade-in={pageLoaded}>
			<h1>
				<div>
					<span style="color: #E1FF00">ABDULRAHMAN</span><span style="color: #CC241D">@</span><span
						style="color: #458588">ALENEZI</span
					>
				</div>
				<p>
					<span style="color: red">WHOAMI</span><br />
					A 19-year-old ambitious Saudi IT specialist with more than 5 years of experience in programming
					and I am a network student,
					<br /><br />
					dedicated to advancing the Arab community in technology
				</p>
			</h1>
		</div>
		<div class="image" class:slide-in={pageLoaded}>
			<Ravy bind:isBlack />
		</div>
	</Container>
</section>

<style>
	h1 {
		font-size: var(--font-size-xlarge);
		font-weight: 500;
		width: min(600px, 90%);
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	p {
		font-size: var(--font-size-medium);
	}

	section {
		position: relative;
		height: 90vh;
		display: flex;
		justify-content: center;
	}

	.content {
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
	}

	.image.slide-in {
		opacity: 1;
		transform: translateX(0);
	}
</style>
