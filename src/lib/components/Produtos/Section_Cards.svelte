<script>
	import { browser } from '$app/environment';
	import * as m from '$lib/paraglide/messages';
	import Carousel from 'svelte-carousel';

	let carousel; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<section class="relative rounded-lg w-full p-12">
	<div class="max-w-fit lg:max-w-screen-xl mx-auto">
		{#if browser}
			<Carousel bind:this={carousel}>
				<div class="w-full flex flex-col md:flex-row md:justify-center md:space-x-6">
					<div
						class="max-sm:h-1/2 card1 bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg flex items-center"
					>
						<div class="flex flex-col mx-auto p-12 rounded-lg align-top">
							<h1 class=" title-om Exo text-2xl max-w-sm text-transparent">.</h1>

							<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
								{@html m.produtos_ItSupportsDifferentLevelsOfMaturity()}
								<!-- It contains its own embedded methodology with an approach to corporate development,
					which helps in diagnosis, defining the implementation strategy, and guiding the step-by-step
					the evolution of organizational maturity. -->
							</p>
						</div>
					</div>
					<div
						class="max-sm:h-1/2 card1 bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg flex items-center"
					>
						<div class="flex flex-col mx-auto p-12 rounded-lg align-top -top">
							<h2 class="title-od Exo text-2xl max-w-sm text-transparent">.</h2>

							<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
								{@html m.produtos_EmphasizesBusinessProcessManagement()}
								<!-- It supports different levels of maturity and
					  deployment strategies through its modular and flexible approach. -->
							</p>
						</div>
					</div>
				</div>

				<div class="w-full flex flex-col md:flex-row md:justify-center md:space-x-6">
					<div
						class="max-sm:h-1/2 card1 bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg flex items-center"
					>
						<div class="flex flex-col mx-auto p-12 rounded-lg align-top">
							<h2 class="title-sd Exo text-2xl max-w-sm text-transparent">.</h2>

							<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
								{@html m.produtos_EmphasizesBusinessProcessManagement()}
								<!-- Emphasizes BPM as a Management Model, facilitating the structuring, instrumentation and implementation of the topic, highlighting the results of the various process mapping and improvement initiatives. -->
							</p>
						</div>
					</div>
					<div
						class="max-sm:h-1/2 card1 bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg flex items-center"
					>
						<div class="flex flex-col mx-auto p-12 rounded-lg align-top">
							<h2 class="title-ms Exo text-2xl max-w-sm text-transparent">.</h2>

							<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
								{@html m.produtos_DecompplicatesAndDecentralizesTheTopic()}
								<!-- Decomplicates and decentralizes the topic, so that the business areas
					   take responsibility for their processes and results, with the support of governance
					   mechanisms and integrated into the organizational components and capabilities -->
							</p>
						</div>
					</div>
				</div>
			</Carousel>
		{/if}

		<!-- <button on:click={handleNextClick}>Next</button> -->
	</div>
</section>

<style>
	.title-om::before,
	.title-ms::before,
	.title-sd::before,
	.title-od::before {
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
		margin-bottom: -5px;
	}

	.title-om::before {
		content: url('$lib/assets/svg/notes.svg');
	}

	.title-ms::before {
		content: url('$lib/assets/svg/ads_click.svg');
	}
	.title-sd::before {
		content: url('$lib/assets/svg/map.svg');
	}
	.title-od::before {
		content: url('$lib/assets/svg/cog.svg');
	}
</style>
