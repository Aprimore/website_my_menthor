<script>
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
		<div class=" my-6 ">
			<h1 class="text-[#17193B] text-3xl max-md:text-center sm:text-4xl font-bold">
				Platform characteristics
			</h1>
			<img src={linha_h_1_svg} class="mx-auto" alt="" />
		</div>

		<div class="max-sm:p-3 sm:pl-10 md:pl-20 sm:flex flex-row relative ">
			<div class="flex flex-col sm:w-1/2 ">
				<div class="bg-white p-2 min-w-min ">
					<p class="Exo check text-[#17193B] text-xl text-no">Dedicated Environment</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						User Authentication (SCIM, SAML, SSO)
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Access Permissions/Controls</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Data Backup/Restore</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Data Storage Location (USA - Washington and Dallas Data Centers)
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Storage Space Per User</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Supportd Browsers: Google Chrome, Mozilla Firefox, Safari and Microsoft Edge
					</p>
				</div>
			</div>
			<div class="flex flex-col sm:w-1/2 space-y-4">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">System Versions</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Change History</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Document Versions</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Portuguese and English</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Single Repository</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Data Import/Export</p>
				</div>
			</div>
		</div>
	</div>

	<div
		class="lg:max-w-[1178px] lg:max-h-[598px] flex items-center mx-auto bg-white flex-col pb-10 mt-8"
	>
		<div class=" my-6">
			<h1 class="text-[#17193B] text-3xl sm:text-4xl font-bold text-center">Platform features</h1>
			<img src={linha_h_azul_5_svg} class="mx-auto max-w-80" alt="" />
		</div>

		<div class="max-sm:p-3 sm:pl-10 md:pl-20 sm:flex flex-row relative">
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Proprietary methodology based on best practices (MEG, CBOK, BIZBOKTM, etc.)
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						All functionalities, capabilities and Organizational Components
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Unlimited use of available templates
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Unlimited canvases/unlimited processes
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Reports and Dashboards</p>
				</div>
			</div>
			<div class="flex flex-col sm:w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Unlimited component registration</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Knowledge Base</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Collaboration in Improvement Management
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Deliberation of changes/modifications of components
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">Publishing content</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl text-no">
						Printing/Importing/Exporting Records
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
