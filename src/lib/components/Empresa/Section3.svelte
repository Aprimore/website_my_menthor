<script lang="ts">
	import { arrow_right_svg, clientes_parceiros_3_webp } from '$lib';
	import * as m from '$lib/paraglide/messages';
	import FormZoho from '../FormZoho.svelte';
	// import { base } from '$app/paths';
	import animationData from '$lib/assets/lotties/gif-7.json';
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

<section class="w-full my-8 lg:my-20 bg-white">
	<div class="lg:flex flex-row xl:max-w-screen-2xl mx-auto max-lg:p-5" id="contact">
		<div class="lg:w-1/2 flex items-center flex-col justify-center">
			<div
				class="lg:space-y-6 lg:p-10 lg:ml-10 max-lg:flex lg:flex-col max-md:flex-col justify-center items-center w-full h-full"
			>
				<div>
					<h1 class="text-4xl md:text-5xl relative text-[#17193B] Exo-Semibold mb-10">
						<!-- Contact us <span class="font-normal"> or </span> <br /> schedule a demo! -->
						{@html m.company_ContactUsOr()}
						{@html m.company_ScheduleADemo()}
					</h1>
					<p class="Archivo text-[#25285F] text-lg">
						<!-- Fill in the form with your details. <br />
						The My Menthor team will get in touch as soon as possible! -->
						{m.company_FillInTheForm()}
						{m.company_FillInTheForm_2()}
					</p>
				</div>

				<!-- <div bind:this={animationContainer} class="" /> -->
				<div class="p-1">
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
		</div>
		<div class="lg:w-1/2 Exo">
			<div class="flex flex-col md:flex-row justify-between">
				<div
					class="w-full p-8 px-4 md:px-16 lg:px-12 xl:px-16 bg-[#F1F1F9] rounded-2xl flex flex-col justify-center"
				>
					<FormZoho />
				</div>
			</div>
		</div>
	</div>
</section>
