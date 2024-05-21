<script>
	import { browser } from '$app/environment';
	import * as m from '$lib/paraglide/messages';
	import Carousel from 'svelte-carousel';

	let activeDot = 'dot-1'; // Initialize active dot to 'dot-1'

	let carousel;
	const goToNextPage = () => {
		activeDot = 'dot-1';
		carousel.goToNext();
	};

	function goToPrevPage() {
		activeDot = 'dot-2';
		carousel.goToPrev();
	}
</script>

<section class="relative rounded-lg w-full p-12">
	<div class="max-w-fit lg:max-w-screen-xl mx-auto">
		{#if browser}
			<Carousel
				bind:this={carousel}
				let:showPrevPage
				let:showNextPage
				let:currentPageIndex
				let:pagesCount
				let:showPage
			>
				<!-- <button
						symbol={pageIndex + 1}
						active={currentPageIndex === pageIndex}
						on:click={() => showPage(pageIndex)}
					></button> -->
				<!-- <div slot="dots" class="flex gap-3">
					<button on:click={goToPrevPage} class="dot-1 size-3 bg-[#25285F] rounded-full"></button>
					<button on:click={goToNextPage} class="dot-2 size-3 bg-[#25285F] rounded-full"></button>
				</div> -->
				<div slot="dots" class="flex gap-3">
					<button
						on:click={goToPrevPage}
						class:active={activeDot === 'dot-1'}
						class="border border-black dot-1 size-3 bg-{activeDot === 'dot-1'
							? '#25285F'
							: 'gray'} rounded-full"
					></button>
					<button
						on:click={goToNextPage}
						class:active={activeDot === 'dot-2'}
						class="border border-black dot-2 size-3 bg-{activeDot === 'dot-2'
							? '#25285F'
							: 'gray'} rounded-full"
					></button>
				</div>

				<!-- -->
				<!-- =========================== BUTTONS -->

				<button on:click={goToPrevPage} slot="prev" class=" w-10 h-10 nav-button m-auto">
					<i class="arrow-right"></i>
				</button>
				<button on:click={goToNextPage} slot="next" class=" w-10 h-10 nav-button m-auto">
					<i class="arrow-left"></i>
				</button>

				<!-- =========================== BUTTONS -->
				<div class="w-full flex flex-col md:flex-row md:justify-center md:space-x-6 mb-6">
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

	.arrow-right::before {
		content: url('$lib/assets/svg/arrow_downward_alt.svg');
		display: inline-block;
		margin-top: 10px;
		position: relative;
		filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5)); /* Drop shadow */
	}

	.arrow-left::before {
		content: url('$lib/assets/svg/arrow_downward_alt.svg');
		display: inline-block;
		transform: rotate(180deg); /* Rotate 180 degrees to the left */
		position: relative;
		filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5)); /* Drop shadow */
	}

	/* .sc-carousel-dot, .sc-carousel-dot__dot_active {
		opacity: 0;
		height: 500px;
		width: 500px;
	}
	.sc-carousel-dot, .sc-carousel-dot__dot_active{
		background-color: blue;
		border-radius: 50%;
		display: inline-block;
		opacity: 0.5;
		transition:
			opacity 100ms ease,
			height var(--sc-dot-size-animation-time) ease,
			width var(--sc-dot-size-animation-time) ease;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		height: var(--sc-dot-size);
		width: var(--sc-dot-size);
	} */
</style>
