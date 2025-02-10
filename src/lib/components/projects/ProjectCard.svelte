<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		img: string;
		title: string;
		desc: string;
		links: { repo?: string; demo?: string };
	};
	const { img, title, desc, links }: Props = $props();

	let isVisible = false;

	function observeCard() {
		const card = document.querySelector('.card');

		if (card) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							isVisible = true;
							observer.unobserve(card);
						}
					});
				},
				{
					rootMargin: '0px',
					threshold: 0.5
				}
			);

			observer.observe(card);
		}
	}

	onMount(() => {
		observeCard();
	});
</script>

<div class="card animate-on-scroll" class:animate-in={isVisible}>
	<div class="card-img">
		<img src={img} alt="" />
	</div>
	<div class="card-content">
		<div>
			<div class="title">{title}</div>
			<div class="desc">{desc}</div>
		</div>
		<div class="links">
			{#if links.demo}
				<a target="_blank" href={links.demo}>Demo</a>
			{/if}
			{#if links.repo}
				<a target="_blank" href={links.repo}>Repo</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.card {
		padding: 25px;
		height: 290px;
		width: 90%;
		display: flex;
		border-radius: 10px;
		gap: 20px;
		transition: 0.7s ease;
		transform: translateX(-50%);
		transition:
			opacity 1s ease,
			transform 1s ease,
			box-shadow 0.7s ease;
		opacity: 0.7;

		&:hover {
			--color: var(--secondary);
			opacity: 1;
			box-shadow: 0 0 50px 20px var(--color);
		}
	}

	.card.animate-in {
		transform: translateX(0);
	}

	.card .card-img {
		height: 100%;
	}

	.card .card-img img {
		object-fit: cover;
		height: 95%;
		aspect-ratio: 1/1;
		overflow: hidden;
		border: solid 5px var(--tertiary);
	}

	.card .card-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card .card-content .title {
		font-size: var(--font-size-xmedium);
	}
	.card .card-content .desc {
		font-size: var(--font-size-medium);
		height: 100%;
		opacity: 0.5;
	}
	.card .card-content .links {
		width: 100%;
		display: flex;
		justify-content: end;
		gap: 30px;
	}
	.card .card-content .links a {
		--color: var(--white);
		font-size: var(--font-size-small);
		padding: 7px 20px;
		border-radius: 10px;
		color: var(--color);
		border: solid 3px var(--color);
		border-radius: 10px;
		transition: 0.3s ease;
		opacity: 0.8;

		&:hover {
			--color: var(--green);
			background: var(--color);
			border-color: var(--color);
			color: var(--primary);
			opacity: 1;
		}
	}

	@media only screen and (max-width: 900px) {
		.card {
			flex-direction: column;
			height: auto;
			width: 90%;
			padding: 0;
			opacity: 1;

			&:hover {
				--color: none;
			}

			& .card-img {
				text-align: center;
				width: 100%;
				& img {
					width: min(100%, 250px);
					max-height: 250px;
				}
			}
			& .card-content {
				gap: 30px;
			}
		}
	}

	@media only screen and (max-width: 800px) {
		.card .card-content .links {
			justify-content: space-around;
			gap: 20px;
			& a {
				width: 100%;
				text-align: center;
				padding: 15px 30px;
			}
		}
	}
</style>
