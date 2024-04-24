<script>
	import { arrow_right_svg, clientes_parceiros_4_png, linha_h_4_svg } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20 bg-[#17193B]">
	<div class="h-[550px] flex flex-row pt-20">
		<div>
			<img src={clientes_parceiros_4_png} alt="" />
		</div>
		<div
			class="card1 w-[816px] h-[332px] flex absolute top-[70px] left-[605px] flex-start bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl"
		>
			<div class=" max-w-2xl p-6 rounded-lg mt-12 ml-12">
				<h1 class="Exo text-4xl text-[#17193B] font-bold relative">
					Customer service channel
					<span><img src={linha_h_4_svg} class="z-10 absolute" alt="linha" /></span>
				</h1>

				<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
					Get in touch today and find out how we can boost your success together. Click on Contact
					Us and embark on this journey.
				</p>

				<div class="mt-8 flex flex-wrap gap-4">
					<a
						class="Archivo btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium bg-[#8ABB3F] text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
						href="#"
					>
						Contact Us
						<img src={arrow_right_svg} class="z-10 absolute right-5 bottom-[24px] size-3" alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
