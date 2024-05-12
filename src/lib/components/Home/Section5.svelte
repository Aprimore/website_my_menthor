<script lang="ts">
	import { earth_webp, rocket_webp } from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="w-full items-center relative rounded-lg md:mt-20">
	<div class="mx-auto px-4 md:flex md:h-[330px] md:items-center relative">
		<div class="md:w-1/2 relative z-10 flex justify-center">
			<img
				src={rocket_webp}
				class="z-20 mt-2 relative max-md:max-w-64"
				alt="Rocket"
				loading="lazy"
				decoding="sync"
				fetchpriority="low"
			/>
		</div>
		<div class="md:w-1/2 relative z-20 space-y-6 md:max-w-screen-md flex flex-col justify-center">
			<h1 class="text-[#FCC614] Exo-Semibold text-2xl">{m.homepage_section_5_Come()}</h1>
			<p class="text-[#F1F1F9] Exo-Semibold text-3xl font-bold">
				{m.homepage_section_5_My_Menthor()}

				<!-- <span class="text-[#FCC614]"> My Menthor </span> is the complete plataform to your company's
				performance -->
			</p>

			<button class="border md:border-[#17193B] border-none rounded-xl mb-20 Exo">
				<a
					class="Archivo btn-learn bg-[#F1F1F9] block max-w-max rounded-xl px-10 py-4 text-xl text-[#17193B] focus:ring sm:w-auto z-10 relative"
					href="/products#platform"
					aria-label="Learn More about the platform"
					title="Learn more about the platform"
				>
					{m.button_learn_more()}
				</a>
			</button>
		</div>
	</div>
	<div class="mt-8 flex">
		<div class="bg-gradient-to-r from-[#000000] via-transparent to-transparent">
			<img
				loading="lazy"
				decoding="sync"
				fetchpriority="low"
				src={earth_webp}
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
