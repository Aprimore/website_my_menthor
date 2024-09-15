<script lang="ts">
	import Section_Cards2 from './Section_Cards2.svelte';
	import { page } from '$app/stores';
	import { piramid_home_en_svg, piramid_home_pt_br_svg } from '$lib';
	import * as m from '$paraglide/messages';
	import { get } from 'svelte/store';
	import LoadingSpinner from '../LoadingSpinner.svelte';
	// import Section_Cards from './Section_Cards.svelte';

	const pathUrl = get(page).url.pathname;
	const selectedImage = pathUrl === '/' ? piramid_home_en_svg : piramid_home_pt_br_svg;
</script>

<section class=" w-full items-center relative rounded-lg max-sm:p-2">
	<div class=" md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg">
		<div class="flex xl:p-16 max-lg:order-2 px-5 mx-5">
			<img
				src={selectedImage}
				class="w-full max-sm:mb-10 mt-14"
				alt="Pyramid Chart"
				loading="lazy"
				decoding="sync"
				fetchpriority="low"
			/>
		</div>
		<div class="max-lg:p-5 lg:w-1/2 space-y-6 mt-8 lg:mt-16 max-lg:order-1">
			<h2 class="xl:text-4xl text-3xl relative Exo-Bold text-[#17193B] blue-underline">
				{@html m.homepage_section3_Breaking()}
			</h2>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.homepage_section3_The_platform()}
				<!--  The platform facilitates the rethinking of the organization 
				at all layers, from the strategic to the operational level, represented by the pyramid with various
				dimensions. -->
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.homepage_section3_It_facilitates()}
				<!-- It  facilitates the implementation of the strategy  by deploying it in a
				horizontal perspective for the processes of the value chain, synchronizing the
				organizational elements in a vision oriented by cross-cutting processes to
				 ensure effective strategy execution  . -->
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.homepage_section3_To_make_smarter()}
				<!-- To make smarter business decisions, you need a 
					uniform view of the operation
				, with a true representation of how the business works and how it adds value to
				customers and stakeholders. The  My Menthor  provides a
				 view of the business 
				model that will transform your fragmented understanding of the business into
				
					uniform knowledge and integrated action to improvements or transformations
				. -->
			</p>
		</div>
	</div>
</section>
<div class="caroussel">
	<!-- <Section_Cards /> -->
	<Section_Cards2 />
</div>

<style>
	h2.blue-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_azul2.svg');
		background-repeat: no-repeat;
		background-position: bottom left;
		padding-bottom: 10px;
	}
	@media (max-width: 638px) {
		h2.blue-underline {
			background-position: bottom;
			background-size: 100% auto;
		}
	}
</style>
