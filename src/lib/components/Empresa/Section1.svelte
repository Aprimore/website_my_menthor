<script>
	import * as m from '$paraglide/messages';
	import { empresa_1_png, linha_h_azul_2_svg, linha_h_azul_svg } from '$lib';
</script>

<section class="mt-4 lg:my-16 pb-20 bg-white">
	<div class="lg:h-[649px] lg:flex flex-row xl:max-w-screen-2xl mx-auto max-lg:p-5" id="about">
		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="lg:max-w-[600px] self-center space-y-8">
				<h1 class="text-4xl sm:text-5xl max-sm:text-center z-10 relative text-[#17193B] Exo-Bold">
					<!-- The company -->
					{m.company_TheCompany()}
					<span><img src={linha_h_azul_2_svg} class="z-10 max-sm:mx-auto" alt="linha" /></span>
				</h1>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- My Menthor is a product developed by APRIMORE Consultoria em Gestão Empresarial, based in Brazil, and TOPTIER Business Group, based in the USA . -->
					{@html m.company_AMyMenthorIsTheResult()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- It is the result of more than 20 years' experience in organizational management, with origins in consultancy specializing in Management (BPM) and expanded to Business Architecture. -->
					{@html m.company_ItIsAProductDeveloped()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- On this journey, we identified a gap in the market: the architecture tools available on the market were not simple enough to enable different areas of a company to work together to organize the business components around the strategy. This required very technical knowledge of notations and diagrams, which made it difficult to sharing with the business areas. -->
					{m.company_OnThisJourneyWeIdentified()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- That's when  we developed a solution capable of helping organizations in the process of implementing, sustaining and evolving the Business Architecture. We believe that our platform has the real potential to take organizations to a new level of management, providing effective  value for customers and stakeholders. -->
					{@html m.company_ThatsWhenWeDevelopedASolution()}
				</p>
			</div>
		</div>
		<div class="lg:w-1/2 lg:p-4 mt-3 relative lg:my-auto">
			<img src={empresa_1_png} class=" mx-auto rounded-lg" alt="" />
		</div>
	</div>
</section>
