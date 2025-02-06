<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '$lib/components/static/Container.svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import ProjectsYear from '$lib/components/projects/ProjectsYear.svelte';

	type Project = {
		img: string;
		title: string;
		desc: string;
		links: { repo?: string; demo?: string };
	};

	type Projects = {
		year: string;
		color: string;
		projects: Project[];
	};

	const allProjects: Projects[] = [
		{
			year: '2025',
			color: 'magenta',
			projects: [
				{
					img: 'https://media.discordapp.net/attachments/1044330517291606158/1258389170271944734/image.png?ex=67a54a7d&is=67a3f8fd&hm=81e79c25388e83b6eb9eba9adb5aef69ae1b14b9c366886c021547524ef19cf4&=&format=webp&quality=lossless&width=1208&height=675',
					title: '0x-In-Cube - website',
					desc: 'This website to support Arabic community to share experince  ---------------------------------------- ⚠️  I STILL WORK ON IT ⚠️ ---------',
					links: { demo: '', repo: '' }
				}
			]
		},
		{
			year: '2024',
			color: 'blue',
			projects: [
				{
					img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/ec/96/d9/ec96d9f8-02e5-8911-ab45-d8615289af72/source/512x512bb.jpg',
					title: 'ASCII art to code - website',
					desc: 'this website gonna take the ascii text art then converted to code string',
					links: {
						demo: 'https://0xravy.github.io/Local-web-ascii-to-code/',
						repo: 'https://github.com/0xravy/Local-web-ascii-to-code?tab=readme-ov-file'
					}
				},
				{
					img: 'https://thumbs.dreamstime.com/b/miner-mascot-logo-design-vector-modern-illustration-concept-style-badge-emblem-tshirt-printing-head-165103256.jpg',
					title: 'Gold Store Mangment',
					desc: 'this is app is build to gold store to manage the customers data and export the data as PDF',
					links: {
						demo: 'https://0xravy.github.io/gold-app/src/index.html',
						repo: 'https://github.com/0xravy/gold-app'
					}
				}
			]
		}
	];

	// Track visibility of elements
	let visibleElements = new Set();

	// Function to observe elements
	function observeElements() {
		const elements = document.querySelectorAll('.animate-on-scroll');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleElements.add(entry.target);
						entry.target.classList.add('animate-in');
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '0px',
				threshold: 0.5
			}
		);

		elements.forEach((element) => observer.observe(element));
	}

	onMount(() => {
		observeElements();
	});
</script>

<section id="projects">
	<Container>
		<div class="my-container">
			<center>
				<h1 style="color: var(--red)" class="animate-on-scroll">
					{'< Projects >'}
				</h1>
			</center>
			<div class="projects-container">
				{#each allProjects as { year, color, projects }, i}
					<ProjectsYear {color} {year} class="animate-on-scroll" style={`--delay: ${i * 0.2}s;`}>
						{#each projects as { img, title, desc, links }}
							<ProjectCard {img} {title} {desc} {links} class="animate-on-scroll" />
						{/each}
					</ProjectsYear>
				{/each}
			</div>
		</div>
	</Container>
	<center>
		<h5>
			<span class="s1 animate-on-scroll"> </span>

			<span class="s1 animate-on-scroll"> You can see more in - </span>
			<a target="_blank" href="https://github.com/0xravy" class="animate-on-scroll">
				<span class="s2">
					GITHUB

					<span class="s3">
						<i class="fa-solid fa-code-branch"></i>
					</span>
				</span>
			</a>
			<span class="s1 animate-on-scroll"> </span>
		</h5>
	</center>
</section>

<style>
	center {
		position: relative;
	}
	h5 {
		position: relative;
	}
	h5::before,
	h5::after {
		top: 50%;
		transform: translateY(-50%);
		content: '';
		width: 50px;
		height: 1px;
		background: white;
		position: absolute;
		z-index: 3;
	}

	h5::before {
		left: -60px;
	}
	h5::after {
		right: -60px;
	}
	center a {
		color: var(--blue);
	}
	center span {
		opacity: 0.5;
		transition: 0.5s ease;
	}
	center .s1 {
		opacity: 0.5;
	}
	center .s2:hover {
		opacity: 1;
	}
	center .s3 {
		font-size: 20px;
	}
	h1 {
		font-size: var(--font-size-large);
		width: 300px;
		margin: auto;
	}
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 60px;
		padding: 100px 0px;
	}

	.my-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 100px;
	}
	.projects-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 40px;
	}

	.animate-on-scroll {
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 1s ease,
			transform 1s ease;
		transition-delay: var(--delay, 0s);
	}

	:global(.animate-on-scroll.animate-in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
