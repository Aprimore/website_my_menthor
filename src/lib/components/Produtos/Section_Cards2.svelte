<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import * as m from '$paraglide/messages';
	import { onMount } from 'svelte';
	import Carousel from 'svelte-carousel';
	import { register } from 'swiper/element/bundle';
	import 'swiper/swiper-bundle.css';
	let loading = true;
	onMount(async () => {
		if (browser) {
			loading = false;
			await register();
		}
	});
	const spaceBetween = 10;

	// let carousel: any;
	// const goToNextPage = () => {
	// 	activeDot = 'dot-1';
	// 	carousel.goToNext();
	// };

	// function goToPrevPage() {
	// 	activeDot = 'dot-2';
	// 	carousel.goToPrev();
	// }
</script>

{#if !loading}
	<section class="text-balance py-16 background-img4" data-sveltekit-preload-data="viewport">
		<div class="lg:max-w-screen-lg sm:mx-auto max-sm:p-2">
			<!-- Swiper slider container with navigation enabled -->
			<swiper-container
				spaceBetween={30}
				lazy={true}
				navigation={true}
				manipulation={true}
				loop={true}
				class="mySwiper"
				space-between={spaceBetween}
				slides-per-view={1}
				breakpoints={{
					640: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2
					},
					1280: {
						slidesPerView: 2
					}
				}}
				speed={500}
			>
				<!-- loop={true} -->
				<!-- on:swiperprogress={onProgress} -->
				<!-- on:swiperslidechange={onSlideChange} -->
				<!-- Slider content -->
				<!----------------------- EBOOK_STARTUP ------------------------------------->
				<swiper-slide>
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
				</swiper-slide>
				<div class="swiper-button-prev"></div>
				<!----------------------- EBOOK_PLAN ------------------------------------->
				<swiper-slide>
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
					</div></swiper-slide
				>
				<!----------------------- EBOOK_KID_MONEY ------------------------------------->
				<swiper-slide>
					<div
						class="max-sm:h-1/2 card1 bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg flex items-center"
					>
						<div class="flex flex-col mx-auto p-12 rounded-lg align-top">
							<h2 class="title-sd Exo text-2xl max-w-sm text-transparent">.</h2>

							<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
								{@html m.produtos_ItContainsItsOwnEmbeddedMethodology()}
								<!-- Emphasizes BPM as a Management Model, facilitating the structuring, instrumentation and implementation of the topic, highlighting the results of the various process mapping and improvement initiatives. -->
							</p>
						</div>
					</div></swiper-slide
				>
				<!----------------------- EBOOK_IADVOCATICIA ------------------------------------->
				<swiper-slide>
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
					</div></swiper-slide
				>
			</swiper-container>
		</div>
	</section>
{/if}

<style>
	/* Zoom responsiveness */
	/* @media only screen and (max-width: 1400px) {
		.caroussel {
			zoom: 127%;
		}
	}

	@media only screen and (max-width: 600px) {
		.caroussel {
			zoom: 100%;
		}
	} */

	/* .swiper-button-next,
	.swiper-button-prev {
		background-color: white;
		background-color: rgba(255, 255, 255, 0.5);
		right: 10px;
		padding: 30px;
		color: #000 !important;
		fill: black !important;
		stroke: black !important;
	} */

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

	/* .title-ms::before {
		content: url('$lib/assets/svg/ads_click.svg');
	} */
	.title-sd::before {
		content: url('$lib/assets/svg/map.svg');
	}
	.title-od::before {
		content: url('$lib/assets/svg/cog.svg');
	}

	/* .arrow-right::before {
		content: url('$lib/assets/svg/arrow_downward_alt.svg');
		display: inline-block;
		margin-top: 10px;
		position: relative;
		filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
	} */

	/* .arrow-left::before {
		content: url('$lib/assets/svg/arrow_downward_alt.svg');
		display: inline-block;
		transform: rotate(180deg); 
		position: relative;
		filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
	} */
</style>
