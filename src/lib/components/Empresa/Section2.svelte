<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { clientes_parceiros_3_webp, linha_h_verde_1_svg } from '$lib';
	import { onMount } from 'svelte';
	import animationData from '$lib/assets/lotties/gif-5.json';

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

	// import lottie from 'lottie-web';
	// import { onMount } from 'svelte';

	// let animationContainer: HTMLElement;

	// onMount(() => {
	// 	lottie.loadAnimation({
	// 		container: animationContainer,
	// 		loop: true,
	// 		autoplay: true,
	// 		animationData
	// 	});
	// });
</script>

<section class="w-full items-center rounded-lg bg-[#F1F1F9]">
	<div class="lg:h-[532px] md:flex flex-row max-w-[1350px] mx-auto max-md:p-5" id="purpose">
		<div class="md:w-1/2 md:flex flex-col justify-center">
			<!-- <div bind:this={animationContainer} /> -->
			{#if LottiePlayer}
			<LottiePlayer
				src={animationData}
				autoplay={true}
				loop={true}
				renderer="svg"
				background="transparent"
				height={470}
				width={470}
				{controlsLayout}
			/>
		{/if}
			<!-- <img class="w-full h-full" src={clientes_parceiros_3_webp} alt="" /> -->
		</div>
		<div class="md:w-1/2 flex flex-col justify-center">
			<div class="card space-y-10 p-5 md:p-12 bg-[#F1F1F9]">
				<h1
					class="Exo text-4xl sm:text-5xl z-10 relative text-[#17193B] Exo-Bold max-lg:text-center"
				>
					<!-- Purpose -->
					{m.company_Purpose()}
					<img src={linha_h_verde_1_svg} class="max-sm:w-36 max-lg:mx-auto" alt="linha" />
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
