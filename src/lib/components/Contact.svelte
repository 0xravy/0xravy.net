<script lang="ts">
	import { onMount } from 'svelte';
	import Container from './static/Container.svelte';

	let isVisible = false;

	function observeSection() {
		const section = document.querySelector('#contact');

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

<section id="contact" class:animate-in={isVisible}>
	<Container>
		<div class="container">
			<form action="https://formspree.io/f/xldglpkd" method="POST" class="form animate-form">
				<div class="inputs">
					<div class="n1">
						<label for="name">👉 Name</label>
						<input name="Name" id="name" type="text" />
					</div>
					<div class="n2">
						<label for="email">👉 Email</label>
						<input name="Email" id="email" type="text" />
					</div>
					<div class="n3">
						<label for="message">👉 Message</label>
						<textarea name="Message" id="message"></textarea>
					</div>
				</div>

				<div class="button">
					<button type="submit">SEND</button>
				</div>
			</form>

			<div class="links animate-links">
				<span class="t1"># ANOTHER WAYS</span><br /><br />

				<span class="t2">
					<a target="_blank" href="https://discord.com/invite/7RUktMgkzg">Discord</a> |
					<a target="_blank" href="https://www.linkedin.com/in/abdulrahman-alenezi/">Linkdin</a>
				</span>

				0xravy@gmail.com<br />
				<br />
				<br />
				<span class="t1"># SOCIAL</span><br />

				<br />
				<span class="social">
					<div>
						<a target="_blank" href="https://x.com/0xRavy">X/Twitter</a>
						<span><span>|</span> <span>0xravy</span></span>
					</div>
					<div>
						<a target="_blank" href="https://www.youtube.com/@0xravy">Youtube</a>
						<span><span>|</span> <span>0xravy</span></span>
					</div>
					<div>
						<a target="_blank" href="https://www.instagram.com/0xravy/">Instagram</a>
						<span><span>|</span> <span>0xravy</span></span>
					</div>
					<div>
						<a target="_blank" href="https://www.twitch.tv/0xravy">Twitch</a>
						<span><span>|</span> <span>0xravy</span></span>
					</div>
					<div>
						<a target="_blank" href="https://www.tiktok.com/@0xravy">Tiktok</a>
						<span><span>|</span> <span>0xravy</span></span>
					</div>
				</span>
			</div>
		</div>
	</Container>
</section>

<style>
	section {
		padding-top: 150px;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: 70px;
		flex-wrap: wrap;
		overflow: hidden;
	}

	input,
	textarea {
		background: var(--tertiary);
		border-radius: 5px;
		height: 20px;
		color: var(--white);
		padding: 15px 20px;
		font-size: var(--font-size-small);
	}

	textarea {
		height: 185px;
		resize: none;
	}

	label {
		font-size: var(--font-size-small);
	}

	.form {
		margin: 0 auto;
		width: min(100%, 600px);
		display: flex;
		flex-direction: column;
		gap: 35px;
		font-size: 20px;
		opacity: 0;
		transform: translateX(-100%);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}

	.links {
		margin: 0 auto;
		font-size: 25px;
		width: min(100%, 400px);
		opacity: 0;
		transform: translateX(100%);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}

	section.animate-in .animate-form {
		opacity: 1;
		transform: translateX(0);
	}

	section.animate-in .animate-links {
		opacity: 1;
		transform: translateX(0);
	}

	.form .inputs {
		display: flex;
		flex-direction: column;
		gap: 35px;
	}

	.form .button {
		display: flex;
		justify-content: center;
	}

	.form .button button {
		padding: 8px 50px;
		border-radius: 10px;
		font-size: 20px;
		background: var(--tertiary);
		border: solid 3px var(--tertiary);
		color: var(--white);
		transition: 0.2s ease;
		opacity: 0.8;

		&:hover {
			--color: var(--green);
			background: var(--color);
			border-color: var(--color);
			color: var(--primary);
			opacity: 1;
		}
	}

	.form .inputs div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.links .t2 {
		display: flex;
		gap: 10px;
	}

	.links .t2 a {
		color: #5599ff;
		opacity: 0.5;

		&:hover {
			opacity: 1;
		}
	}

	.t1 {
		color: var(--red);
	}

	.social {
		display: flex;
		flex-direction: column;
	}

	.social div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/*padding-right: ;*/
	}

	.social div a {
		color: var(--white);
		transition: 0.2s ease;

		&:hover {
			color: var(--green);
		}
	}

	.social div span {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 25px;
		color: var(--white);
		opacity: 0.8;
	}
</style>
