<script lang="ts">
	import { arrow_right_svg, linha_h_azul_2_svg, piramid_home_pt_br_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';
	import Section_Cards from './Section_Cards.svelte';
</script>

<section class="w-full items-center relative rounded-lg bg-white mb-10">
	<div class="lg:max-w-screen-2xl flex flex-col lg:flex-row lg:mx-auto lg:items-center">
		<div class="lg:w-[670px] max-w-full flex lg:p-16 P-8 max-lg:order-2 max-lg:mx-auto">
			<img
				src={piramid_home_pt_br_svg}
				class="max-sm:px-5 max-w-full md:w-full max-sm:mb-10"
				alt=""
			/>
		</div>
		<div class="max-lg:p-5 lg:w-1/2 space-y-10 mt-8 lg:mt-16 max-lg:order-1">
			<h1 class="text-4xl relative Exo-Bold text-[#17193B] max-sm:text-center">
				{m.produtos_BreakingDownSilosAndBuildingBridges()}
				<!-- Breaking down silos and building bridges to organizational effectiveness -->
			</h1>
			<span class=""><img src={linha_h_azul_2_svg} class="w-[50%] max-sm:mx-auto" alt="" /></span>
			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.produtos_ThePlatformMakesItEasier()}
				<!--  The platform facilitates the rethinking of the organization at all layers, from the strategic to the operational level, represented by the pyramid with various
				dimensions. -->
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.produtos_ItFacilitatesTheImplementationOfTheStrategy()}
				<!-- It  facilitates the implementation of the strategy  by deploying it in a horizontal perspective for the processes of the value chain, synchronizing the organizational elements in a vision oriented by cross-cutting processes to ensure effective strategy execution  . -->
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.produtos_ToMakeSmarterBusinessDecisions()}
				{@html m.produtos_TheMyMenthorProvidesAView()}
				<!-- To make smarter business decisions, you need a 
					uniform view of the operation
				, with a true representation of how the business works and how it adds value to	customers and stakeholders. The  My Menthor  provides a view of the business model that will transform your fragmented understanding of the business into uniform knowledge and integrated action to improvements or transformations
				. -->
			</p>
		</div>
	</div>
	<!-- <Section_Cards /> -->
</section>
