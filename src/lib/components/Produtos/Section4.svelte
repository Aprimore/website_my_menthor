<script>
	import {
		arrow_right_svg,
		clientes_parceiros_1_png,
		linha_h_5_svg,
		linha_h_amarela2_svg,
		linha_v_1_svg,
		linha_v_azul_svg,
		products_1_png,
		products_2_png
	} from '$lib';
</script>

<section class="w-full bg-[#17193B]">
	<div class="lg:max-w-screen-2xl mx-auto lg:flex flex-row items-center lg:pt-20 p-10">
		<div class="lg:w-1/2 lg:p-10 space-y-6 lg:space-y-10 max-lg:mb-10" id="target-audience">
			<h1 class="Exo text-3xl sm:text-4xl z-10 relative text-[#F1F1F9] Exo font-extrabold">
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

		<div class="lg:w-1/2 flex flex-col justify-center items-center">
			<img src={products_2_png} class="w-full" alt="" />
		</div>
	</div>

	<div class="lg:max-w-screen-2xl mx-auto lg:flex items-center flex-row">
		<div class="lg:w-1/2 space-y-6 lg:space-y-10 px-10  relative order-1">
			<p class="text-[#D4D4ED] Archivo text-lg">
				My Menthor is a business partner for corporate areas that face the challenge of
				implementing, disseminating and improving various management models in the organization.
				This includes, among other areas, strategic planning, process management, risks and internal
				controls, quality, information technology, human resources, PMO and sustainability.
			</p>
			<span class="absolute left-3"><img src={linha_v_azul_svg} class="" alt="" /></span>
			<p class="text-[#D4D4ED] Archivo text-lg">
				My Menthor is also a strategic partner for management consultancies and independent
				consultants who wish to use the platform their clients' projects, ensuring the
				sustainability of the work and the improvements implemented after the project is completed.
			</p>
		</div>
		<div class="lg:w-1/2 flex flex-col items-center p-10 max-lg:order-2">
			<img src={products_1_png} class="w-full" alt="" />
		</div>
	</div>
	<div>
		<button class="flex mx-auto pb-10 mt-5">
			<a
				class="btn-demo bg-[#8abb3f] rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring relative"
				href="/company#contact"
			>
				Schedule a Demo
			</a>
		</button>
	</div>
</section>

<style>
	.btn-demo::after {
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
