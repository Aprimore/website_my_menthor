<script lang="ts">
	import animationData from '$lib/assets/lotties/gif-2.json';
	import * as m from '$lib/paraglide/messages';
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

<section class="w-full items-center relative rounded-lg sm:my-20 max-md:p-2 pb-8">
	<div class="flex max-lg:flex-col max-w-screen-2xl mx-auto xl:pb-10 relative">
		<div class="lg:w-2/3 relative">
			<div class="lg:ml-3 lg:pt-3">
				<h2
					class="max-md:text-center md:ml-10 md:max-w-lg text-4xl relative Exo-Bold text-[#17193B] blue-underline"
				>
					{m.homepage_section4_Organizing()}
					{m.homepage_section4_simpler()}
				</h2>
			</div>
			<div class="lg:ml-6 xl:absolute lg:mt-36 relative">
				<div class="max-sm:mt-6 px-auto p-5 max-md:p-2 relative space-y-1 md:max-w-screen-lg">
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-5 md:min-w-min"
					>
						<p class="Exo-Semibold check xl:text-xl">
							{m.homepage_section4_Profits()}
						</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-5 md:min-w-min"
					>
						<p class="Exo-Semibold check xl:text-xl">
							{m.homepage_section4_Quality()}
						</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-5 md:min-w-min"
					>
						<p class="Exo-Semibold check xl:text-xl">{m.homepage_section4_Value()}</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-5 md:min-w-min"
					>
						<p class="Exo-Semibold check xl:text-xl">{m.homepage_section4_Process()}</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-5 md:min-w-min"
					>
						<p class="Exo-Semibold check xl:text-xl">{m.homepage_section4_Maturity()}</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-5 md:min-w-min"
					>
						<p class="Exo-Semibold check xl:text-xl">
							{m.homepage_section4_Sustainability()}
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="md:mx-3 xl:mx-16 lg:w-[45%] flex flex-col self-center mb-auto pb-auto p-3">
			<div class="space-y-5">
				<p class="Archivo text-xl text-[#25285F]">
					{@html m.homepage_section4_My_Menthor()}
					<!-- My Menthor acts as a  Digital Mentor  with an
					 approach centered  on <span class="text-[#43ACB5]">being</span> and not on
					disruptive technologies. -->
				</p>
				<p class="Archivo text-xl text-[#25285F]">
					{@html m.homepage_section4_It_acts_as()}

					<!-- It acts as an  information  <span class="text-[#43ACB5]"> hub </span>,
					 organizing knowledge  in a single repository. -->
				</p>
			</div>
			<div class="col4 mt-5 max-lg:mt-10 md:px-40 lg:px-0">
				<div class="w-full mx-auto">
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
	</div>
</section>

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');
		display: inline-block;
		margin-right: 10px;
		margin-top: 5px;
		vertical-align: middle;
	}

	h2.blue-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_azul_6.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		padding-bottom: 10px;
	}
	@media (max-width: 638px) {
		h2.blue-underline {
			background-position: bottom;
			background-size: 100% auto;
		}
	}
</style>
