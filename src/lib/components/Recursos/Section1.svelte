<script>
	import { arrow_right_svg, linha_h_7_svg, the_platform_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9] py-28">
	<div class="flex max-w-[1420px] max-h-[492px] mx-auto bg-white py-5 px-10">
		<div class="w-1/3 flex flex-col justify-center pl-10">
			<div class="space-y-5">
				<h1 class="Exo text-3xl font-bold">My Menthor Blog</h1>
				<p class="Archivo text-lg">Explore insights and expert tips on our blog.</p>
				<button class="min-w-min">
					<a
						class="bg-[#D4D4ED] Archivo block w-full rounded-xl px-10 py-3 text-base font-medium text-[#17193B] focus:ring sm:w-auto z-10 relative max-w-max"
						href="#"
					>
						Access
						<img src={arrow_right_svg} class="z-10 absolute right-4 bottom-[18px] size-3" alt="" />
					</a>
				</button>
				<span class=""><img class=" mt-5" src={linha_h_7_svg} alt="" /></span>
			</div>
			<div class="space-y-5 mt-6">
				<h1 class="Exo text-3xl font-bold">Events and Webinars</h1>
				<p class="Archivo text-lg max-w-96">
					Take part in our events and webinars to keep up to date with our ecosystem.
				</p>
				<button class="min-w-min">
					<a
						class="bg-[#D4D4ED] Archivo block w-full rounded-xl px-10 py-3 text-base font-medium text-[#17193B] focus:ring sm:w-auto z-10 relative max-w-max"
						href="#"
					>
						Access
						<img src={arrow_right_svg} class="z-10 absolute right-4 bottom-[18px] size-3" alt="" />
					</a>
				</button>
			</div>
		</div>

		<div class="w-1/3 flex flex-col justify-center">
			<div class="space-y-5 h-[174px] relative">
				<h1 class="Exo text-3xl font-bold">My Menthor Academy</h1>
				<p class="Archivo text-lg">Train and develop skills related to Business Architecture.</p>

				<span class="absolute bottom-0"><img class=" " src={linha_h_7_svg} alt="" /></span>
			</div>
			<div class="space-y-5 mt-6 h-[180px]">
				<h1 class="Exo text-3xl font-bold">Knowledge base</h1>
				<p class="Archivo text-lg">
					Access our knowledge base to find answers and solutions to your business challenges.
				</p>
			</div>
		</div>
		<div class="w-1/3 flex flex-col justify-center relative">
			<div class="relative">
				<img class="relative h-52 w-full" src={the_platform_png} alt="" />
			</div>
			<div class="bg-[#F1F1F9] flex flex-col justify-center py-14 px-10">
				<h1 class="Exo text-4xl font-bold">Resources</h1>
				<p class="Archivo text-lg mt-6">
					Discover the resources available to you stay updated about the best articles, events and
					knowledge about the platform.
				</p>
			</div>
		</div>
	</div>
</section>
