<script>
	import { estrela_verde_svg, linha_h_4_svg, linha_v_1_svg, the_platform_png } from '$lib';
</script>

<section class="w-full bg-white pt-16">
	<div class="h-[510px] flex max-w-screen-2xl flex-row mx-auto justify-center items-center p-6">
		<div class="w-1/2 max-w-[600px] space-y-6 relative">
			<h1 class="Exo text-[#17193B] text-4xl font-bold relative">
				The platform
				<span><img src={linha_h_4_svg} class="z-10" alt="linha" /></span>
			</h1>
			<p class="text-[#25285F] Archivo text-lg pb-10">
				<strong> My Menthor </strong> is a
				<strong> SaaS Business Architecture platform </strong>
				that <strong> helps to unfold the company's strategy </strong> into a vision oriented by
				end-to-end, providing visibility of processes and aligning organizational components to
				<strong> achieve business objectives </strong>.
			</p>
			<div
				class="w-full
				  rounded-md bg-[#25285F] py-10 px-16 relative"
			>
				<img src={estrela_verde_svg} class="absolute -top-5 -right-5" alt="" />
				<span class="absolute left-10"><img src={linha_v_1_svg} alt="" /></span>
				<p class=" text-lg leading-tight text-[#F1F1F9] Archivo">
					It brings <strong>effectiveness</strong> to
					<strong> the deployment and execution of the strategy </strong> , organizational alignment
					and ​visibility of processes for various purposes ​(compliance, risks, automation, etc.)
				</p>
			</div>
		</div>
		<div class="w-1/2 flex justify-center">
			<img src={the_platform_png} class="" alt="lottie animation" />
		</div>
	</div>
</section>
