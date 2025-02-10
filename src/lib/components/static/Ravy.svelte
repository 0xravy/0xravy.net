<script lang="ts">
	import { onMount } from 'svelte';

	let { isBlack = $bindable() } = $props();

	let mouseX = 0;
	let mouseY = 0;
	const originalPrimaryColor = '#0c0c24';

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		updatePupilPosition();
	}

	function updatePupilPosition() {
		const eyes = document.querySelectorAll('.eye');
		eyes.forEach((eye) => {
			const eyeRect = eye.getBoundingClientRect();
			const eyeCenterX = eyeRect.left + eyeRect.width / 2;
			const eyeCenterY = eyeRect.top + eyeRect.height / 2;

			const deltaX = mouseX - eyeCenterX;
			const deltaY = mouseY - eyeCenterY;
			const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

			const maxMove = 10;
			const moveX = (deltaX / distance) * Math.min(maxMove, Math.abs(deltaX));
			const moveY = (deltaY / distance) * Math.min(maxMove, Math.abs(deltaY));

			const pupil = eye.querySelector('.pupil') as HTMLElement;
			if (pupil) {
				pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
			}
		});
	}

	function togglePrimaryColor() {
		const root = document.documentElement;
		if (isBlack) {
			root.style.setProperty('--primary', originalPrimaryColor);
		} else {
			root.style.setProperty('--primary', 'black');
		}
		isBlack = !isBlack;
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);

		const ravy = document.querySelector('.ravy');
		if (ravy) {
			ravy.addEventListener('click', togglePrimaryColor);
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);

			if (ravy) {
				ravy.removeEventListener('click', togglePrimaryColor);
			}
		};
	});
</script>

<div class="ravy {isBlack && 'dark'}">
	<img class="cap" width="380" src="/ravy/cap{(isBlack && '-dark') || ''}.svg" alt="" />
	<img class="face" width="170" src="/ravy/face.svg" alt="" />
	<img class="clohes" width="400" src="/ravy/clohes{(isBlack && '-dark') || ''}.svg" alt="" />
	<img style="opacity: 0;" width="400" src="/ravy.svg" alt="" />

	<div class="eyes">
		<div class="eye">
			<div class="pupil"></div>
		</div>
		<div class="eye">
			<div class="pupil"></div>
		</div>
	</div>
</div>

<style>
	.cap,
	.face,
	.clohes {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
		z-index: 5;
	}

	@keyframes ravy {
		0%,
		100% {
			transform: translateY(20px);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.ravy {
		position: relative;
		z-index: -50;
		border-radius: 50%;
		animation: ravy 4s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
		overflow: hidden;
		cursor: pointer;

		& .cap {
			top: 20%;
			z-index: 5;
		}
		& .face {
			top: 37%;
			z-index: 4;
		}
		& .clohes {
			top: 75%;
			z-index: 5;
		}
	}

	.ravy .eyes {
		padding: 3px;
		background: black;
		position: absolute;
		top: 37%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		gap: 23px;

		&:hover .eye .pupil {
			background: var(--red);
		}

		& .eye {
			width: 40px;
			height: 40px;
			/*background: white;*/
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			overflow: hidden;

			& .pupil {
				width: 20px;
				height: 20px;
				background: var(--cyan);
				border-radius: 50%;
				position: absolute;
			}
		}
	}

	.dark {
		& .face {
			filter: brightness(0.9);
		}

		& > .eyes .eye .pupil {
			background: var(--red);
		}
		& > .cap {
			top: 21%;
		}
	}

	@keyframes hov {
		0%,
		100% {
			transform: rotate(-3deg);
		}
		50% {
			transform: rotate(3deg);
		}
	}

	.ravy:hover {
		/*animation: hov 0.1s infinite linear;*/
		/*animation-delay: 1s;*/
		& > .eyes .eye .pupil {
			background: var(--red);
		}
		& > .cap {
			top: 22.5%;
		}
	}
</style>
