<script lang="ts">
	import { onMount } from 'svelte';
	import Container from './static/Container.svelte';

	type Skill = {
		title: string;
		img: string;
		content: string;
	};

	const skills: Skill[] = [
		{
			title: 'pt',
			img: 'https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png',
			content:
				'- Cisco Packet Tracer is a network simulation tool for practicing network configuration.'
		},
		{
			title: 'nmap',
			img: 'https://nmap.org/images/nmap-logo-256x256.png',
			content: '- Nmap is a network scanning tool used for security and network exploration.'
		},
		{
			title: 'figma',
			img: 'https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png',
			content:
				'- Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single'
		},
		{
			title: 'js',
			img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
			content: '- JavaScript is a versatile programming language used for web development.'
		},
		{
			title: 'py',
			img: 'https://images.vexels.com/media/users/3/166477/isolated/lists/9bb722f0e85ddbc1ce0f064534fd2311-python-programming-language-icon.png',
			content:
				'- Python is a high-level programming language known for its simplicity and readability.'
		},
		{
			title: 'rs',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/512px-Rustacean-orig-noshadow.svg.png?20220509231635',
			content: '- Rust is a systems programming language focused on safety and performance.'
		}
	];

	let selectedSkill = skills[0];
	let hoveredSkill: Skill | null = null;
	let isVisible = false;

	function handleSkillClick(skill: Skill) {
		selectedSkill = skill;
	}

	function handleSkillHover(skill: Skill) {
		hoveredSkill = skill;
	}

	function handleSkillHoverOut() {
		hoveredSkill = null;
	}

	function observeSection() {
		const section = document.querySelector('#skills');

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

<section id="skills" class:animate-in={isVisible}>
	<Container>
		<div class="container">
			<div class="left">
				<div>
					<h1>language and tool | skill<span class="t1">$</span></h1>
				</div>
				<div class="content">
					<p data-title="[ {hoveredSkill ? hoveredSkill.title : selectedSkill.title} ]">
						{hoveredSkill ? hoveredSkill.content : selectedSkill.content}
					</p>
				</div>
			</div>
			<div class="right">
				{#each skills as skill}
					<button
						class={selectedSkill.title === skill.title ? 'clicked' : ''}
						on:click={() => handleSkillClick(skill)}
						on:mouseenter={() => handleSkillHover(skill)}
						on:mouseleave={() => handleSkillHoverOut()}
					>
						<div class="bg"></div>
						<div class="image">
							<img src={skill.img} alt={skill.title} />
						</div>
						<span>{skill.title}</span>
					</button>
				{/each}
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
			opacity 1s ease,
			transform 1s ease;
	}

	section.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		width: 100%;
		display: flex;
		padding: 50px 0;
		justify-content: space-between;
		gap: 100px;
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: max(100%, 400px);

		& .content p {
			height: 400px;

			&::before {
				content: attr(data-title);
				color: var(--magenta);
				padding-right: 10px;
			}
		}
	}

	.right {
		--pt: 10px;
		width: max(90%, 250px);
		padding-top: var(--pt);
		height: calc(100% - var(--pt));
		display: flex;
		flex-wrap: wrap;
		gap: 80px;

		justify-content: center;
		align-items: center;

		& button {
			--size: 80px;
			width: var(--size);
			height: var(--size);
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.5s ease;
			cursor: pointer;
			background: none;
			color: var(--while);

			&:hover {
				& span {
					opacity: 1;
					z-index: 1;
				}
			}

			&.clicked {
				& .bg {
					border: 70px solid var(--red);
					opacity: 0.3;
				}

				& .image {
					filter: grayscale(0%);
					opacity: 1;
				}
			}

			& span {
				top: -50%;
				position: absolute;
				font-size: var(--font-size-medium);
				-webkit-text-stroke: 1px #000;
				transition: 1s ease;
				opacity: 0;
			}
			& .image {
				--s: 50px;
				width: var(--size);
				height: var(--size);
				overflow: hidden;
				filter: grayscale(70%);
				opacity: 0.7;

				& img {
					transition: 0.5s ease;
					width: 100%;
					height: 100%;
					object-fit: contain;
					z-index: 2;
				}
			}
			& .bg {
				content: '';
				transition: 0.3s ease;
				padding: 0px;
				border-radius: 50%;
				position: absolute;
				background: red;
				border: 0px solid var(--red);
				opacity: 0;
				z-index: -1;
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

	@media only screen and (max-width: 1200px) {
		.container {
			flex-wrap: wrap;
			justify-content: center;

			& .left .content p {
				height: 250px;
			}

			& .right button {
				size: 30px;
			}
		}
	}
</style>
