<script>
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import {
		linha_h_1_svg,
		linha_h_4_svg,
		linha_h_azul_2_svg,
		linha_h_azul_3_svg,
		linha_h_azul_svg,
		linha_v_1_svg,
		linha_v_amarela_svg,
		portfolio_services_ingles_svg,
		portfolio_servicos_png
	} from '$lib';
</script>

<section class="w-full items-center relative rounded-lg pb-20 bg-[#F1F1F9]">
	<div class="max-w-screen-2xl pt-20 lg:flex justify-center mx-auto">
		<div class="lg:w-1/2 flex flex-col justify-center" id="portfolio-services">
			<div>
				<h1 class="text-4xl md:text-5xl relative Exo font-extrabold text-[#17193B] text-center">
					<!-- Portfolio of services -->
					{m.solutions_PortfolioOfServices()}
				</h1>
			</div>
			<img src={linha_h_azul_3_svg} class="max-md:max-w-[320px] mx-auto" alt="linha" />
			<img src={portfolio_services_ingles_svg} class=" max-w-[450px] mx-auto mt-10" alt="" />
		</div>

		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="max-w-2xl flex flex-col self-center p-10">
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					<!-- We carry out assessment, implementation consultancy and setup and we help our clients
					develop a strategy and roadmap for implementation roadmap. -->
					{m.solutions_WeCarryOutAssessment()}
				</p>
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					<!-- In <strong> addition to the software </strong>, we also offer mentoring and consultancy
					services to ensure the client's success, monitoring their progress and boosting their
					results. We also guarantee continuous availability of the platform and specialized
					technical support. -->
					{m.solutions_InAdditionToTheSoftware()}
				</p>
				<p class=" Archivo text-lg text-[#25285F]">
					<!-- We aim for customer success, guiding the user through the entire implementation journey,
					offering step-by-step implementation journey, guidance to achieve results, through
					knowledge base, targeted training and regular follow-up. Our aim is to ensure that each
					client achieves their objectives and extracts maximum value from our platform. -->
					{m.solutions_WeAimForCustomer()}
				</p>
			</div>
			<div
				class="xl:max-w-2xl flex flex-col self-center h-[150px] bg-[#17193B] rounded-md px-10 mx-10"
			>
				<div class="flex justify-center my-auto relative">
					<span class="absolute left-0 top-4"><img src={linha_v_amarela_svg} alt="" /></span>
					<p class="max-w-lg ml-7 mt-3 Archivo text-lg text-[#F1F1F9]">
						<!-- <span class="text-[#FCC614]"> We act as business partners </span>
						in management solutions before, during and after implementation, in pursuit of effective
						results for our clients. -->
						{m.solutions_WeActAsBusinessPartners()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
