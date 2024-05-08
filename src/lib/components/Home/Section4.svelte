<script lang="ts">
	import { checkmark_svg, linha_h_azul_6_svg } from '$lib';
	import animationData from '$lib/assets/lotties/gif-2.json';
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

{#if m}
	<section class="w-full items-center relative rounded-lg sm:my-20 max-md:p-2">
		<div class="flex max-lg:flex-col max-w-screen-2xl mx-auto">
			<div class="lg:w-2/3 my-5">
				<div class="sm:ml-14">
					<h1
						class="max-md:text-center sm:ml-10 md:max-w-lg text-4xl relative Exo-Bold text-[#17193B]"
					>
						{m.homepage_section4_Organizing()}
						{m.homepage_section4_simpler()}
					</h1>
					<span class="ml-2 absolute"><img src={linha_h_azul_6_svg} alt="" /></span>
				</div>
				<div class="md:ml-6 xl:absolute">
					<div
						class="max-sm:mt-6 lg:mt-14 px-auto p-10 max-md:p-2 text-lg relative space-y-5 md:max-w-screen-lg"
					>
						<div
							class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 md:min-w-min"
						>
							<p class="Exo-Semibold check xl:text-xl">
								{m.homepage_section4_Profits()}
							</p>
						</div>
						<div
							class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 md:min-w-min"
						>
							<p class="Exo-Semibold check xl:text-xl">
								{m.homepage_section4_Quality()}
							</p>
						</div>
						<div
							class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 md:min-w-min"
						>
							<p class="Exo-Semibold check xl:text-xl">{m.homepage_section4_Value()}</p>
						</div>
						<div
							class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 md:min-w-min"
						>
							<p class="Exo-Semibold check xl:text-xl">{m.homepage_section4_Process()}</p>
						</div>
						<div
							class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 md:min-w-min"
						>
							<p class="Exo-Semibold check xl:text-xl">{m.homepage_section4_Maturity()}</p>
						</div>
						<div
							class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 md:min-w-min"
						>
							<p class="Exo-Semibold check xl:text-xl">
								{m.homepage_section4_Sustainability()}
							</p>
						</div>
					</div>

					<!-- <div class="mt-28 pl-3 text-lg relative space-y-5"></div> -->
				</div>
			</div>

			<div class="mx-3 md:mx-16 lg:w-[45%] flex flex-col self-center">
				<div class=" space-y-5">
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
				<div class="col4 mt-5 max-lg:mt-10 md:px-40 lg:px-0 ">
					<!-- <div bind:this={animationContainer} /> -->
					<div class="w-full  mx-auto ">
						{#if LottiePlayer}
							<LottiePlayer
								src={animationData}
								autoplay={true}
								loop={true}
								renderer="svg"
								background="transparent"
								height={300}
								width={350}
								{controlsLayout}
							/>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- Placeholder while translations are loading -->
	<div>Loading...</div>
{/if}

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');
		display: inline-block;
		margin-right: 10px; /* Adjust as needed */
		vertical-align: middle;
	}
</style>
