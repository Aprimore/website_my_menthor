<script>
	import { checkmark_svg, linha_h_2_svg, the_platform_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20 pb-10">
	<div class="flex max-w-screen-2xl mx-auto">
		<div class=" column1 w-2/3">
			<div class="ml-14">
				<h1 class="ml-10 max-w-lg text-2xl sm:text-4xl relative Exo font-extrabold text-[#17193B]">
					Organizing your business can be simpler than you think
				</h1>
				<span class="ml-2 absolute"><img src={linha_h_2_svg} alt="" /></span>
			</div>
			<div class="flex flex-row ml-6 absolute">
				<div class="mt-14 pl-10 p-10 text-lg relative space-y-5 max-w-screen-md">
					<div class="bg-[#F1F1F9] border border-[#D4D4ED] inline-block p-4 min-w-min">
						<p class="Exo check">Profits, revenue and margin</p>
					</div>
					<div class="bg-[#F1F1F9] border border-[#D4D4ED] inline-block p-4 min-w-min">
						<p class="Exo check">Quality of products and services</p>
					</div>
					<div class="bg-[#F1F1F9] border border-[#D4D4ED] inline-block p-4 min-w-min">
						<p class="Exo check">Value to customers and stakeholders</p>
					</div>
					<div class="bg-[#F1F1F9] border border-[#D4D4ED] inline-block p-4 min-w-min">
						<p class="Exo check">Process innovation</p>
					</div>
					<div class="bg-[#F1F1F9] border border-[#D4D4ED] inline-block p-4 min-w-min">
						<p class="Exo check">Maturity and performance</p>
					</div>
					<div class="bg-[#F1F1F9] border border-[#D4D4ED] inline-block p-4 min-w-min">
						<p class="Exo check">Sustainability</p>
					</div>
				</div>

				<div class="mt-28 pl-3 text-lg relative space-y-5"></div>
			</div>
		</div>

		<div class="column2 w-[45%]">
			<div class="col3">
				<p class="Archivo text-lg">
					My Menthor acts as a <strong> Digital Mentor </strong> with an
					<strong> approach centered </strong> on being and not on disruptive technologies.
				</p>
				<p class="Archivo text-lg">
					It acts as an <strong> information </strong> hub, <strong> organizing knowledge </strong> in
					a single repository.
				</p>
			</div>
			<div class="col4 mt-5">
				<!-- <div class="div1 w-1/2 flex justify-end pr-20 "> -->
				<img src={the_platform_png} alt="lottie animation" />
				<!-- </div> -->
			</div>
		</div>
	</div>
</section>

<style>
	/* p::before {
		content: url('path_to_your_checkmark_svg_image');
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	} */

	.check::before {
		content: url('$lib/assets/svg/checkmark.svg');

		margin-right: 10px; /* Adjust as needed */
	}
</style>
