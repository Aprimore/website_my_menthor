<script>
	import { arrow_right_svg, clientes_parceiros_4_png, fone_amarelo_svg, linha_h_4_svg } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg bg-white my-6 pb-12">
	<div class="h-[550px] pt-32 max-w-screen-2xl mx-auto flex flex-row">
		<div class="w-1/2 flex justify-center items-center relative">
			<img src={fone_amarelo_svg} class="absolute -top-10 right-0" alt="" />
			<img src={clientes_parceiros_4_png} class="" alt="" />
		</div>
		<div class="w-1/2 flex justify-center items-center relative z-20">
			<div
				class="card1 w-[816px] h-[332px] bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl mr-52 absolute flex flex-col justify-center items-center"
			>
				<div class=" max-w-2xl p-6 rounded-lg space-y-6">
					<h1 class="Exo text-5xl text-[#17193B] font-bold relative">Customer service channel</h1>

					<p class="  text-[#25285F] Archivo text-lg">
						Get in touch today and find out how we can boost your success together. Click on <strong
						>
							Contact Us
						</strong> and embark on this journey.
					</p>

					<div class=" flex flex-wrap">
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
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
