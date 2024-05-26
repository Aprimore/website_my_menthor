<script lang="ts">
	import { empresa_1_webp } from '$lib';
	import * as m from '$lib/paraglide/messages';

	import animationData from '$lib/assets/lotties/gif-4.json';
	import { onMount } from 'svelte';

	let LottiePlayer: any;
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

<section class="w-full relative rounded-lg bg-[#F1F1F9] bg-opacity-50">
	<div class="lg:h-[634px] lg:max-w-screen-2xl mx-auto lg:flex items-center flex-row">
		<div class="lg:w-1/2 relative lg:pl-12 max-lg:flex max-lg:flex-col items-center">
			<h1
				class="Exo-Bold text-[#454AB0] text-4xl lg:text-[2.5rem] font-bold relative lg:ml-20 mt-12 max-sm:text-center max-w-lg leading-normal text-center"
			>
				<span class="font-normal text-[#17193B]">
					{m.produtos_WhatIs()}
				</span>
				{m.produtos_BusinessArchitectureSoftware()}
				<!-- What is <span class="text-[#454AB0]">Business <br /> Architecture Software?</span> -->
			</h1>

			<div class=" relative max-w-[600px]">
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
		<div class="lg:w-1/2 relative px-5 lg:p-5 pb-5">
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
