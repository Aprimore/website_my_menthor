<script lang="ts">
	import { clientes_parceiros_3_webp, linha_h_verde_1_svg } from '$lib';
	import animationData from '$lib/assets/lotties/gif-5.json';
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

<section class="w-full items-center rounded-lg bg-[#F1F1F9]">
	<div class="lg:h-[570px] md:flex flex-row max-w-[1350px] mx-auto max-md:p-5" id="purpose">
		<div class="md:w-1/2 md:flex flex-col justify-center sm:p-5 xl:mt-auto relative md:p-10 lg:p-0">
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
		<div class="md:w-1/2 flex flex-col justify-center">
			<div class="card space-y-10 p-5 md:p-12 bg-[#F1F1F9]">
				<h1
					class="green-underline Exo text-4xl sm:text-5xl z-10 relative text-[#17193B] Exo-Bold max-lg:text-center w-fit"
				>
					<!-- Purpose -->
					{m.company_Purpose()}
				</h1>

				<p class="Archivo text-[#25285F] text-lg">
					<!-- Our purpose is to improve management capacity and boost corporate performance by
					integrating process-oriented organizational components, enhancing strategic execution and
					maximizing results. -->
					{m.company_OurPurposeIsToImprove()}
				</p>
				<p class="Archivo text-[#25285F] text-lg">
					<!-- We provide software, train and equip clients to transform and properly manage the
					business, supporting cultural change and highlighting performance gains and results. -->
					{m.company_WeProvideSoftware()}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	h1.green-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_verde_1.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		padding-bottom: 10px;
		background-size: 100% auto; /* Adjust background size */
	}

	@media (max-width: 709px) {
		h1.green-underline {
			background-size: 100% auto;
		}
	}
</style>
