<script>
	import {
		arrow_right_svg,
		design_service_svg,
		linha_h_3_svg,
		linked_services_svg,
		table_chart_view_svg,
		track_changes_svg
	} from '$lib';
</script>

<section class=" flex flex-col items-center relative rounded-lg my-6 max-w-screen-2xl mx-auto">
	<div class="p-6 rounded-lg text-center">
		<h1 class="Exo text-4xl relative mx-auto">Work smarter</h1>

		<h2 class="Exo text-4xl relative font-extrabold text-[#17193B]">
			and more integrated !
			<span><img src={linha_h_3_svg} class="z-10 absolute right-10" alt="linha" /></span>
		</h2>
	</div>
	<div class="w-full flex max-md:flex-col justify-end sm:space-x-6 mt-4">
		<div
			class="card1 max-w-[574px] max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg mt-12"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 lg:mr-20 py-10">
				<h3 class="Exo text-2xl font-bold relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={track_changes_svg} alt="" /></span>

					Holistic and Integrated Vision
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					Get a true representation of how your business works. Transform the fragmented and
					disconnected view into a knowledge base that translates reality and generates insights to
					support effective decisions.
				</h4>
			</div>
		</div>
		<div
			class="card1 max-w-[574px] max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg sm:mt-12 mt-4"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 lg:mr-20 py-10">
				<h3 class="Exo text-2xl font-bold relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={design_service_svg} alt="" /></span>

					Organizational Design
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					Rethink your current model and create an architectural vision of the business that adds
					more value to customers and stakeholders. Drive growth and competitiveness by adopting a
					unified approach to understand, improve and transform your operation.
				</h4>
			</div>
		</div>
	</div>
	<div class="w-full flex max-md:flex-col sm:space-x-6 mt-4">
		<div
			class="card1 max-w-[574px] max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg sm:mt-6"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 py-10">
				<h3 class="Exo text-2xl font-bold relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={table_chart_view_svg} alt="" /></span>

					Evolution and Sustainability
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					Transform your corporate architecture into a valuable asset to manage changes in your
					operation, anticipating and adapting to the impacts of market transformations.
				</h4>
			</div>
		</div>
		<div
			class="card1 max-w-[574px] max-h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg sm:mt-6 mt-4"
		>
			<div class="flex flex-col items-center rounded-lg p-20 md:p-12 lg:p-16 lg:mr-20 py-10">
				<h3 class="Exo text-2xl font-bold relative max-w-sm text-[#17193B]">
					<span class="absolute left-[-45px]"><img src={linked_services_svg} alt="" /></span>

					Organizational Alignment
				</h3>

				<h4 class=" mt-5 mb-2 Archivo text-base text-[#25285F]">
					Ensure the deployment of the strategy to the other layers of the organization, integrating
					processes, structure, technology, people, and other organizational components to improve
					performance and business results.
				</h4>
			</div>
		</div>
	</div>
	<div class="mt-8 sm:mt-16 flex flex-wrap">
		<button>
			<a
				class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto z-10 relative"
				href="#"
			>
				Schedule a Demo
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
