<script lang="ts">
	import { empresa_1_webp } from '$lib';
	import * as m from '$lib/paraglide/messages';

	import animationData from '$lib/assets/lotties/gif-4.json';
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

<section class="w-full relative rounded-lg bg-[#F1F1F9]">
	<div class="lg:h-[634px] lg:max-w-screen-2xl mx-auto lg:flex items-center flex-row lg:my-16">
		<div class="lg:w-1/2 relative lg:pl-12 max-lg:flex max-lg:flex-col items-center">
			<h1
				class="Exo-Bold text-[#17193B] text-4xl font-bold relative lg:ml-10 mt-12 max-sm:text-center"
			>
				{m.produtos_WhatIs()}
				{m.produtos_BusinessArchitectureSoftware()}
				<!-- What is <span class="text-[#454AB0]">Business <br /> Architecture Software?</span> -->
			</h1>
			<!-- <div bind:this={animationContainer} class="lg:w-[533px] lg:h-[400px]" /> -->
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

			<!-- <img src={empresa_1_webp} class="w-[533px] h-[300px]" alt="" /> -->
		</div>
		<div class="lg:w-1/2 relative px-5 lg:p-10 pb-5">
			<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
				{@html m.produtos_ItIsAManagementTool()}
				<!-- It is a management tool that uses an architectural approach to analyze and
				integrate strategy, processes, structure and other organizational components,
				boosting organizational performance and alignment. Where as transactional
				systems such as ERP focus on automating operational transactions and operational processes. -->
			</p>
			<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
				{@html m.produtos_AsAProcessOriented()}
				<!-- As a process-oriented Business Architect platform, it
				unfolds the strategy in end-to-end view of the Value Chain, and connects to
				the Process Architecture the other elements such as Organizational Structure, Indicators, Risks,
				Internal Controls, Systems, Resources, Data, Corporate documents, among other elements that are
				generally dispersed in the functional structures. -->
			</p>
			<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
				{@html m.produtos_InThisWayItCreatesADigitalTwin()}
				<!-- In this way, it creates a digital twin of the organization, enabling
				analysis, improvements and operational transformations, as well as
				assessing impacts and supporting change management. -->
			</p>
		</div>
	</div>
</section>
