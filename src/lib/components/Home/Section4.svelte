<script lang="ts">
	import { checkmark_svg, linha_h_2_svg, the_platform_png } from '$lib';
	import * as m from '$paraglide/messages';

	import animationData from '$lib/assets/lotties/gif-2.json';

	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	let animationContainer: HTMLElement;

	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			loop: true,
			autoplay: true,
			animationData
		});
	});
</script>

<section class="w-full items-center relative rounded-lg my-20">
	<div class="flex max-lg:flex-col max-w-screen-2xl mx-auto">
		<div class="column1 lg:w-2/3">
			<div class="ml-14">
				<h1 class="ml-10 max-w-lg text-2xl sm:text-4xl relative Exo-Bold text-[#17193B]">
					{m.homepage_section4_Organizing()}
					{m.homepage_section4_simpler()}
				</h1>
				<span class="ml-2 absolute"><img src={linha_h_2_svg} alt="" /></span>
			</div>
			<div class="flex flex-row ml-6 xl:absolute">
				<div class="mt-14 pl-10 p-10 text-lg relative space-y-5 max-w-screen-lg">
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 min-w-min"
					>
						<p class="Exo-Semibold check text-base xl:text-xl">
							{m.homepage_section4_Profits()}
						</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 min-w-min"
					>
						<p class="Exo-Semibold check text-base xl:text-xl font-bold">
							{m.homepage_section4_Quality()}
						</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 min-w-min"
					>
						<p class="Exo-Semibold check text-base xl:text-xl">{m.homepage_section4_Value()}</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 min-w-min"
					>
						<p class="Exo-Semibold check text-base xl:text-xl">{m.homepage_section4_Process()}</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 min-w-min"
					>
						<p class="Exo-Semibold check text-base xl:text-xl">{m.homepage_section4_Maturity()}</p>
					</div>
					<div
						class="bg-[#F1F1F9] bg-opacity-50 rounded-lg border border-[#D4D4ED] sm:inline-block p-6 min-w-min"
					>
						<p class="Exo-Semibold check text-base md:text-xl">
							{m.homepage_section4_Sustainability()}
						</p>
					</div>
				</div>

				<div class="mt-28 pl-3 text-lg relative space-y-5"></div>
			</div>
		</div>

		<div class="mx-16 lg:w-[45%] flex flex-col self-center">
			<div class=" space-y-5">
				<p class="Archivo text-xl text-[#25285F]">
					{m.homepage_section4_My_Menthor()}
					<!-- My Menthor acts as a <strong> Digital Mentor </strong> with an
					<strong> approach centered </strong> on <span class="text-[#43ACB5]">being</span> and not on
					disruptive technologies. -->
				</p>
				<p class="Archivo text-xl text-[#25285F]">
					{m.homepage_section4_It_acts_as()}

					<!-- It acts as an <strong> information </strong> <span class="text-[#43ACB5]"> hub </span>,
					<strong> organizing knowledge </strong> in a single repository. -->
				</p>
			</div>
			<div class="col4 mt-5 max-lg:mt-10 md:px-40 lg:px-0">
				<div bind:this={animationContainer} />
			</div>
		</div>
	</div>
</section>

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');
		display: inline-block;
		margin-right: 10px; /* Adjust as needed */
		vertical-align: middle;
	}
</style>
