<script lang="ts">
	import * as m from '$paraglide/messages';
	import { arrow_right_svg, clientes_parceiros_4_webp, fone_amarelo_svg } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg bg-white md:my-6 md:pb-12 p-3">
	<div
		class="max-lg:h-[610px] pt-16 lg:pt-32 lg:max-w-screen-2xl mx-auto lg:flex flex-row"
		id="support"
	>
		<div class="lg:w-2/3 flex max-lg:justify-start justify-center items-center">
			<div class="relative">
				<img src={clientes_parceiros_4_webp} class="" alt="" />
				<img
					src={fone_amarelo_svg}
					class="absolute max-md:-top-1 max-md:-right-1 -top-5
					-right-5"
					alt=""
				/>
			</div>
		</div>
		<div class="lg:w-1/3 flex justify-center max-lg:justify-end items-center relative z-20 mr-auto">
			<div
				class="card1 xl:w-[716px] lg:w-[600px] xl:h-[332px] max-lg:max-w-[700px] bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl lg:mr-72 absolute flex flex-col justify-center items-center max-sm:mt-40"
			>
				<div class="lg:max-w-2xl p-6 rounded-lg space-y-6">
					<h1 class="Exo-Bold text-3xl md:text-4xl lg:text-5xl text-[#17193B] relative">
						<!-- Customer service channel -->
						{m.clientesP_CustomerServiceChannel()}
					</h1>

					<p class="  text-[#25285F] Archivo text-lg">
						<!-- Get in touch today and find out how we can boost your success together. Click on 
							Contact Us and embark on this journey. -->
						{@html m.clientesP_GetInTouchToday()}
					</p>

					<button class="Exo">
						<a
							class="btn-contact bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
							href="/company#contact"
						>
							<!-- Contact Us -->
							{m.footer_Contact_us()}
						</a>
					</button>

					<!-- <div class=" flex flex-wrap">
						<a
							class="Archivo btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium bg-[#8ABB3F] text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
							href="#"
						>
							Contact Us
							<img
								src={arrow_right_svg}
								class="z-10 absolute right-5 bottom-[24px] size-3"
								alt=""
							/>
						</a>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.btn-contact::after {
		content: url('$lib/assets/svg/arrow_right_claro.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
