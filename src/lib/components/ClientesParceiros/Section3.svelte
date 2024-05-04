<script>
	import * as m from '$paraglide/messages';
	import {
		clientes_parceiros_1_png,
		linha_h_5_svg,
		linha_h_amarela_svg,
		products_s3_bg_radial_svg
	} from '$lib';
</script>

<section class="relative w-full h-full">
	<img
		src={products_s3_bg_radial_svg}
		class="absolute top-0 left-0 w-full h-full object-cover -z-20"
	/>
	<div class="w-full h-full relative">
		<div class="py-24 max-w-screen-2xl mx-auto space-y-24" id="cases">
			<div class=" mx-auto">
				<h1
					class="Exo mx-auto text-2xl sm:text-5xl z-10 relative text-[#F1F1F9] Exo-Bold max-w-max mb-24"
				>
					<!-- Partner program -->
					{m.clientesP_SuccessHistories()}
					<span><img src={linha_h_amarela_svg} class="z-10" alt="linha" /></span>
				</h1>
				<div class="lg:flex flex-row">
					<div class="lg:w-1/2">
						<div class=" xl:ml-16 rounded-lg">
							<img src={clientes_parceiros_1_png} class=" mx-auto xl:max-w-[604px]" alt="" />
						</div>
					</div>
					<div class="lg:w-1/2 flex flex-col justify-center space-y-8 xl:px-10 lg:mr-4">
						<h1 class="text-[#FCC614] Exo-Bold max-lg:text-center text-4xl">
							<!-- Case -->
							{m.clientesP_Case()}
						</h1>
						<p class="text-[#D4D4ED] Archivo max-w-screen-md mx-auto text-xl">
							<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat ligula et mollis fringilla. Nunc mollis, odio eget consectetur rhoncus, nisl mauris blandit ante, non pretium turpis ligula a magna. Nam faucibus volutpat orci, at sagittis lacus dignissim sed. Curabitur id ex quis est vulputate vestibulum. -->
							{m.clientesP_LoremIpsumDolorSitAmet()}
						</p>
						<p class="text-[#D4D4ED] Archivo max-w-screen-md mx-auto text-xl">
							<!-- Donec sodales dui sapien, ut euismod felis imperdiet ac. Vestibulum nulla ipsum, tincidunt eu porttitor aliquam, malesuada eget leo. Quisque sed quam ut est finibus maximus non quis elit. Fusce et luctus enim, ac gravida sem. Donec interdum lectus tortor, in ullamcorper lacus rhoncus sit amet. -->
							{m.clientesP_DonecSodalesDuiSapien()}
						</p>
					</div>
				</div>
			</div>
			<div class="  mx-auto">
				<div class="lg:flex flex-row">
					<div class="lg:w-1/2">
						<div class=" xl:ml-16 rounded-lg">
							<img src={clientes_parceiros_1_png} class="mx-auto xl:max-w-[604px]" alt="" />
						</div>
					</div>
					<div class="lg:w-1/2 flex flex-col justify-center space-y-8 xl:px-10 lg:mr-4">
						<h1 class="text-[#FCC614] Exo-Bold max-lg:text-center text-4xl">
							<!-- Case -->
							{m.clientesP_Case()}
						</h1>
						<p class="text-[#D4D4ED] Archivo max-w-screen-md mx-auto text-xl">
							<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat ligula et mollis fringilla. Nunc mollis, odio eget consectetur rhoncus, nisl mauris blandit ante, non pretium turpis ligula a magna. Nam faucibus volutpat orci, at sagittis lacus dignissim sed. Curabitur id ex quis est vulputate vestibulum. -->
							{m.clientesP_LoremIpsumDolorSitAmet()}
						</p>
						<p class="text-[#D4D4ED] Archivo max-w-screen-md mx-auto text-xl">
							<!-- Donec sodales dui sapien, ut euismod felis imperdiet ac. Vestibulum nulla ipsum, tincidunt eu porttitor aliquam, malesuada eget leo. Quisque sed quam ut est finibus maximus non quis elit. Fusce et luctus enim, ac gravida sem. Donec interdum lectus tortor, in ullamcorper lacus rhoncus sit amet. -->
							{m.clientesP_DonecSodalesDuiSapien()}
						</p>
					</div>
				</div>
			</div>
			<div class="mx-auto">
				<div class="lg:flex flex-row">
					<div class="lg:w-1/2">
						<div class=" xl:ml-16 rounded-lg">
							<img src={clientes_parceiros_1_png} class="mx-auto xl:max-w-[604px]" alt="" />
						</div>
					</div>
					<div class="lg:w-1/2 flex flex-col justify-center space-y-8 xl:px-10 lg:mr-4">
						<h1 class="text-[#FCC614] Exo-Bold max-lg:text-center text-4xl">
							<!-- Case -->
							{m.clientesP_Case()}
						</h1>
						<p class="text-[#D4D4ED] Archivo max-w-screen-md mx-auto text-xl">
							<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat ligula et mollis fringilla. Nunc mollis, odio eget consectetur rhoncus, nisl mauris blandit ante, non pretium turpis ligula a magna. Nam faucibus volutpat orci, at sagittis lacus dignissim sed. Curabitur id ex quis est vulputate vestibulum. -->
							{m.clientesP_LoremIpsumDolorSitAmet()}
						</p>
						<p class="text-[#D4D4ED] Archivo max-w-screen-md mx-auto text-xl">
							<!-- Donec sodales dui sapien, ut euismod felis imperdiet ac. Vestibulum nulla ipsum, tincidunt eu porttitor aliquam, malesuada eget leo. Quisque sed quam ut est finibus maximus non quis elit. Fusce et luctus enim, ac gravida sem. Donec interdum lectus tortor, in ullamcorper lacus rhoncus sit amet. -->
							{m.clientesP_DonecSodalesDuiSapien()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
