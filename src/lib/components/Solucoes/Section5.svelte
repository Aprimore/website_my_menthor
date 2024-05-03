<script>
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import {
		checkmark_2_svg,
		linha_h_1_svg,
		linha_h_2_svg,
		linha_h_7_svg,
		linha_h_azul_5_svg
	} from '$lib';
</script>

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9] py-20">
	<div class="lg:max-w-[1178px] lg:max-h-[598px] flex items-center mx-auto bg-white flex-col pb-10">
		<div class=" my-6">
			<h1 class="text-[#17193B] text-3xl max-md:text-center sm:text-4xl font-bold">
				<!-- Platform characteristics -->
				{m.solutions_PlatformCharacteristics()}
			</h1>
			<img src={linha_h_1_svg} class="mx-auto" alt="" />
		</div>

		<div class="max-sm:p-3 sm:pl-10 md:pl-20 sm:flex flex-row relative">
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Dedicated Environment -->
						{m.solutions_DedicatedEnvironment()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- User Authentication (SCIM, SAML, SSO) -->
						{m.solutions_UserAuthentication()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Access Permissions/Controls -->
						{m.solutions_AccessPermissionsControls()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Data Backup/Restore -->
						{m.solutions_DataBackupRestore()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Data Storage Location (USA - Washington and Dallas Data Centers) -->
						{m.solutions_DataStorageLocation()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Storage Space Per User -->
						{m.solutions_StorageSpacePerUser()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Supportd Browsers: Google Chrome, Mozilla Firefox, Safari and Microsoft Edge -->
						{m.solutions_SupportedBrowsers()}
					</p>
				</div>
			</div>
			<div class="flex flex-col sm:w-1/2 space-y-4">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- System Versions -->
						{m.solutions_SystemVersions()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Change History -->
						{m.solutions_ChangeHistory()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Document Versions -->
						{m.solutions_DocumentVersions()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Portuguese and English -->
						{m.solutions_PortugueseAndEnglish()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Single Repository -->
						{m.solutions_SingleRepository()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Data Import/Export -->
						{m.solutions_DataImportExport()}
					</p>
				</div>
			</div>
		</div>
	</div>

	<div
		class="lg:max-w-[1178px] lg:max-h-[598px] flex items-center mx-auto bg-white flex-col pb-10 mt-8"
	>
		<div class=" my-6">
			<h1 class="text-[#17193B] text-3xl sm:text-4xl font-bold text-center">
				<!-- Platform features -->
				{m.solutions_PlatformFeatures()}
			</h1>
			<img src={linha_h_azul_5_svg} class="mx-auto max-w-80" alt="" />
		</div>

		<div class="max-sm:p-3 sm:pl-10 md:pl-20 sm:flex flex-row relative">
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Proprietary methodology based on best practices (MEG, CBOK, BIZBOKTM, etc.) -->
						{m.solutions_ProprietaryMethodologyBasedOnBestPractices()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- All functionalities, capabilities and Organizational Components -->
						{m.solutions_AllFunctionalitiesCapabilities()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Unlimited use of available templates -->
						{m.solutions_UnlimitedUseOfAvailableTemplates()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Unlimited canvases/unlimited processes -->
						{m.solutions_UnlimitedCanvasesUnlimitedProcesses()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Reports and Dashboards -->
						{m.solutions_ReportsAndDashboards()}
					</p>
				</div>
			</div>
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Unlimited component registration -->
						{m.solutions_UnlimitedComponentRegistration()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Knowledge Base -->
						{m.solutions_KnowledgeBase()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Collaboration in Improvement Management -->
						{m.solutions_CollaborationInImprovementManagement()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Deliberation of changes/modifications of components -->
						{m.solutions_DeliberationOfChangesModificationsOfComponents()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Publishing content -->
						{m.solutions_PublishingContent()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						<!-- Printing/Importing/Exporting Records -->
						{m.solutions_PrintingImportingExportingRecords()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');

		margin-right: 10px; /* Adjust as needed */
	}
</style>
