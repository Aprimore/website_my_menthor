<script>
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import {
		analytics_svg,
		arrow_right_svg,
		check_list_svg,
		empresa_1_png,
		line_graph_svg,
		linha_h_1_svg,
		products_1_png
	} from '$lib';
</script>

<!-- <section class="w-full items-center relative rounded-lg bg-[#F1F1F9]">
	<div class="h-[634px] max-w-screen-2xl mx-auto flex items-center flex-row my-16">
		<div class="w-1/2 relative p-10 space-y-10"> -->

<section class="w-full bg-[#F1F1F9] py-20">
	<h1 class="text-[#17193B] text-4xl font-bold mb-12 Exo text-center">
		{m.solutions_PlatformCharacteristics()}
		<!-- Platform characteristics -->
	</h1>
	<div
		class="flex justify-center items-center mx-auto bg-white flex-col lg:min-w-[1120px] rounded-md"
	>
		<div class=" max-md:w-full">
			<div class="md:flex flex-row relative">
				<div class="md:w-1/2 mx-auto p-10">
					<img src={line_graph_svg} class="w-full sm:p-10" alt="" />
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class="lg:p-20 max-md:p-10">
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Profits, revenue and margin -->
								{m.homepage_section4_Profits()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Perenniality  -->
								{m.produtos_Sustainability_1()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Sustainability -->
								{m.produtos_Sustainability_2()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								{m.produtos_Continuity()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Competitive advantage -->
								{m.produtos_CompetitiveAdvantage()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Understanding the operation -->
								{m.produtos_UnderstandingTheOperation()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class=" max-md:w-full">
			<div class="md:flex flex-row relative">
				<div class="md:w-1/2 mx-auto p-10 md:order-2">
					<img src={analytics_svg} class="w-full sm:p-10" alt="" />
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class="lg:p-20 p-10">
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Maturity and performance -->
								{m.produtos_MaturityAndPerformance()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Integration of initiatives -->
								{m.produtos_IntegrationOfInitiatives()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Reduces functional silos -->
								{m.produtos_ReducesFunctionalSilos()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Visibility of the impact of changes -->
								{m.produtos_VisibilityOfTheImpactOfChanges()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Knowledge retention -->
								{m.produtos_KnowledgeRetention()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Quality in products and services -->
								{m.produtos_QualityInProductsAndServices()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Generating value for stakeholders -->
								{m.produtos_GeneratingValueForStakeholders()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Customer experience -->
								{m.produtos_CustomerExperience()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class=" max-md:w-full">
			<div class="md:flex flex-row relative">
				<div class="md:w-1/2 mx-auto p-10">
					<img src={check_list_svg} class="w-full max-sm:p-10" alt="" />
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class="lg:p-20 max-md:p-10">
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Standardization -->
								{m.produtos_Standardization()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Efficiency and productivity x effectiveness -->
								{m.produtos_EfficiencyAndProductivityXEffectiveness()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Reduction of costs, deadlines and rework -->
								{m.produtos_ReductionOfCostsDeadlinesAndRework()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Process innovation -->
								{m.produtos_ProcessInnovation()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Compliance, conformity and risks -->
								{m.produtos_ComplianceConformityAndRisks()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo check text-[#17193B] font-bold text-xl text-nowrap">
								<!-- Clarity of roles and responsibilities -->
								{m.produtos_ClarityOfRolesAndResponsibilities()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-16 gap-4 mx-auto max-w-max">
		<button>
			<a
				class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto z-10 relative"
				href="/company#contact"
			>
				<!-- Schedule a Demo -->
				{m.produtos_MyMenthorIs()}
			</a>
		</button>
	</div>
</section>

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');

		margin-right: 10px; /* Adjust as needed */
	}
	.btn-demo::after {
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
