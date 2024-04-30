<script lang="ts">
	import { base } from '$app/paths';
	import { arrow_right_svg, linha_h_1_svg, piramide_ingles_svg, the_platform_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20 bg-[#F1F1F9]">
	<div class="max-w-screen-2xl flex flex-col lg:flex-row lg:pt-20 mx-auto items-center">
		<div class="w-[670px] flex px-24 lg:p-16 max-lg:order-2">
			<img src={piramide_ingles_svg} class="" alt="" />
		</div>
		<div class="max-lg:p-10 lg:w-1/2 space-y-10 mt-8 lg:mt-16 max-lg:order-1">
			<h1 class="text-2xl sm:text-4xl relative Exo font-extrabold text-[#17193B]">
				Breaking down silos and building bridges to organizational effectiveness
			</h1>
			<span class=""><img src={linha_h_1_svg} alt="" /></span>
			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				<strong> The platform facilitates the rethinking of the organization </strong>
				at all layers, from the strategic to the operational level, represented by the pyramid with various
				dimensions.
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				It <strong> facilitates the implementation of the strategy </strong> by deploying it in a
				horizontal perspective for the processes of the value chain, synchronizing the
				organizational elements in a vision oriented by cross-cutting processes to
				<strong> ensure effective strategy execution </strong> .
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				To make smarter business decisions, you need a <strong>
					uniform view of the operation
				</strong>, with a true representation of how the business works and how it adds value to
				customers and stakeholders. The <strong> My Menthor </strong> provides a
				<strong> view of the business </strong>
				model that will transform your fragmented understanding of the business into
				<strong>
					uniform knowledge and integrated action to improvements or transformations
				</strong>.
			</p>
		</div>
	</div>
	<div class="flex justify-center mt-8">
		<button class="border border-[#17193B] rounded-xl mb-20">
			<a
				class="Archivo btn-learn bg-[#F1F1F9] block w-full rounded-xl px-10 py-4 text-xl text-[#17193B] focus:ring sm:w-auto z-10 relative"
				href="{base}/products#platform"
			>
				Learn More
			</a>
		</button>
	</div>
</section>

<style>
	.btn-learn::after {
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
