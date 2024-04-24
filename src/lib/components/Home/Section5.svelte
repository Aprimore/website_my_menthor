<script>
	import { arrow_right_svg, earth_png, rocket_png } from '$lib';
</script>

<section
	class="w-full items-center relative rounded-lg mt-20 "
>
	<div class="mx-auto px-4 lg:flex lg:h-[330px] lg:items-center relative ">
		<div class="w-1/2 relative z-10 flex justify-center">
			<img src={rocket_png} class="z-20 mt-2 relative" alt="" />
		</div>
		<div class="w-1/2 relative z-20 space-y-6">
			<h1 class="text-[#FCC614] Exo text-2xl">Come and acelerate with us !</h1>
			<h3 class="text-[#F1F1F9] Exo text-3xl font-bold">
				<span class="text-[#FCC614]"> My Menthor </span> is the complete plataform to your company's
				performance
			</h3>
			<!-- <div class="mt-8 flex justify-center gap-4 pb-20">
				
			</div> -->
			<!-- <div class=" flex flex-wrap justify-center gap-4 bg-[#8abb3f]">
				<a
					class="btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium text-[#17193B] bg-[#F1F1F9] border border-[#25285F] focus:ring sm:w-auto z-10 relative"
					href="#"
				>
					Contact Us
					<img src={arrow_right_svg} class="z-10 absolute right-5 bottom-[24px] size-3" alt="" />
				</a>

			</div> -->
			<div class="min-w-min">
				<a
					class="Archivo block w-full rounded-xl px-10 py-4 text-lg font-medium bg-[#F1F1F9] text-[#17193B] focus:ring sm:w-auto z-10 relative max-w-max"
					href="#"
				>
					Fale Conosco
					<img src={arrow_right_svg} class="z-10 absolute right-5 bottom-[24px] size-3" alt="" />
				</a>
			</div>
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

<!-- <div class="mt-8 flex flex-wrap justify-center gap-4">
    <div class="relative bg-gradient-to-r from-[#8abb3f] via-transparent to-transparent">
        <div class="absolute inset-0">
            <img src={earth_png} alt="Hero Header" class="w-full h-full object-cover" />
        </div>
    </div>
</div> -->
