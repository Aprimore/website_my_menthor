<script lang="ts">
	import animationData from '$lib/assets/lotties/gif-6.json';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';

	let LottiePlayer;
	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

<section class="w-full rounded-lg bg-[#F1F1F9] max-lg:mt-10">
	<div class="lg:max-w-screen-2xl mx-auto xl:max-h-[420px] flex max-lg:flex-col">
		<div class="lg:w-1/2 flex justify-center items-center max-lg:order-2">
			<div class="card relative">
				<!-- <div bind:this={animationContainer} /> -->
				{#if LottiePlayer}
					<LottiePlayer
						src={animationData}
						autoplay={true}
						loop={true}
						renderer="svg"
						background="transparent"
						{controlsLayout}
					/>
				{/if}
			</div>
		</div>
		<div class="lg:w-1/2 flex justify-center items-center p-5 relative">
			<div class="card bg-[#F1F1F9] lg:max-w-[580px] lg:mr-36">
				<h1 class=" Exo-Bold text-[2.8rem] text-[#17193B] max-lg:text-center mb-5 xl:text-nowrap">
					<!-- Your success -->
					<span class="text-[#EB642A] relative Exo-Bold orange-underline">
						{@html m.clientesP_YourSuccessIsOurSuccess()}
						<!-- <img
							src={linha_h_laranja_svg}
							class="absolute
							max-lg:top-9 max-lg:left-3
							top-12 left-0
							max-sm:w-52"
							alt="linha"
							loading="lazy"
							decoding="sync"
							fetchpriority="low"
						/> -->
					</span>
					{@html m.clientesP_IsOurSuccess()}
					<!-- is our success -->
				</h1>
				<p class="Archivo text-[#25285F] text-lg p-3">
					<!-- We are committed to the continued success of our clients, cultivating long-term relationships with a focus on results. -->
					{m.clientesP_WeAreCommittedToTheContinuedSuccess()}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	span.orange-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_laranja.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		padding-bottom: 10px;
		background-size: 100% auto; /* Adjust background size */
	}

	@media (max-width: 709px) {
		span.orange-underline {
			background-size: 100% auto;
		}
	}
</style>
