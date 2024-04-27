<script>
	import { checkmark_2_svg, linha_h_1_svg, linha_h_2_svg, linha_h_7_svg, linha_h_azul_5_svg } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9] py-20">
	<div class="w-[1178px] h-[598px] flex justify-center items-center mx-auto bg-white flex-col">
		<div class="flex">
			<h1 class="text-[#17193B] text-4xl font-bold mb-12">
				Platform characteristics <span class=""><img src={linha_h_1_svg} alt="" /></span>
			</h1>
		</div>
		<div class="pl-20 flex flex-row relative">
			<div class="flex flex-col w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Dedicated Environment</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">User Authentication (SCIM, SAML, SSO)</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Access Permissions/Controls</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Data Backup/Restore</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">
						Data Storage Location (USA - Washington and Dallas Data Centers)
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Storage Space Per User</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">
						Supportd Browsers: Google Chrome, Mozilla Firefox, Safari and Microsoft Edge
					</p>
				</div>
			</div>
			<div class="flex flex-col w-1/2 space-y-4">
				<div class="bg-white p-2 min-w-min ">
					<p class="Exo check text-[#17193B] text-xl">System Versions</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Change History</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Document Versions</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Portuguese and English</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Single Repository</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Data Import/Export</p>
				</div>
			</div>
		</div>
	</div>

	<div class="w-[1178px] h-[598px] flex justify-center items-center mx-auto bg-white flex-col mt-8">
		<div class="flex">
			<h1 class="text-[#17193B] text-4xl font-bold mb-12 text-center">
				Platform features<span class=""><img src={linha_h_azul_5_svg} alt="" /></span>
			</h1>
		</div>
		<div class="pl-20 flex flex-row relative">
			<div class="flex flex-col w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">
						Proprietary methodology based on best practices (MEG, CBOK, BIZBOKTM, etc.)
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">
						All functionalities, capabilities and Organizational Components
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Unlimited use of available templates</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Unlimited canvases/unlimited processes</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Reports and Dashboards</p>
				</div>
				
			</div>
			<div class="flex flex-col w-1/2">
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Unlimited component registration</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Knowledge Base</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Collaboration in Improvement Management</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">
						Deliberation of changes/modifications of components
					</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Publishing content</p>
				</div>
				<div class="bg-white p-2 min-w-min">
					<p class="Exo check text-[#17193B] text-xl">Printing/Importing/Exporting Records</p>
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
