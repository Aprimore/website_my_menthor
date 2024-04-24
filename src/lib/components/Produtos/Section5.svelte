<script>
	import { arrow_right_svg, empresa_1_png, linha_h_1_svg } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9] py-20">
	<div class="w-[1178px] h-[598px] flex justify-center items-center mx-auto bg-white flex-col">
		<div>
			<h1 class="text-[#17193B] text-4xl font-bold mb-12 Exo">
				Platform characteristics <span class=""><img src={linha_h_1_svg} alt="" /></span>
			</h1>
			<div class="">
				<div class="w-1/2"><img src={empresa_1_png} alt="" /></div>
				<div class="w-1/2">
					<div class="flex flex-col w-1/2">
						<div class="bg-white p-2 min-w-min">
							<p class="Exo check text-[#17193B] text-xl">Profits, revenue and margin</p>
						</div>
						<div class="bg-white p-2 min-w-min">
							<p class="Exo check text-[#17193B] text-xl">Perenniality</p>
						</div>
						<div class="bg-white p-2 min-w-min">
							<p class="Exo check text-[#17193B] text-xl">Sustainability</p>
						</div>
						<div class="bg-white p-2 min-w-min">
							<p class="Exo check text-[#17193B] text-xl">Continuity</p>
						</div>
						<div class="bg-white p-2 min-w-min">
							<p class="Exo check text-[#17193B] text-xl">Competitive advantage</p>
						</div>
						<div class="bg-white p-2 min-w-min">
							<p class="Exo check text-[#17193B] text-xl">Understanding the operation</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-16 flex flex-wrap gap-4">
		<a
			class="btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium text-[#17193B] bg-[#8ABB3F] focus:ring sm:w-auto z-10 relative Archivo"
			href="#"
		>
			Schedule a Demo
			<img src={arrow_right_svg} class="z-10 absolute right-5 bottom-[24px] size-3" alt="" />
		</a>
	</div>
</section>

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');

		margin-right: 10px; /* Adjust as needed */
	}
</style>
