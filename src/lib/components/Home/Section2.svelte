<script>
	import {
		arrow_right_svg,
		design_service_svg,
		linha_h_verde_3_svg,
		linked_services_svg,
		table_chart_view_svg,
		track_changes_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section
	class="flex flex-col items-center relative rounded-lg my-6 max-w-screen-2xl mx-auto max-md:p-2"
>
	<div class="p-6 rounded-lg text-center">
		<h1 class="Exo-Bold text-4xl relative mx-auto">{m.homepage_section2_work()}</h1>

		<h2 class="Exo-Bold text-4xl relative text-[#17193B]">
			{m.homepage_section2_smarter()}
			<span><img src={linha_h_verde_3_svg} class="z-10 max-sm:max-w-72 mx-auto" alt="linha" /></span
			>
		</h2>
	</div>
	<div class="w-full flex max-md:flex-col justify-end md:space-x-6 max-sm:mt-3 mt-4">
		<div
			class="md:max-w-[574px] md:max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg mt-12"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 lg:mr-20 py-10">
				<h3 class="Exo-Semibold text-2xl relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={track_changes_svg} alt="" /></span>

					{m.homepage_section2_holistic()}
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					{@html m.homepage_section2_getatrue()}
				</h4>
			</div>
		</div>
		<div
			class="md:max-w-[574px] md:max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg sm:mt-12 max-sm:mt-3 mt-4"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 lg:mr-20 py-10">
				<h3 class="Exo-Semibold text-2xl relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={design_service_svg} alt="" /></span>

					{m.homepage_section2_Organizational()}
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					{m.homepage_section2_Rethink()}
				</h4>
			</div>
		</div>
	</div>
	<div class="w-full flex max-md:flex-col md:space-x-6 max-sm:mt-3 mt-4">
		<div
			class="md:max-w-[574px] md:max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg sm:mt-6"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 py-10">
				<h3 class="Exo-Semibold text-2xl relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={table_chart_view_svg} alt="" /></span>
					{m.homepage_section2_Evolution()}
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					{m.homepage_section2_Transform()}
				</h4>
			</div>
		</div>
		<div
			class="md:max-w-[574px] md:max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg sm:mt-6 max-sm:mt-3 mt-4"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 lg:mr-20 py-10">
				<h3 class="Exo-Semibold text-2xl relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={linked_services_svg} alt="" /></span>
					{m.homepage_section2_Organizational_alignment()}
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					{m.homepage_section2_Ensure()}
				</h4>
			</div>
		</div>
	</div>
	<div class="mt-8 sm:mt-16 flex flex-wrap">
		<button>
			<a
				class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto z-10 relative"
				href="/company#contact"
			>
				{m.button_schedule_a_demo()}
			</a>
		</button>
	</div>
</section>

<style>
	.btn-demo::after {
		background-color: #8abb3f;
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
