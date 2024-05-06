<script lang="ts">
	import { linha_h_laranja_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import animationData from '$lib/assets/lotties/gif-6.json';

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
	<div class="lg:max-w-screen-2xl mx-auto lg:h-[489px] flex max-lg:flex-col">
		<div class="lg:w-1/2 flex justify-center items-center max-lg:order-2">
			<div class="card">
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
			</div>
		</div>
		<div class="lg:w-1/2 flex justify-center items-center border-black p-5">
			<div class="card bg-[#F1F1F9] lg:max-w-[580px] lg:mr-36">
				<h1 class="Exo-Bold text-4xl relative text-[#17193B] max-lg:text-center mb-5">
					<!-- Your success -->
					<span class="text-[#EB642A] relative Exo-Bold">
						{@html m.clientesP_YourSuccessIsOurSuccess()}
						<img
							src={linha_h_laranja_svg}
							class="absolute
							max-lg:top-9 max-lg:left-3
							top-11 left-0
							max-sm:w-52"
							alt="linha"
						/>
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