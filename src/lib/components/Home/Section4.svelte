<script>
	import { checkmark_svg, linha_h_2_svg, the_platform_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20">
	<div class="flex max-w-screen-xl border border-black mx-auto">
		<div class="column1 w-1/2 border">
			<div class="">
				<h1 class="max-w-lg text-2xl sm:text-4xl relative Exo font-extrabold text-[#17193B]">
					Organizing your business can be simpler than you think
				</h1>
				<span class="absolute"><img src={linha_h_2_svg} alt="" /></span>
			</div>
			<div class="flex flex-row">
				<div class="col2 mt-28 pl-10 text-lg relative">
					<div
						class="h-[73px] bg-[#F1F1F9] border border-[#D4D4ED] flex justify-center items-center"
					>
						<p class="Exo check">Profits, revenue and margin</p>
					</div>

					<div
						class="h-[73px] bg-[#F1F1F9] border border-[#D4D4ED] flex justify-center items-center"
					>
						<p class="Exo check">Quality of products and services</p>
					</div>
					<div
						class="h-[73px] bg-[#F1F1F9] border border-[#D4D4ED] flex justify-center items-center"
					>
						<p class="Exo check">Value to customers and stakeholders</p>
					</div>
				</div>
				<div>
					<div
						class="h-[73px] bg-[#F1F1F9] border border-[#D4D4ED] flex justify-center items-center"
					>
						<p class="Exo check">Process innovation</p>
					</div>
					<div
						class="h-[73px] bg-[#F1F1F9] border border-[#D4D4ED] flex justify-center items-center"
					>
						<p class="Exo check">Maturity and performance</p>
					</div>
					<div
						class="h-[73px] bg-[#F1F1F9] border border-[#D4D4ED] flex justify-center items-center"
					>
						<p class="Exo check">Sustainability</p>
					</div>
				</div>
			</div>
		</div>

		<div class="column2 w-1/2">
			<div class="col3">
				<p>
					My Menthor acts as a <strong> Digital Mentor </strong> with an
					<strong> approach centered </strong> on being and not on disruptive technologies.
				</p>
				<p>
					It acts as an <strong> information </strong> hub, <strong> organizing knowledge </strong> in
					a single repository.
				</p>
			</div>
			<div class="col4">
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
