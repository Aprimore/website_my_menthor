<script lang="ts">
	import {
		analytics_illustration_svg,
		arrow_right_svg,
		check_list_illustration_svg,
		line_graph_illustration_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
</script>

<!-- <section class="w-full items-center relative rounded-lg bg-[#F1F1F9]">
	<div class="h-[634px] max-w-screen-2xl mx-auto flex items-center flex-row my-16">
		<div class="w-1/2 relative p-5 lg:p-10 space-y-10"> -->

<section class="w-full bg-[#F1F1F9] py-20">
	<h1 class="text-[#17193B] xl:text-4xl text-3xl mb-12 Exo-Bold text-center">
		{@html m.solutions_PlatformCharacteristics()}
		<!-- Platform characteristics -->
	</h1>
	<div class="flex justify-center items-center mx-auto bg-white flex-col rounded-md">
		<div class=" max-md:w-full">
			<div class="md:flex flex-row relative">
				<div class="md:w-1/2 mx-auto p-5 lg:p-10 max-w-xl">
					<img
						src={line_graph_illustration_svg}
						class="p-5 lg:p-10 w-full max-md:max-w-md max-md:mx-auto"
						alt="Svg Icon"
						loading="lazy"
						decoding="sync"
						fetchpriority="low"
					/>
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class=" max-sm:p-3 max-md:p-5 lg:p-10">
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Profits, revenue and margin -->
								{@html m.produtos_ProfitsRevenueAndMargin()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Perenniality  -->
								{@html m.produtos_Sustainability_1()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Sustainability -->
								{@html m.produtos_Sustainability_2()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								{@html m.produtos_Continuity()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Competitive advantage -->
								{@html m.produtos_CompetitiveAdvantage()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Understanding the operation -->
								{@html m.produtos_UnderstandingTheOperation()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class=" max-md:w-full xl:ml-28">
			<div class="md:flex flex-row relative">
				<div class="md:w-1/2 mx-auto p-5 lg:p-10 md:order-2 w-full max-w-xl">
					<img
						src={analytics_illustration_svg}
						class="p-5 lg:p-10 w-full max-md:max-w-md max-md:mx-auto xl:relative right-16"
						alt="Svg Icon"
						loading="lazy"
						decoding="sync"
						fetchpriority="low"
					/>
				</div>
				<div class="md:w-1/2 relative my-auto">
					<div class=" max-sm:p-3 p-5 flex-col justify">
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Maturity and performance -->
								{@html m.produtos_MaturityAndPerformance()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Integration of initiatives -->
								{@html m.produtos_IntegrationOfInitiatives()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Reduces functional silos -->
								{@html m.produtos_ReducesFunctionalSilos()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Visibility of the impact of changes -->
								{@html m.produtos_VisibilityOfTheImpactOfChanges()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Knowledge retention -->
								{@html m.produtos_KnowledgeRetention()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Quality in products and services -->
								{@html m.produtos_QualityInProductsAndServices()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Generating value for stakeholders -->
								{@html m.produtos_GeneratingValueForStakeholders()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="xl:text-nowrap Exo-Semibold check text-[#17193B] text-xl">
								<!-- Customer experience -->
								{@html m.produtos_CustomerExperience()}
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
						alt="Svg Icon"
						loading="lazy"
						decoding="sync"
						fetchpriority="low"
					/>
				</div>
				<div class="mdmd:w-1/2 relative my-auto">
					<div class=" max-sm:p-3 max-md:p-5 lg:p-10">
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Standardization -->
								{@html m.produtos_Standardization()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Efficiency and productivity x effectiveness -->
								{@html m.produtos_EfficiencyAndProductivityXEffectiveness()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Efficiency and productivity x effectiveness -->
								{@html m.produtos_EmpowermentAccountability()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Reduction of costs, deadlines and rework -->
								{@html m.produtos_ReductionOfCostsDeadlinesAndRework()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Process innovation -->
								{@html m.produtos_ProcessInnovation()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Compliance, conformity and risks -->
								{@html m.produtos_ComplianceConformityAndRisks()}
							</p>
						</div>
						<div class="bg-white p-2">
							<p class="Exo-Semibold check text-[#17193B] text-xl">
								<!-- Clarity of roles and responsibilities -->
								{@html m.produtos_ClarityOfRolesAndResponsibilities()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-16 gap-4 mx-auto max-w-max">
		<button class="flex flex-wrap Exo">
			<a
				class="btn-agendar w-full bg-[#8abb3f] text-[#17193B] py-4 px-10 rounded-lg relative transition-transform transform hover:-translate-y-1"
				href="/company#contact"
			>
				{@html m.button_schedule_a_demo()}
			</a>
		</button>
	</div>
</section>

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');
		vertical-align: sub;
		margin-right: 10px; /* Adjust as needed */
	}
</style>
