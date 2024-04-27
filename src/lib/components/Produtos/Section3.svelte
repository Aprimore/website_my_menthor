<script>
	import { linha_h_1_svg, piramide_ingles_svg, the_platform_png } from '$lib';
	import Section_Cards from './Section_Cards.svelte';
</script>

<section class="w-full bg-white">
	<div class="">
		<div class="max-w-screen-2xl mx-auto flex flex-row">
			<div class="w-[670px] flex p-16 relative">
				<img src={piramide_ingles_svg} class="absolute max-w-[510px] top-0" alt="" />
			</div>
			<div class=" w-1/2">
				<h1 class="text-2xl sm:text-4xl relative Exo font-extrabold text-[#17193B]">
					Breaking down silos and building bridges to organizational effectiveness
				</h1>
				<span class="absolute"><img src={linha_h_1_svg} alt="" /></span>
				<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
					<strong> The platform facilitates the rethinking of the organization </strong>
					at all layers, from the strategic to the operational level, represented by the pyramid with
					various dimensions.
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
	</div>
</section>
<Section_Cards />
