<script>
	import * as m from '$paraglide/messages';
	import {
		linha_h_1_svg,
		linha_h_7_svg,
		linha_h_amarela3_svg,
		linha_h_azul4_svg,
		linha_h_laranja2_svg,
		linha_h_verde2_svg
	} from '$lib';
</script>

<section class="w-full md:flex relative rounded-lg bg-[#D4D4ED]">
	<div
		class="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto p-10 max-md:max-w-screen-sm space-x-5"
		id="packages"
	>
		<div class="relative">
			<div class="mt-10 flex justify-center"></div>
			<div
				class=" md:w-[333px] h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo text-4xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED]  absolute top-1.5"
				>
					1.
				</p>
				<h2 class="Exo-Semibold  text-3xl text-[#EB642A]">
					<!-- STARTER -->
					{m.solutions_STARTER()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- Ideal for those who want to start with a small team and then expand their use. -->
					{m.solutions_IdealForThose()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_laranja2_svg} class=" " alt="" />
				</span>
			</div>
		</div>
		<div class="relative">
			<div class="mt-10 flex justify-center"></div>
			<div
				class=" md:w-[333px] h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo text-4xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED]  absolute top-1.5"
				>
					2.
				</p>
				<h2 class="Exo-Semibold  text-3xl text-[#8ABB3F]">
					<!-- BASIC -->
					{m.solutions_BASIC()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- The perfect choice for teams with a quick start. -->
					{m.solutions_ThePerfectChoice()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_verde2_svg} class="" alt="" />
				</span>
			</div>
		</div>
		<div class="relative">
			<div class="mt-10 flex justify-center"></div>
			<div
				class=" md:w-[333px] h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo text-4xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED]  absolute top-1.5"
				>
					3.
				</p>
				<h2 class="Exo-Semibold  text-3xl text-[#454AB0]">
					<!-- PREMIUM -->
					{m.solutions_PREMIUM()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- For companies that prefer an integrated start. -->
					{m.solutions_ForCompaniesThatPrefer()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_azul4_svg} class=" " alt="" />
				</span>
			</div>
		</div>
		<div class="relative">
			<div class="mt-10 flex justify-center"></div>
			<div
				class=" md:w-[333px] h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo text-4xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED]  absolute top-1.5"
				>
					4.
				</p>
				<h2 class="Exo-Semibold  text-3xl text-[#FCC614]">
					<!-- ENTERPRISE -->
					{m.solutions_ENTERPRISE()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- Can be customized according to customer's needs. -->
					{m.solutions_CanBeCustomizedAccordingToCustomers()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_amarela3_svg} class=" " alt="" />
				</span>
			</div>
		</div>
	</div>
</section>