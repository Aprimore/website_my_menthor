<script lang="ts">
	import { page } from '$app/stores';
	import {
		linha_h_azul_2_svg,
		linha_h_azul_3_svg,
		linha_h_azul_svg,
		linha_v_amarela_svg,
		portfolio_services_ingles_svg,
		portfolio_services_portugues_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
	import { get } from 'svelte/store';

	const pathUrl = get(page).url.pathname.startsWith('/pt-BR');
	const selectedImage = pathUrl ? portfolio_services_portugues_svg : portfolio_services_ingles_svg;
</script>

<section class="w-full items-center relative rounded-lg pb-20 bg-[#F1F1F9]" id="portfolio-services">
	<div class="max-w-screen-2xl pt-20 lg:flex justify-center mx-auto">
		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="">
				<h1 class="xl:text-4xl text-3xl md:text-5xl relative Exo-Bold text-[#17193B] text-center">
					{@html m.solutions_PortfolioOfServices()}
					<img
						src={linha_h_azul_3_svg}
						class="max-md:max-w-[210px] mx-auto"
						alt="linha"
						loading="lazy"
						decoding="sync"
						fetchpriority="low"
					/>
				</h1>
			</div>
			<div
				class=" relative w-full h-full flex justify-center lg:p-5 max-md:p-3 max-w-2xl min-w-xl self-center"
			>
				<img
					src={selectedImage}
					class="px-3 w-full h-full max-lg:my-10"
					alt="Pyramid Chart"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
		</div>

		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="flex flex-col self-end max-lg:p-5 p-10">
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
					{@html m.solutions_WeAimForCustomer()}
				</p>
			</div>
			<div class="px- lg:px-10">
				<div
					class=" flex flex-col lg:self-end mr-5 min-h-[150px] bg-[#17193B] rounded-md max-sm:p-5 max-lg:mx-5 p-10 lg:max-w-[525px] xl:max-w-[710px]"
				>
					<div class="flex justify-center my-auto relative">
						<span class="absolute left-3 mt-3 max-sm:hidden"
							><img
								class="max-sm:hidden"
								src={linha_v_amarela_svg}
								alt="linha"
								loading="lazy"
								decoding="sync"
								fetchpriority="low"
							/></span
						>
						<p class="sm:ml-10 sm:mt-3 Archivo text-lg text-[#F1F1F9]">
							<!-- <span class="text-[#FCC614]"> We act as business partners </span>
						in management solutions before, during and after implementation, in pursuit of effective
						results for our clients. -->
							{@html m.solutions_WeActAsBusinessPartners()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
