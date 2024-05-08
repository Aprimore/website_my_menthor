<script lang="ts">
	import {
		arrow_right_svg,
		clientes_parceiros_3_webp,
		clientes_parceiros_5_webp,
		linha_h_azul_svg
	} from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="w-full rounded-lg bg-[#D4D4ED] lg:py-16" id="clients">
	<div class=" lg:flex flex-row pt-20">
		<div class="lg:w-1/2 flex justify-center items-center mx-auto">
			<div class="card bg-white lg:w-[694px] max-h-[364px] rounded-md relative">
				<div class="p-10 max-sm:p-3 xl:p-16 space-y-7 relative">
					<h1 class="text-4xl sm:text-5xl z-10 text-[#17193B] Exo-Bold max-sm:text-center">
						{m.clientesP_PartnerProgram()}
						<span
							><img
								src={linha_h_azul_svg}
								class="z-10 max-sm:mx-auto max-sm:max-w-72"
								alt="linha"
							/></span
						>
					</h1>
					<p class="Archivo text-[#25285F] text-lg">
						<!-- Register and discover the benefits of our partner programs programs and how we can work together to achieve exceptional results. -->
						{m.clientesP_RegisterAndDiscover()}
					</p>
					<div class="space-x-5 flex flex-row">
						<button class="Exo">
							<a
								class="btn-partner bg-[#8abb3f] block w-full rounded-xl px-5 md:px-10 py-4 md:text-lg text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
								href="/company#contact"
							>
								<!-- Become a Partner -->
								{m.clientesP_PartnerProgram()}
							</a>
						</button>

						<button
							class=" rounded-xl px-10 py-4 md:text-lg bg-white text-[#17193B] border border-[#17193B] relative"
						>
							<a class=" Archivo" href="/customers_and_partners">
								<!-- Partner Portal  -->
								{m.clientesP_PartnerProgram()}
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:w-1/2 lg:flex">
			<div class="flex flex-row justify-center items-center">
				<img src={clientes_parceiros_3_webp} class="w-full mt-8 md:mb-16 mr-5" alt="" />
				<img src={clientes_parceiros_5_webp} class="w-full mb-8 md:mt-16" alt="" />
			</div>
		</div>
	</div>
</section>

<style>
	.btn-partner::after {
		content: url('$lib/assets/svg/arrow_right_claro.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
