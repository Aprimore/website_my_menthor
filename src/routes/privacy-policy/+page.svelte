<script lang="ts">
	import { page } from '$app/stores';
	import { piramid_home_en_svg, piramid_home_pt_br_svg } from '$lib';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import * as m from '$lib/paraglide/messages';
	// export let data;

	// console.log('DATA URKL', data.url);
	// Define a variable to hold the selected SVG based on the lang prop
	// let piramid_home_svg = lang === 'pt-br' ? piramid_home_pt_br_svg : piramid_home_en_svg;
</script>

<section class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5">
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg"
	>
		<div class="max-lg:p-5 lg:w-2/3 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			<h1
				class="xl:text-4xl sm:xl:text-4xl text-3xl relative Exo Exo-Bold text-[#17193B] blue-underline"
			>
				{@html m.PRIVACY_Privacy_Policy()}
			</h1>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_This_document_describes_how()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Description_of_Collected_Information()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_This_section_specifies_the()}
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_The_types_of_data()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Purpose_of_Collecting_and()}
			</h2>
			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Customer_Registration_Data_Used()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Account_Creation_To_access()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Login_Data_Login_information()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_User_Registration_Data_Used()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Strategic_Data_The_My()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Usage_and_Activity_Data()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Device_Information_This_may()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Cookies_and_Tracking_Technologies()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Communications_Records_of_communications()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Payment_Information_We_collect()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Location_Data_In_some()}
				</li>
			</ul>

			<p class=" text-[#25285F]">
				{@html m.PRIVACY_In_addition_to()}
			</p>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_communicate_with_you()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_keep_you()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_request_that_you()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_set_up()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_understand_how_users()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_provide_customer_support()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_detect_and()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_update_expand_and_analyze()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_analyze_trends_manage()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_To_monitor_and_improve()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Methods_of_Collecting_User()}
			</h2>

			<h3 class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_We_collect_information()}
			</h3>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_You_as_the_user()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_The_information_was_automatically()}
				</li>
			</ul>

			<h3 class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Information_You_Provide()}
			</h3>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Event_Records_and()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Testimonials_When_you()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Interactions_We_may()}
				</li>
			</ul>

			<h3 class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Information_We_Collect_Automatically()}
			</h3>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Browse_Device_and_server_info()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Cookies_and_Tracking()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Application_Log_and()}
				</li>
			</ul>

			<h3 class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Information_We_Collect_Automatically()}
			</h3>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Signups_Using_Federated()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Recommendations_If_someone()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Information_from_Our_Authorized_Partners()}
				</li>
			</ul>

			<h3 class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Information_from_Internal_Customer_Systems()}
			</h3>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Employee_Registration_Information()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Data_Protection()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_This_section_describes_aspects()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Who_We_Share_Your_Information_With()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Customer_information_legal_representatives()}
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Authorized_partners_have_an_NDA()}
			</p>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Technology_Partner_Our_low_code()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Employees_and_Independent_Contractors()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Third_Party_Service_Providers()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Collaborators_and_Other_Users()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Legal_Basis_for_Collecting()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Revoking_Consent()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Notification_of_Legitimate_Interests()}
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Your_Choice_in_the_Use()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Opting_Out_of_Non_Essential()}
			</h2>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Disabling_Cookies()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Optional_Information()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Your_Rights_as_a_Data()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Right_of_Access()}
			</h2>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Right_to_Rectification()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Right_to_Erasure()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Right_to_Restriction_of_Processing()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Right_to_Object()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Right_to_Complain()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.PRIVACY_Retention_of_Information()}
				</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Data_in_your_access()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Personal_Information_of_Minors()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_How_Secure_Is_Your_Information()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Data_Protection_Officer()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_Locations_and_International_Transfers()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_we_take_data_security_very_seriously()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_data_protection_officer_dpo()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_if_you_have_any_questions_or_concerns()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_locations_and_international_transfers()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_my_menthor_and_the_crm_use_a_unified_management_system()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_external_links_on_our_site()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_blogs_and_forums()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_social_media_widgets()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_disclosures_in_compliance_with_legal_obligations()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_enforcement_of_our_rights()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_business_transfers()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_compliance_with_this_privacy_policy()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_notification_of_changes()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_cookie_policy()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_what_is_a_cookie()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_what_types_of_cookies_do_we_use()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_we_classify_cookies_into_the_following_categories()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_strictly_necessary()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_functional()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_preference()}
			</h2>

			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.PRIVACY_analytics()}
			</p>
		</div>
	</div>
</section>
