<script>
	import {
		arrow_right_svg,
		clientes_parceiros_3_png,
		clientes_parceiros_5_png,
		linha_h_5_svg,
		linha_h_azul_svg
	} from '$lib';
</script>

<section class="w-full rounded-lg bg-[#D4D4ED]">
	<div class="h-[649px] flex flex-row pt-20">
		<div class="w-1/2 flex justify-center items-center">
			<div class="card bg-white w-[694px] max-h-[364px] rounded-md relative ml-60 mb-6">
				<div class="p-16 mx-5 space-y-7">
					<h1 class="Exo text-3xl sm:text-5xl z-10 text-[#17193B] Exo font-extrabold">
						Partner program
						<span><img src={linha_h_azul_svg} class="z-10 right-0" alt="linha" /></span>
					</h1>
					<p class="Archivo text-[#25285F] text-lg">
						Register and discover the benefits of our partner programs programs and how we can work
						together to achieve exceptional results.
					</p>
					<div class="space-x-5">
						<button>
							<a
								class="btn-partner bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
								href="#"
							>
								Become a Partner
							</a>
						</button>

						<button
							class=" rounded-xl px-10 py-4 text-lg bg-white text-[#17193B] border border-[#17193B] relative"
						>
							<a class=" Archivo" href="#"> Partner Portal </a>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="w-1/2 relative border-black">
			<div class=" relative flex flex-row justify-center items-center h-full">
				<img
					src={clientes_parceiros_3_png}
					class="absolute left-[30px] top-[30px] size-[332px]"
					alt=""
				/>
				<img src={clientes_parceiros_5_png} class="absolute right-[220px] size-[332px]" alt="" />
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
