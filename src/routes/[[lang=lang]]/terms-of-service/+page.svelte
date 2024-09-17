<script lang="ts">
	import { page } from '$app/stores';
	import * as m from '$paraglide/messages';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-BR/');

	const ogLanguage = isPortuguese ? 'pt-BR' : 'en';
	const pageTitle = isPortuguese
		? 'TERMO DE USO/ TERMO DE SERVIÇOS'
		: 'TERMS OF USE / TERMS OF SERVICE';
	const metadescription = isPortuguese
		? 'Este documento descreve os termos e condições de uso da plataforma My Menthor (mymenthor.com). Ao acessar ou utilizar nossos serviços, você concorda com estes Termos de Uso.'
		: 'This document describes the terms and conditions of use for the My Menthor (mymenthor.com) platform. By accessing or using our services, you agree to these Terms of Use.';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
</svelte:head>

<section
	in:fade={{ delay: 0, duration: 150, easing: cubicInOut }}
	class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo"
>
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg"
	>
		<div class="max-lg:p-5 lg:w-2/3 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			<h1
				class="xl:text-4xl sm:xl:text-4xl text-3xl relative Exo-Bold text-[#17193B] blue-underline"
			>
				{@html m.TERMOS_title()}
			</h1>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_this_document_describes_the_terms()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_defined_terms()}
			</h2>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_software_as_a_service()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_software_product_software_applications()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_service_provider_company_that()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_client_the_entity_subscribing()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_authorized_partners_companies_authorized()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_access_access_to_the()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_authorized_user_any_individual()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_client_data_all_data()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_documentation_the_embedded_framework()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_product_updates_means_new()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_third_party_technology_means_any()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_scope_of_services()}
			</h2>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_software_licensing_involves_user()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_services_encompasses_implementation_consulting()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_license_and_service_packages()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_technical_support_and_storage()}
				</li>
			</ul>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_the_license_and_service()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_platform_usage()}
			</h2>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_this_chapter_specifies_the()}
			</p>

			<ul class="list-disc">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_license_grant_for_access()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_password_each_authorized_user()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_client_duties_and()}
					<ul class="list-disc-2 ml-7">
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_rent_lend()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_attempt_to()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_access_the()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_use_the()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_introduce_or()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_share_access()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_do_not_disclose_material()}
						</li>
					</ul>
				</li>
			</ul>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_the_client_is_responsible()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_service_standards_saas()}
			</h2>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_this_chapter_describes_the()}
			</p>

			<ul class="list-disc Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_technical_support()}
					<ul class="list-disc-2 ml-7">
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Service_Availability()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_maintenance_scheduled_maintenance_will()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_support_technical_support_is()}
						</li>
					</ul>
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_service_levels_sla()}
				</li>
			</ul>

			<table class="border-collapse w-full Exo text-[#25285F]">
				<thead>
					<tr>
						<th class=" border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS_category()}
						</th>
						<th class="border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS_resolution_time()}
						</th>
						<th class="border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS_resolution_time_2()}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_incidents()}</td>
						<td class="border border-black px-4 py-2"
							>{@html m.TERMOS_response_time_incidents_reported()}</td
						>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_according_to_sevetiry()}</td>
					</tr>
					<tr>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_improvements()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_1h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_NA()}</td>
					</tr>
					<tr>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_specialized_services()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_resolution_1bd()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_according_to_scope()}</td>
					</tr>
				</tbody>
			</table>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_Response_Time_Incidents()}
			</p>

			<ul class="list-disc">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Resolution_Time()}
					<ul class="list-disc-2 ml-7">
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Level_1_First_level_support()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Level_2_Product_related_incidents()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Level_3_Infrastructure_related_incidents()}
						</li>
					</ul>
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Specialized_Services_For_mentoring()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Service_Level_Failure()}
					<ul class="list-disc-2 ml-7">
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Service_Credits_In_case()}
						</li>
					</ul>
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Incident_Severity_Levels()}
					<ul class="list-disc-2 ml-7">
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Level_1_Critical_Functionality()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Level_2_Important_Functionality()}
						</li>
						<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
							{@html m.TERMOS_Level_3_Problem_or()}
						</li>
					</ul>
				</li>
			</ul>

			<table class="border-collapse w-full Exo text-[#25285F]">
				<thead>
					<tr>
						<th class=" border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS_Severity()}
						</th>
						<th class="border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS_Response_TIme()}
						</th>
						<th class="border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS__Resolution_time()}
						</th>
						<th class="border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS__Maximum_Time()}
						</th>
						<th class="border border-black px-4 py-2 bg-[#D9D9D9]">
							{@html m.TERMOS_Hosting_Fee_Credit()}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border border-black px-4 py-2"
							>{@html m.TERMOS_Level_1_Requires_Immediate()}</td
						>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_30_min()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS__4h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS__24h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_10()}</td>
					</tr>
					<tr>
						<td class="border border-black px-4 py-2"
							>{@html m.TERMOS_Level_2_Requires_Priority()}</td
						>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_1h_2()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS__8h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS__48h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_5()}</td>
					</tr>
					<tr>
						<td class="border border-black px-4 py-2"
							>{@html m.TERMOS_Level_3_Requires_Attention()}</td
						>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_4h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS__24h()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS__7_days()}</td>
						<td class="border border-black px-4 py-2">{@html m.TERMOS_1()}</td>
					</tr>
				</tbody>
			</table>

			<ul class="list-disc Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Root_Cause_Analysis()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Service_Level_Audit()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Data_Backup()}
				</li>

				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Data_Restoration()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Disaster_Recovery()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Disaster_Recovery_Plan()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Force_Majeure()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_Intellectual_Property()}
			</h2>

			<ul class="list-disc Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Intellectual_Property_Rights()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_CLIENT_Content()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Use_of_Suggestions()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Contact_with_Authorized()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_Information_Security_and()}
			</h2>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_This_chapter_clarifies_information()}
			</p>

			<ul class="list-disc Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Security_The_SERVICE()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Hosting_The_SERVICE()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Indemnification_The_parties()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Role_Based_Security()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Data_Ownership_All()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Data_Quality_The_CLIENT()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Data_Loss_In()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_Confidentiality()}
			</h2>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_This_section_establishes_the_commitment()}
			</p>

			<ul class="list-decimal Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Confidential_Information_All_information()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Legal_Commitment_Both_parties_commit()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Non_Disclosure_Agreement_NDA_The()}
				</li>

				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Controlled_Disclosure_Confidential_information_may()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Post_Contract_Protection_After_the()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Use_of_Brand_and()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Force_Majeure()}
				</li>
			</ul>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_SaaS_Termination_and_Cancellation()}
			</h2>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_Contract_Duration_Renewal_or()}
			</p>

			<ul class="list-decimal Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Duration_The_contract_comes()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Renewal_The_contract_can()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Termination_for_Convenience_Either()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Termination_for_Cause_Breach()}
				</li>
			</ul>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.TERMOS_Effects_of_Contract_Termination()}
			</p>

			<ul class="list-decimal Exo">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_The_contract_may_be()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_The_SERVICE_PROVIDER_will()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Data_Return_and_Transfer()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.TERMOS_Any_amounts_already_paid()}
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.list-disc-2 {
		list-style-type: circle;
	}
</style>
