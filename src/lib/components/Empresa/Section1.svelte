<script>
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import { empresa_1_png, linha_h_azul_2_svg, linha_h_azul_svg } from '$lib';
</script>

<section class="my-20 pb-20 bg-white">
	<div class="lg:h-[649px] lg:flex flex-row xl:max-w-screen-2xl mx-auto max-lg:p-5" id="about">
		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="lg:max-w-[600px] self-center space-y-8">
				<h1 class="Exo text-3xl sm:text-4xl z-10 relative text-[#17193B] Exo font-extrabold">
					<!-- The company -->
					{m.company_TheCompany()}
					<span><img src={linha_h_azul_2_svg} class="z-10 right-0" alt="linha" /></span>
				</h1>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- My Menthor is a product developed by <strong>
						APRIMORE Consultoria em Gestão Empresarial,</strong
					>
					based in
					<strong>Brazil</strong>, and <strong> TOPTIER Business Group,</strong> based in the
					<strong> USA </strong>. -->
					{m.company_AMyMenthorIsTheResult()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- It is the result of <strong
						>more than 20 years' experience in organizational management</strong
					>, with origins in <strong> consultancy specializing </strong> in
					<strong>Management (BPM)</strong> and expanded to Business Architecture. -->
					{m.company_ItIsAProductDeveloped()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- On this journey, we identified a gap in the market: the architecture tools available on
					the market were not simple enough to enable different areas of a company to work together
					to organize the business components around the strategy. This required very technical
					knowledge of notations and diagrams, which made it difficult to sharing with the business
					areas. -->
					{m.company_OnThisJourneyWeIdentified()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- That's when <strong> we developed a solution capable of helping organizations </strong> in
					the process of implementing, sustaining and evolving the Business Architecture. We believe
					that our platform has the
					<strong> real potential to take organizations to a new level of management </strong>,
					providing effective <strong> value for customers and stakeholders </strong>. -->
					{m.company_ThatsWhenWeDevelopedASolution()}
				</p>
			</div>
		</div>
		<div class="lg:w-1/2 p-4 relative lg:my-auto">
			<img src={empresa_1_png} class=" mx-auto rounded-lg" alt="" />
		</div>
	</div>
</section>
