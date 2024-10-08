<script lang="ts">
	import { linha_h_azul_5_svg } from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9] py-20">
	<div class="  lg:max-w-[1178px] flex items-center mx-auto bg-white flex-col pb-5">
		<div class="  my-10">
			<h1 class="text-[#17193B] max-md:text-center xl:text-4xl text-3xl Exo-Bold">
				<!-- Platform characteristics -->
				{@html m.solutions_PlatformCharacteristics()}
			</h1>
			<img
				src={linha_h_azul_5_svg}
				class="mx-auto"
				alt="linha"
				loading="lazy"
				fetchpriority="auto"
			/>
		</div>

		<div class="  max-sm:p-3 sm:flex flex-row relative w-full lg:px-20 sm:ml-32">
			<div class="flex flex-col sm:w-1/2 pl-3">
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Dedicated Environment -->
						{@html m.solutions_DedicatedEnvironment()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- User Authentication (SCIM, SAML, SSO) -->
						{@html m.solutions_UserAuthentication()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Access Permissions/Controls -->
						{@html m.solutions_AccessPermissionsControls()}
					</p>
				</div>
				<div class=" bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Data Backup/Restore -->
						{@html m.solutions_DataBackupRestore()}
					</p>
				</div>

				<!-- <div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						{@html m.solutions_StorageSpacePerUser()}
					</p>
				</div> -->
				<!-- <div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						{@html m.solutions_SupportedBrowsers()}
					</p>
				</div> -->
			</div>
			<div class="  flex flex-col sm:w-1/2 pl-3">
				<!-- <div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						{@html m.solutions_SystemVersions()}
					</p>
				</div> -->
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Change History -->
						{@html m.solutions_ChangeHistory()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Document Versions -->
						{@html m.solutions_DocumentVersions()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Portuguese and English -->
						{@html m.solutions_PortugueseAndEnglish()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Data Storage Location (USA - Washington and Dallas Data Centers) -->
						{@html m.solutions_DataStorageLocation()}
					</p>
				</div>
				<!-- <div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						{@html m.solutions_SingleRepository()}
					</p>
				</div> -->
				<!-- <div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						{@html m.solutions_DataImportExport()}
					</p>
				</div> -->
			</div>
		</div>
	</div>

	<div class="lg:max-w-[1178px] flex items-center mx-auto bg-white flex-col pb-5">
		<div class="my-10">
			<h1 class="text-[#17193B] xl:text-4xl text-3xl text-center Exo-Bold">
				<!-- Platform features -->
				{@html m.solutions_PlatformFeatures()}
			</h1>
			<img
				src={linha_h_azul_5_svg}
				class="mx-auto max-w-80"
				alt="linha"
				loading="lazy"
				fetchpriority="auto"
			/>
		</div>

		<div class="  max-sm:p-3 sm:flex flex-row relative w-full lg:px-20 sm:ml-32">
			<div class="  flex flex-col sm:w-1/2 pl-3">
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Proprietary methodology based on best practices (MEG, CBOK, BIZBOKTM, etc.) -->
						{@html m.solutions_ProprietaryMethodologyBasedOnBestPractices()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- All functionalities, capabilities and Organizational Components -->
						{@html m.solutions_AllFunctionalitiesCapabilities()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Unlimited use of available templates -->
						{@html m.solutions_UnlimitedUseOfAvailableTemplates()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Unlimited canvases/unlimited processes -->
						{@html m.solutions_UnlimitedCanvasesUnlimitedProcesses()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Reports and Dashboards -->
						{@html m.solutions_ReportsAndDashboards()}
					</p>
				</div>
			</div>
			<div class="  flex flex-col sm:w-1/2 pl-3">
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Unlimited component registration -->
						{@html m.solutions_UnlimitedComponentRegistration()}
					</p>
				</div>
				<!-- <div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						{@html m.solutions_KnowledgeBase()}
					</p>
				</div> -->
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Collaboration in Improvement Management -->
						{@html m.solutions_CollaborationInImprovementManagement()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Deliberation of changes/modifications of components -->
						{@html m.solutions_DeliberationOfChangesModificationsOfComponents()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Publishing content -->
						{@html m.solutions_PublishingContent()}
					</p>
				</div>
				<div class="  bg-white p-2 min-w-min">
					<p class="Exo-Regular check text-[#17193B] text-lg">
						<!-- Printing/Importing/Exporting Records -->
						{@html m.solutions_PrintingImportingExportingRecords()}
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
