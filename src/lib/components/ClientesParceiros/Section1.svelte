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
	<div class=" lg:flex flex-row pt-20 p-5">
		<div class="lg:w-1/2 flex justify-end items-center mx-auto lg:mr-10">
			<div class="card bg-white lg:max-w-[794px] rounded-md">
				<div class="p-10 max-sm:p-3 xl:p-20 space-y-7">
					<h1
						class="blue-underline text-4xl sm:text-5xl z-10 text-[#17193B] Exo-Bold max-sm:text-center max-w-fit"
					>
						{m.clientesP_PartnerProgram()}
					</h1>
					<p class="Archivo text-[#25285F] text-xl">
						<!-- Register and discover the benefits of our partner programs programs and how we can work together to achieve exceptional results. -->
						{m.clientesP_RegisterAndDiscover()}
					</p>
					<div class="sm:space-x-5 sm:flex flex-row max-sm:space-y-3">
						<button class="Exo max-sm:w-full">
							<a
								class="btn-partner bg-[#8abb3f] block w-full rounded-xl px-5 md:px-10 py-4 md:text-lg text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
								href="/company#contact"
							>
								<!-- Become a Partner -->
								{m.clientesP_PartnerProgram()}
							</a>
						</button>

						<button
							class=" rounded-xl px-10 py-4 md:text-lg bg-white text-[#17193B] border border-[#17193B] relative max-sm:w-full"
						>
							<a class=" Archivo" href="/customers_and_partners">
								<!-- Partner Portal  -->
								{m.button_portal()}
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:w-1/2 lg:flex max-lg:mt-20">
			<div class="flex flex-row justify-center items-center">
				<img
					src={clientes_parceiros_3_webp}
					class="w-full max-w-[338px] -mt-32 md:mb-16 mr-5"
					alt="Webp Vector"
					loading="eager"
					decoding="async"
					fetchpriority="high"
				/>
				<img
					src={clientes_parceiros_5_webp}
					class="w-full max-w-[338px] md:mt-16"
					alt="Webp Vector"
					loading="eager"
					decoding="async"
					fetchpriority="high"
				/>
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

	h1.blue-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_azul.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		padding-bottom: 10px;
		background-size: 100% auto; /* Adjust background size */
	}

	@media (max-width: 709px) {
		h1.blue-underline {
			background-size: 100% auto;
		}
	}
</style>
