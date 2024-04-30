<script>
	import { arrow_right_svg, earth_png, rocket_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg mt-20">
	<div class="mx-auto px-4 lg:flex lg:h-[330px] lg:items-center relative">
		<div class="lg:w-1/2 relative z-10 flex justify-center">
			<img src={rocket_png} class="z-20 mt-2 relative max-lg:max-w-64" alt="" />
		</div>
		<div class="lg:w-1/2 relative z-20 space-y-6 lg:max-w-screen-md flex flex-col justify-center">
			<h1 class="text-[#FCC614] Exo text-2xl">Come and acelerate with us !</h1>
			<h3 class="text-[#F1F1F9] Exo text-3xl font-bold">
				<span class="text-[#FCC614]"> My Menthor </span> is the complete plataform to your company's
				performance
			</h3>

			<button class="border border-[#17193B] rounded-xl mb-20">
				<a
					class="Archivo btn-learn bg-[#F1F1F9] block max-w-max rounded-xl px-10 py-4 text-xl text-[#17193B] focus:ring sm:w-auto z-10 relative"
					href="/products#platform"
				>
					Learn More
				</a>
			</button>
		</div>
	</div>
	<div class="mt-8 flex">
		<div class="bg-gradient-to-r from-[#000000] via-transparent to-transparent">
			<img
				src={earth_png}
				alt="Hero Header"
				class="absolute inset-0 w-full h-full object-cover bg-gradient-to-r from-[#010101] via-transparent to-transparent"
			/>
		</div>
	</div>
</section>

<style>
	.btn-learn::after {
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
