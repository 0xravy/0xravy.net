<script lang="ts">
	import Container from '$lib/components/static/Container.svelte';

	let { data } = $props();

	console.log(data);
</script>

<Container>
	<article>
		<header>
			<h1 class="title">{data.meta.title}</h1>
			<h1 class="date">{data.meta.date}</h1>
			{@render headerTags(data.meta.tags)}
		</header>

		<hr />

		<main>
			<data.content />
		</main>
		<a class="exit" href="/posts">
			>
			<span> cd .. </span>
		</a>
	</article>
</Container>

{#snippet headerTags(tags: string[])}
	<div class="tags">
		{#each tags as tag}
			<span class="tag">#{tag}</span>
		{/each}
	</div>
{/snippet}

<style>
	.exit {
		width: auto;
		color: var(--white);
		padding: 10px;
		opacity: 0.7;
		& span {
			opacity: 0.7;
			&:hover {
				text-decoration-line: underline;
				opacity: 1;
			}
		}
	}

	article {
		width: 100%;
		padding: 50px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 10px;

		& .title {
			font-size: 2rem;
			font-weight: 1000;
		}

		& .date {
			font-size: 1rem;
			opacity: 0.5;
		}
		& .tags {
			display: flex;
			gap: 30px;
			& .tag {
				font-size: 0.8rem;
				padding: 10px 20px;
				background: var(--secondary);
				border-radius: 8px;
			}
		}
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 50px;
	}

	:global(.shiki) {
		padding: 20px;
		border-radius: 8px;
		overflow-x: auto;
	}

	:global(a) {
		color: var(--blue);
	}
</style>
