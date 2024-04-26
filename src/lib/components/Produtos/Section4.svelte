<script>
	import {
		arrow_right_svg,
		clientes_parceiros_1_png,
		linha_h_5_svg,
		linha_h_amarela2_svg,
		linha_v_1_svg
	} from '$lib';
</script>

<section class="w-full bg-[#17193B]">
	<div class=" max-w-screen-2xl mx-auto flex items-center flex-row pt-20">
		<div class="w-1/2 p-10 space-y-10">
			<h1 class="Exo text-2xl sm:text-4xl z-10 relative text-[#F1F1F9] Exo font-extrabold">
				Target audience
				<span><img src={linha_h_amarela2_svg} class="z-10 right-0" alt="linha" /></span>
			</h1>
			<p class="text-[#D4D4ED] Archivo text-lg">
				The platform is aimed at companies wishing to implement, sustain or leverage management,
				regardless of their level of maturity.
			</p>
			<p class="text-[#D4D4ED] Archivo text-lg">
				We develop and empower people and organizations through their executives, managers, owners,
				custodians and process executors, empowering and engage them to improve the performance of
				their processes and consequently the organization's results.
			</p>
			<p class="text-[#D4D4ED] Archivo text-lg">
				Business, corporate and process architects, internal consultants and management management
				specialists enjoy the benefits of comprehensive and robust modeling of the robust modeling
				of the business and governance components of enterprise architecture offered by our
				platform.
			</p>
		</div>

		<div class="w-1/2 flex flex-col justify-center items-center">
			<img src={clientes_parceiros_1_png} alt="" />
		</div>
	</div>

	<div class=" max-w-screen-2xl mx-auto flex items-center flex-row">
		<div class="w-1/2 p-10">
			<img src={clientes_parceiros_1_png} alt="" />
		</div>
		<div class="w-1/2 space-y-10 p-10 mb-16">
			<p class="text-[#D4D4ED] Archivo text-lg">
				My Menthor is a business partner for corporate areas that face the challenge of
				implementing, disseminating and improving various management models in the organization.
				This includes, among other areas, strategic planning, process management, risks and internal
				controls, quality, information technology, human resources, PMO and sustainability.
			</p>
			<span class="absolute"><img src={linha_v_1_svg} alt="" /></span>
			<p class="text-[#D4D4ED] Archivo text-lg">
				My Menthor is also a strategic partner for management consultancies and independent
				consultants who wish to use the platform their clients' projects, ensuring the
				sustainability of the work and the improvements implemented after the project is completed.
			</p>
			<div class="mt-16 flex flex-wrap gap-4">
				<a
					class="btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium text-[#17193B] bg-[#8ABB3F] focus:ring sm:w-auto z-10 relative Archivo"
					href="#"
				>
					Schedule a Demo
					<img src={arrow_right_svg} class="z-10 absolute right-5 bottom-[24px] size-3" alt="" />
				</a>
			</div>
		</div>
	</div>
</section>
