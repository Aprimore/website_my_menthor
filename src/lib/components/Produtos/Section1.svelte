<script>
	import { linha_h_4_svg, linha_v_1_svg, the_platform_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20 bg-white">
	<div class="h-[510px] flex flex-row pt-20 mx-auto justify-center items-center">
		<div>
			<div class="w-1/2">
				<h1 class="Exo text[#17193B] text-4xl font-bold relative">
					The platform
					<span><img src={linha_h_4_svg} class="z-10 absolute" alt="linha" /></span>
				</h1>
				<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
					<strong> My Menthor </strong> is a
					<strong> SaaS Business Architecture platform </strong>
					that <strong> helps to unfold the company's strategy </strong> into a vision oriented by
					end-to-end, providing visibility of processes and aligning organizational components to
					<strong> achieve business objectives </strong>.
				</p>
				<div
					class=" max-w-[30rem]
				 pt-5 rounded-lg mt-10 ml-10"
				>
					<span class="absolute"><img src={linha_v_1_svg} alt="" /></span>
					<p class="ml-6 mb-2 text-lg tracking-tight text-[#F1F1F9] Archivo">
						It brings <strong>effectiveness</strong> to
						<strong> the deployment and execution of the strategy </strong> , organizational alignment
						and ​visibility of processes for various purposes ​(compliance, risks, automation, etc.)
					</p>
				</div>
			</div>
			<div class="w-1/2"><img src={the_platform_png} class="w-full" alt="lottie animation" /></div>
		</div>
	</div>
</section>
