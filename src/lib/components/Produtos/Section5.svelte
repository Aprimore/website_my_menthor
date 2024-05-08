<script lang="ts">
	import {
		analytics_illustration_svg,
		arrow_right_svg,
		check_list_illustration_svg,
		line_graph_illustration_svg
	} from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- <section class="w-full items-center relative rounded-lg bg-[#F1F1F9]">
	<div class="h-[634px] max-w-screen-2xl mx-auto flex items-center flex-row my-16">
		<div class="w-1/2 relative p-5 lg:p-10 space-y-10"> -->

<section class="w-full bg-[#F1F1F9] py-20">
	<h1 class="text-[#17193B] text-4xl mb-12 Exo-Bold text-center">
		{m.solutions_PlatformCharacteristics()}
		<!-- Platform characteristics -->
	</h1>
	<div class="flex justify-center items-center mx-auto bg-white flex-col rounded-md">
		<div class=" max-md:w-full">
			<div class="md:flex flex-row relative">
				<div class="md:w-1/2 mx-auto p-5 lg:p-10">
					<img
						src={line_graph_illustration_svg}
						class="p-5 lg:p-10 w-full max-md:max-w-md max-md:mx-auto"
						alt=""
					/>
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class=" max-sm:p-3 max-md:p-5 lg:p-10">
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Profits, revenue and margin -->
								{m.homepage_section4_Profits()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Perenniality  -->
								{m.produtos_Sustainability_1()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Sustainability -->
								{m.produtos_Sustainability_2()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								{m.produtos_Continuity()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Competitive advantage -->
								{m.produtos_CompetitiveAdvantage()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
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
				<div class="md:w-1/2 mx-auto p-5 lg:p-10 md:order-2 w-full">
					<img
						src={analytics_illustration_svg}
						class="p-5 lg:p-10 w-full max-md:max-w-md max-md:mx-auto"
						alt=""
					/>
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class=" max-sm:p-3 p-5 flex-col justify">
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Maturity and performance -->
								{m.produtos_MaturityAndPerformance()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Integration of initiatives -->
								{m.produtos_IntegrationOfInitiatives()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Reduces functional silos -->
								{m.produtos_ReducesFunctionalSilos()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Visibility of the impact of changes -->
								{m.produtos_VisibilityOfTheImpactOfChanges()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Knowledge retention -->
								{m.produtos_KnowledgeRetention()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Quality in products and services -->
								{m.produtos_QualityInProductsAndServices()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Generating value for stakeholders -->
								{m.produtos_GeneratingValueForStakeholders()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
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
				<div class="mdmd:w-1/2 mx-auto p-5 lg:p-10">
					<img
						src={check_list_illustration_svg}
						class="p-5 lg:p-10 w-full max-w-md max-md:mx-auto"
						alt=""
					/>
				</div>
				<div class="mdmd:w-1/2 relative my-auto">
					<div class=" max-sm:p-3 max-md:p-5 lg:p-10">
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Standardization -->
								{m.produtos_Standardization()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Efficiency and productivity x effectiveness -->
								{m.produtos_EfficiencyAndProductivityXEffectiveness()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Reduction of costs, deadlines and rework -->
								{m.produtos_ReductionOfCostsDeadlinesAndRework()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Process innovation -->
								{m.produtos_ProcessInnovation()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Compliance, conformity and risks -->
								{m.produtos_ComplianceConformityAndRisks()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
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
		<button class="Exo">
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
