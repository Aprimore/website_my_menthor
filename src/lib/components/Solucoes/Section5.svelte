<script lang="ts">
	import { checkmark_2_svg, linha_h_azul_5_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9] py-20">
	<div class="lg:max-w-[1178px] lg:max-h-[598px] flex items-center mx-auto bg-white flex-col pb-10">
		<div class=" my-6">
			<h1 class="text-[#17193B] max-md:text-center xl:text-4xl text-3xl Exo-Bold">
				<!-- Platform characteristics -->
				{m.solutions_PlatformCharacteristics()}
			</h1>
			<img
				src={linha_h_azul_5_svg}
				class="mx-auto"
				alt="linha"
				loading="lazy"
				decoding="sync"
				fetchpriority="low"
			/>
		</div>

		<div class="max-sm:p-3 sm:pl-10 md:pl-20 sm:flex flex-row relative">
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Dedicated Environment -->
						{m.solutions_DedicatedEnvironment()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- User Authentication (SCIM, SAML, SSO) -->
						{m.solutions_UserAuthentication()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Access Permissions/Controls -->
						{m.solutions_AccessPermissionsControls()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Data Backup/Restore -->
						{m.solutions_DataBackupRestore()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Data Storage Location (USA - Washington and Dallas Data Centers) -->
						{m.solutions_DataStorageLocation()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Storage Space Per User -->
						{m.solutions_StorageSpacePerUser()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Supportd Browsers: Google Chrome, Mozilla Firefox, Safari and Microsoft Edge -->
						{m.solutions_SupportedBrowsers()}
					</p>
				</div>
			</div>
			<div class="flex flex-col sm:w-1/2 space-y-4">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- System Versions -->
						{m.solutions_SystemVersions()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Change History -->
						{m.solutions_ChangeHistory()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Document Versions -->
						{m.solutions_DocumentVersions()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Portuguese and English -->
						{m.solutions_PortugueseAndEnglish()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Single Repository -->
						{m.solutions_SingleRepository()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
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
			<h1 class="text-[#17193B] xl:text-4xl text-3xl text-center Exo-Bold">
				<!-- Platform features -->
				{m.solutions_PlatformFeatures()}
			</h1>
			<img
				src={linha_h_azul_5_svg}
				class="mx-auto max-w-80"
				alt="linha"
				loading="lazy"
				decoding="sync"
				fetchpriority="low"
			/>
		</div>

		<div class="max-sm:p-3 sm:pl-10 md:pl-20 sm:flex flex-row relative">
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Proprietary methodology based on best practices (MEG, CBOK, BIZBOKTM, etc.) -->
						{m.solutions_ProprietaryMethodologyBasedOnBestPractices()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- All functionalities, capabilities and Organizational Components -->
						{m.solutions_AllFunctionalitiesCapabilities()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Unlimited use of available templates -->
						{m.solutions_UnlimitedUseOfAvailableTemplates()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Unlimited canvases/unlimited processes -->
						{m.solutions_UnlimitedCanvasesUnlimitedProcesses()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Reports and Dashboards -->
						{m.solutions_ReportsAndDashboards()}
					</p>
				</div>
			</div>
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Unlimited component registration -->
						{m.solutions_UnlimitedComponentRegistration()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Knowledge Base -->
						{m.solutions_KnowledgeBase()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Collaboration in Improvement Management -->
						{m.solutions_CollaborationInImprovementManagement()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Deliberation of changes/modifications of components -->
						{m.solutions_DeliberationOfChangesModificationsOfComponents()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
						<!-- Publishing content -->
						{m.solutions_PublishingContent()}
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-xl">
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
		display: inline-block;
		vertical-align: middle;
		margin-bottom: -5px;
		margin-right: 10px; /* Adjust as needed */
	}
</style>
