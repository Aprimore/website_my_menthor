<script lang="ts">
	import { linha_h_verde_3_svg } from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section class="relative rounded-lg md:my-16 mt-4">
	<div class="max-w-screen-2xl mx-auto max-sm:p-2 space-y-2" id="modules">
		<div class="p-6 rounded-lg mt-2 text-center max-md:space-y-2">
			<h1 class="xl:text-4xl text-3xl sm:text-5xl relative Exo-Bold text-[#17193B] sm:text-nowrap">
				<!-- Platform Modules -->
				{@html m.solutions_PlatformModules()}
			</h1>
			<img
				src={linha_h_verde_3_svg}
				class="right-5 mx-auto max-sm:max-w-xs"
				alt="linha"
				loading="eager"
				fetchpriority="high"
			/>
		</div>

		<div class="max-md:max-w-[650px] mx-auto md:flex justify-end md:space-x-6 max-md:space-y-2">
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-12 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg relative">
					<h2
						class=" title-om Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Organizational Maturity -->
						{@html m.solutions_OrganizationalMaturity()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- My Menthor provides functionality for and helps identify the best approach and
						implementation strategy. -->
						{@html m.solutions_MyMenthorProvidesFunctionality()}
					</p>
				</div>
			</div>
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-12 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-od Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Organizational Design -->
						{@html m.solutions_OrganizationalDesign()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Facilitates the rethinking of the main aspects of business identity, future vision and
						strategy, to guide the other organizational layers. -->
						{@html m.solutions_FacilitatesRethinkingOfMainAspects()}
					</p>
				</div>
			</div>
		</div>

		<div class=" max-md:max-w-[650px] mx-auto md:flex justify-start md:space-x-6 max-md:space-y-2">
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-3 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-sd Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Strategy deployment -->
						{@html m.solutions_StrategyDeployment()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Guides the deployment of the strategy for the processes of the value chain, taking into
						account the synergy with the functional vision. -->
						{@html m.solutions_GuidesTheDeployment()}
					</p>
				</div>
			</div>
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-3 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-ms Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Measurement System -->
						{@html m.solutions_MeasurementSystem()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Facilitates the mapping of strategy indicators, processes and projects, guiding them in an end-to-end vision. -->
						{@html m.solutions_FacilitatesTheMapping()}
					</p>
				</div>
			</div>
		</div>

		<div class=" max-md:max-w-[650px] mx-auto md:flex justify-end md:space-x-6 max-md:space-y-2">
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-3 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-pm Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Process Management -->
						{@html m.solutions_ProcessManagement_1()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Supports the complete cycle of implementation, support and governance of Business
						Process Management, from maturity assessment, value chain design design, process
						prioritization, transformation or improvement and architectural governance. -->
						{@html m.solutions_SupportsTheCompleteCycle()}
					</p>
				</div>
			</div>
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-3 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-ac Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Architecture components -->
						{@html m.solutions_ArchitectureComponents()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Facilitates synchronization between components (Organizational Structure, Risks and Controls, People, Technology and other corporate capabilities). -->
						{@html m.solutions_FacilitatesSynchronizationBetweenComponents()}
					</p>
				</div>
			</div>
		</div>

		<div class=" max-md:max-w-[650px] mx-auto md:flex justify-start md:space-x-6 max-md:space-y-2">
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-3 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-pm2 Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Process Management -->
						{@html m.solutions_ProcessManagement_2()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Facilitates AS IS and TO BE mapping, analysis of improvements and routine management. -->
						{@html m.solutions_FacilitatesASISAndTOBEMapping()}
					</p>
				</div>
			</div>
			<div
				class="card1 sm:h-[250px] md:h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg md:mt-3 flex items-center"
			>
				<div class="px-5 lg:px-10 xl:px-20 flex flex-col mx-auto p-6 rounded-lg">
					<h2
						class="title-cm Exo-Semibold text-2xl relative max-w-sm text-[#17193B] sm:text-nowrap"
					>
						<!-- Change Management -->
						{@html m.solutions_ChangeManagement()}
					</h2>

					<p class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
						<!-- Facilitating changes in organizational initiatives, projects and day-to-day changes. -->
						{@html m.solutions_FacilitatingChangesIn()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.title-om::before,
	.title-cm::before,
	.title-pm2::before,
	.title-pm::before,
	.title-ac::before,
	.title-ms::before,
	.title-sd::before,
	.title-od::before {
		margin-right: 10px;
		display: inline-block;
		vertical-align: top;
		margin-bottom: -5px;
	}

	.title-om::before {
		content: url('$lib/assets/svg/inventory.svg');
	}
	.title-cm::before {
		content: url('$lib/assets/svg/instant_mix.svg');
	}

	.title-pm2::before {
		content: url('$lib/assets/svg/network_node.svg');
	}

	.title-pm::before {
		content: url('$lib/assets/svg/chart.svg');
	}

	.title-ac::before {
		content: url('$lib/assets/svg/card_travel.svg');
	}
	.title-ms::before {
		content: url('$lib/assets/svg/explore.svg');
	}
	.title-sd::before {
		content: url('$lib/assets/svg/conversion_path.svg');
	}
	.title-od::before {
		content: url('$lib/assets/svg/design_service.svg');
	}
</style>
