<script lang="ts">
	import Container from '$lib/components/static/Container.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<main>
	<Container>
		<section class="my-container">
			<header>
				<h1># Blog</h1>
				<a class="link" href="/">return <span>'💀'</span>;</a>
			</header>

			<div class="posts">
				{#each data.api.posts as { slug, title, date, tags }}
					{@render post(slug, title, date, tags)}
				{/each}
			</div>
		</section>
	</Container>
</main>

{#snippet post(slug: string, title: string, date: string, tags: string[])}
	<a href="/posts/{slug}">
		<div class="post">
			<span class="title">{title}</span>
			<span class="date">{formatDate(date).split(',')[0]}</span>
			{@render postTags(tags)}
		</div>
	</a>
{/snippet}

{#snippet postTags(tags: string[])}
	<div class="tags">
		{#each tags as tag}
			<div class="tag">#{tag}</div>
		{/each}
	</div>
{/snippet}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& .link {
			background: var(--secondary);
			font-size: 0.8rem;
			border-radius: 10px;
			padding: 15px;
			color: var(--magenta);

			&:hover {
				background: var(--tertiary);
			}
			& span {
				font-weight: 1000;
				color: var(--yellow);
			}
		}
	}

	main {
		position: relative;
		overflow: hidden;
		height: 100vh;

		&::before,
		&::after {
			content: '';
			background: gray;
			border-radius: 50%;
			position: absolute;
			filter: blur(3rem);
			animation: light infinite linear 20s;
			padding: min(20vw, 200px);
		}

		&::before {
			right: 0;
			top: 0;
			background: orange;
			/* transform: translate(50%, -50%); */
		}

		&::after {
			left: 0;
			bottom: 0;
			background: purple;
			/* transform: translate(-50%, 50%); */
			animation-delay: 3s;
		}
	}

	@keyframes light {
		0%,
		100% {
			padding: min(20vw, 200px);
			border-radius: 20%;
			opacity: 0.9;
		}
		50% {
			padding: min(15vw, 150px);
			border-radius: 50%;
			opacity: 0.4;
		}
	}

	.my-container {
		padding: 100px 10%;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 50px;
	}

	.posts {
		display: grid;
		/* gap: 30px; */
	}

	.post {
		height: 30px;
		padding: 10px;
		/* border: solid var(--secondary) 5px; */
		/* border-radius: 8px; */
		display: flex;
		align-items: center;
		gap: 10px;
		color: #fff;
		opacity: 0.5;
		&:hover {
			opacity: 1;
			transform: translateX(20px);
		}

		& .title {
			font-size: 1.2rem;
		}

		& .date {
			opacity: 0.5;
			font-size: 0.7rem;
		}

		& .tags {
			display: flex;
			gap: 10px;
			& .tag {
				padding: 4px 10px;
				border-radius: 8px;
				background: var(--secondary);
				opacity: 0.8;
				font-size: 0.7rem;
				color: var(--green);
			}
		}
	}
</style>
