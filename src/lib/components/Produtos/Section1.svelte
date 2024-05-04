<script lang="ts">
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import {
		estrela_verde_svg,
		linha_h_4_svg,
		linha_v_1_svg,
		products_svg,
		the_platform_png
	} from '$lib';
</script>

<section class="w-full bg-white pt-16">
	<div
		class="lg:h-[510px] lg:flex lg:max-w-screen-2xl flex-row lg:mx-auto justify-center items-center p-6"
		id="platform"
	>
		<div class="lg:w-1/2 lg:max-w-[600px] space-y-4 md:space-y-6 relative">
			<h1 class="Exo-Bold text-[#17193B] text-4xl font-bold relative">
				{m.produtos_MyMenthorIs()}
				<span><img src={linha_h_4_svg} class="z-10" alt="linha" /></span>
			</h1>
			<p class="text-[#25285F] Archivo text-lg p-1">
				{m.produtos_BusinessArchitecturePlatform()}
			</p>
			<div
				class="flex items-center w-full
				  rounded-md bg-[#25285F] py-6 md:py-10 px-16 relative max-h-[200px]"
			>
				<img src={estrela_verde_svg} class="absolute -top-5 -right-5" alt="" />
				<span class="absolute left-10"><img src={linha_v_1_svg} alt="" /></span>
				<p class=" text-lg leading-tight text-[#F1F1F9] Archivo">
					{m.produtos_DeploymentAndExecutionOfStrategy()}

					<!-- It brings effectiveness to the deployment and execution of the strategy, organizational alignment and ​visibility of processes for various purposes ​(compliance, risks, automation, etc.) -->
				</p>
			</div>
		</div>
		<div class="lg:w-1/2 flex justify-center lg:ml-20 max-md:mt-10">
			<img src={products_svg} class=" lg:min-w-[650px]" alt="" />
		</div>
	</div>
</section>
