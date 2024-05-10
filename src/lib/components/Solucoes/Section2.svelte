<script lang="ts">
	import {
		linha_h_azul_2_svg,
		linha_h_azul_3_svg,
		linha_h_azul_svg,
		linha_v_amarela_svg,
		piramid_home_pt_br_svg
	} from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="w-full items-center relative rounded-lg pb-20 bg-[#F1F1F9]" id="portfolio-services">
	<div class="max-w-screen-2xl pt-20 lg:flex justify-center mx-auto">
		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="">
				<h1 class="text-4xl md:text-5xl relative Exo-Bold text-[#17193B] text-center">
					{m.solutions_PortfolioOfServices()}
					<img
						src={linha_h_azul_3_svg}
						class="max-md:max-w-[320px] mx-auto"
						alt="linha"
						loading="lazy"
						decoding="sync"
						fetchpriority="low"
					/>
				</h1>
			</div>
			<div class=" relative w-full h-full flex justify-center lg:justify-end lg:align-end">
				<img
					src={piramid_home_pt_br_svg}
					class="px-3 max-w-[99%]"
					alt="Pyramid Chart"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
		</div>

		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="lg:max-w-2xl flex flex-col self-center max-lg:p-5 p-10">
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					<!-- We carry out assessment, implementation consultancy and setup and we help our clients
					develop a strategy and roadmap for implementation roadmap. -->
					{@html m.solutions_WeCarryOutAssessment()}
				</p>
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					<!-- In addition to the software, we also offer mentoring and consultancy
					services to ensure the client's success, monitoring their progress and boosting their
					results. We also guarantee continuous availability of the platform and specialized
					technical support. -->
					{@html m.solutions_InAdditionToTheSoftware()}
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
				class="lg:max-w-2xl flex flex-col lg:self-center min-h-[150px] bg-[#17193B] rounded-md px-10 max-sm:p-5 mx-10 max-lg:mx-5"
			>
				<div class="flex justify-center my-auto relative">
					<span class="absolute left-0 top-4"
						><img
							src={linha_v_amarela_svg}
							alt="linha"
							loading="lazy"
							decoding="sync"
							fetchpriority="low"
						/></span
					>
					<p class="lg:max-w-lg ml-7 mt-3 Archivo text-lg text-[#F1F1F9]">
						<!-- <span class="text-[#FCC614]"> We act as business partners </span>
						in management solutions before, during and after implementation, in pursuit of effective
						results for our clients. -->
						{@html m.solutions_WeActAsBusinessPartners()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
