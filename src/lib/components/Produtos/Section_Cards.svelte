<script>
	import {
		arrow_right_svg,
		card_travel_svg,
		chart_svg,
		conversion_path_svg,
		design_services_svg,
		explore_svg,
		instant_mix_svg,
		inventory_svg,
		linha_h_3_svg,
		linked_services_svg,
		network_node_svg,
		notes_svg,
		table_chart_view_svg,
		track_changes_svg
	} from '$lib';
</script>

<section class=" relative rounded-lg mt-20">
	<div class="w-full flex justify-center space-x-6">
		<div
			class="card1 w-[574px] h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg mt-12 flex items-center"
		>
			<div class="flex flex-col mx-auto p-6 rounded-lg relative">
				<h2 class=" title-om Exo text-2xl font-bold relative max-w-sm text-[#17193B]"></h2>

				<h3 class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
					It contains its <strong>own embedded methodology</strong> with an approach to corporate development,
					which helps in diagnosis, defining the implementation strategy, and guiding the step-by-step
					the evolution of organizational maturity.
				</h3>
			</div>
		</div>
		<div
			class="card1 w-[574px] h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg mt-12 flex items-center"
		>
			<div class="flex flex-col mx-auto p-6 rounded-lg">
				<h2 class="title-od Exo text-2xl font-bold relative max-w-sm text-[#17193B]"></h2>

				<h3 class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
					<strong>It supports different levels of maturity</strong> and
					<strong>deployment strategies</strong> through its modular and flexible approach.
				</h3>
			</div>
		</div>
	</div>
	<div class="w-full flex space-x-6 pl-56">
		<div
			class="card1 w-[574px] h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg mt-6 flex items-center"
		>
			<div class="flex flex-col mx-auto p-6 rounded-lg">
				<h2 class="title-sd Exo text-2xl font-bold relative max-w-sm text-[#17193B]"></h2>

				<h3 class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
					Emphasizes BPM as a Management Model, <strong
						>facilitating the structuring, instrumentation and implementation of the topic</strong
					>, highlighting the results of the various process mapping and improvement initiatives.
				</h3>
			</div>
		</div>
		<div
			class="card1 w-[574px] h-[331px] bg-[#F1F1F9] bg-opacity-50 border border-gray-300 rounded-lg mt-6 flex items-center"
		>
			<div class="flex flex-col mx-auto p-6 rounded-lg">
				<h2 class="title-ms Exo text-2xl font-bold relative max-w-sm text-[#17193B]"></h2>

				<h3 class=" mt-5 mb-2 Archivo text-base max-w-[420px] text-[#25285F]">
					<strong>Decomplicates and decentralizes the topic</strong>, so that the business areas
					take responsibility for their processes and results, with the support of governance
					mechanisms and integrated into the organizational components and capabilities
				</h3>
			</div>
		</div>
	</div>
</section>

<style>
	.title-om::before,
	.title-ms::before,
	.title-sd::before,
	.title-od::before {
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
		margin-bottom: -5px;
	}

	.title-om::before {
		content: url('$lib/assets/svg/notes.svg');
	}

	.title-ms::before {
		content: url('$lib/assets/svg/ads_click.svg');
	}
	.title-sd::before {
		content: url('$lib/assets/svg/map.svg');
	}
	.title-od::before {
		content: url('$lib/assets/svg/cog.svg');
	}
</style>
