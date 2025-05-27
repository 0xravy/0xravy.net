<script lang="ts">
	import { onMount } from 'svelte';
	import Container from './static/Container.svelte';

	type Item = {
		title: string;
		date: string;
		content: string;
	};

	const items: Item[] = [
		{
			title: 'Code',
			date: '2019',
			content:
				'Controll all project alone and with teams i can be flexible with the poubler programming languages'
		},
		{
			title: 'Network',
			date: '2024',
			content: 'Experience in networking protocols, configurations, and troubleshooting.'
		},
		{
			title: 'Linux',
			date: '2022',
			content: 'Proficient in Linux system administration, scripting, and server management.'
		},
		{
			title: 'UI/UX',
			date: '2021',
			content: 'Skilled in designing user interfaces and creating seamless user experiences.'
		}
	];

	let selectedItem = items[0];
	let isVisible = false;

	function handleClick(item: Item) {
		selectedItem = item;
	}

	function observeSection() {
		const section = document.querySelector('#experience');

		if (section) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							isVisible = true;
							observer.unobserve(section);
						}
					});
				},
				{
					rootMargin: '0px',
					threshold: 0.5
				}
			);

			observer.observe(section);
		}
	}

	onMount(() => {
		observeSection();
	});
</script>

<section id="experience" class:animate-in={isVisible}>
	<Container>
		<div class="container">
			<div class="left">
				<div>
					<h1><span class="t1">/</span>Experience<span class="t1">/</span></h1>
				</div>
				<ul>
					{#each items as item}
						<li class={selectedItem.title === item.title ? 'clicked' : ''}>
							<button
								style="color: var(--{selectedItem.title === item.title ? 'red' : 'white'});"
								on:click={() => handleClick(item)}
							>
								<div></div>
								<span>{item.title}</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>
			<div class="right">
				<div class="content">
					<div class="top">
						<h2 class="title">{selectedItem.title}</h2>
						<span class="date">{selectedItem.date} - {new Date().getFullYear()}</span>
					</div>
					<p>
						{selectedItem.content}
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	section {
		padding-top: 200px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 1.5s ease,
			transform 2s ease;

		overflow: hidden;
	}

	section.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		width: 100%;
		height: 600px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 70px;
		width: min(100%, 300px);
	}

	.left ul {
		width: 100%;
		height: 300px;
		display: flex;
		flex-direction: column;

		& li {
			display: flex;
			align-items: center;
			position: relative;
			list-style: none;
			width: calc(100% - var(--p) * 2);
			height: 100%;
			cursor: pointer;

			&:hover {
				& div {
					opacity: 1;
				}
			}
			&.clicked {
				border-left: solid 6px var(--red);
				color: var(--red);
				& div {
					opacity: 0.1;
				}
			}

			& button {
				background: none;
				border: none;
				padding-left: 40px;
				width: 100%;
				height: 100%;
				text-align: left;
				color: var(--white);
				font-size: var(--font-size-medium);
			}
			& span {
				z-index: 10;
				position: relative;
			}

			& div {
				opacity: 0.6;
				position: absolute;
				content: '';
				background: var(--secondary);
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}
	}

	.right {
		--pt: 120px;
		width: min(100%, 700px);
		padding-top: var(--pt);
		height: calc(100% - var(--pt));

		& .content {
			display: flex;
			flex-direction: column;
			gap: 20px;

			& .top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				& .title {
					font-size: var(--font-size-large);
					color: var(--red);
				}
				& .date {
					color: var(--green);
					font-size: var(--font-size-small);
				}
			}
			& p {
				opacity: 0.7;
				font-size: var(--font-size-medium);
				line-height: 40px;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		.left {
			width: 100%;
			height: 120px;
		}
		.left ul {
			width: min(98%, 500px);
			flex-direction: row;

			& li {
				height: 50px;
				width: 100%;
				& button {
					padding: 0;
					width: 100%;
					font-size: var(--font-size-small);
					text-align: center;
				}
			}
			& li.clicked {
				border-left: solid 0px var(--red);
				border-bottom: solid 5px var(--red);
			}
		}
	}

	h1 {
		font-size: var(--font-size-xmedium);
	}
	.t1 {
		color: var(--red);
		font-size: 1.2em;
	}
</style>
