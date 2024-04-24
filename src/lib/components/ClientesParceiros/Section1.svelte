<script>
	import {
		arrow_right_svg,
		clientes_parceiros_3_png,
		clientes_parceiros_5_png,
		linha_h_5_svg
	} from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20 bg-[#D4D4ED]">
	<div class="h-[649px] flex flex-row pt-20">
		<div class="w-1/2">
			<div class="card bg-white">
				<h1 class="Exo text-2xl sm:text-4xl z-10 relative text-[#17193B] Exo font-extrabold">
					Partner program
					<span><img src={linha_h_5_svg} class="z-10 absolute right-0" alt="linha" /></span>
				</h1>
				<p class="Archivo text-[#25285F]">
					Register and discover the benefits of our partner programs programs and how we can work
					together to achieve exceptional results.
				</p>
				<button class=" flex flex-wrap gap-4">
					<a
						class="Archivo btn-agendar flex items-center text-base text-[#F1F1F9] py-4 px-10 mt-5 rounded-lg relative"
						href="#"
					>
						Become a partner
						<img src={arrow_right_svg} class="z-10 absolute right-5 bottom-[22px] size-3" alt="" />
					</a>
				</button>

				<div class="mt-8 flex flex-wrap gap-4">
					<a
						class=" Archivo btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium bg-[#8abb3f] text-[#17193B] border border-[#17193B] focus:ring sm:w-auto z-10 relative"
						href="#"
					>
						Partner Portal
					</a>
				</div>
			</div>
		</div>
		<div class="w-1/2">
			<img src={clientes_parceiros_3_png} alt="" />
			<img src={clientes_parceiros_5_png} alt="" />
		</div>
	</div>
</section>
