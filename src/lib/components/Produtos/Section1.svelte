<script lang="ts">
	import {
		estrela_verde_svg,
		linha_h_azul_4_svg,
		linha_v_amarela_svg,
		products_frame_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section class="w-full bg-white md:mt-16 mt-4">
	<div
		class="lg:min-h-[31rem] lg:max-w-[92rem] lg:flex flex-row lg:mx-auto justify-center items-center p-6"
		id="platform"
	>
		<div class="lg:w-1/2 lg:max-w-[40%] space-y-4 md:space-y-6 relative">
			<h1
				class="Exo-Bold text-[#17193B] xl:text-4xl text-3xl font-bold relative max-sm:text-center"
			>
				{@html m.produtos_MyMenthorIs()}
				<span
					><img
						width="224"
						height="17"
						src={linha_h_azul_4_svg}
						class="z-10 max-sm:mx-auto w-56"
						alt="linha"
						loading="eager"
						fetchpriority="high"
					/></span
				>
			</h1>
			<p class="text-[#25285F] Archivo text-lg p-1">
				{@html m.produtos_BusinessArchitecturePlatform()}
			</p>
			<div
				class="flex items-center w-full
				  rounded-md bg-[#25285F] py-6 md:py-10 sm:px-16 p-3 relative sm:max-h-[200px]"
			>
				<img
					width="61"
					height="61"
					src={estrela_verde_svg}
					class="absolute -top-5 -right-5"
					alt="star"
					loading="eager"
					fetchpriority="high"
				/>
				<span class="absolute left-10 max-sm:hidden"
					><img
						width="13"
						height="70"
						src={linha_v_amarela_svg}
						alt="linha"
						loading="eager"
						fetchpriority="high"
					/></span
				>
				<p class=" text-lg leading-tight text-[#F1F1F9] Archivo">
					{@html m.produtos_DeploymentAndExecutionOfStrategy()}

					<!-- It brings effectiveness to the deployment and execution of the strategy, organizational alignment and ​visibility of processes for various purposes ​(compliance, risks, automation, etc.) -->
				</p>
			</div>
		</div>
		<div class="lg:w-1/2 flex justify-center lg:ml-20 max-md:mt-10 w-full">
			<img
				width="712"
				height="441"
				src={products_frame_svg}
				class="max-w-ull"
				alt="Svg Icon"
				loading="eager"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>
