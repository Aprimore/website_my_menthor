<script lang="ts">
	import {
		linha_h_amarela3_svg,
		linha_h_azul4_svg,
		linha_h_laranja2_svg,
		linha_h_verde2_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section class="w-full relative rounded-lg bg-[#D4D4ED]">
	<div
		class="max-w-screen-2xl grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 mx-auto sm:p-4"
		id="packages"
	>
		<div class="relative max-sm:p-2">
			<div class="mt-10 flex justify-center"></div>
			<div
				class=" h-[214px] bg-white flex flex-col justify-center items-center border border-gray-300 shadow-sm"
			>
				<p
					class="Exo xl:text-4xl text-3xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED] absolute top-1.5"
				>
					1.
				</p>
				<h2 class="Exo-Semibold text-3xl text-[#EB642A]">
					<!-- STARTER -->
					{@html m.solutions_STARTER()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- Ideal for those who want to start with a small team and then expand their use. -->
					{@html m.solutions_IdealForThose()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_laranja2_svg} alt="linha" loading="lazy" fetchpriority="auto" />
				</span>
			</div>
		</div>
		<div class="relative max-sm:p-2">
			<div class="mt-10 flex justify-center"></div>
			<div
				class="  h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo xl:text-4xl text-3xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED] absolute top-1.5"
				>
					2.
				</p>
				<h2 class="Exo-Semibold text-3xl text-[#8ABB3F]">
					<!-- BASIC -->
					{@html m.solutions_BASIC()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- The perfect choice for teams with a quick start. -->
					{@html m.solutions_ThePerfectChoice()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_verde2_svg} alt="linha" loading="lazy" fetchpriority="auto" />
				</span>
			</div>
		</div>
		<div class="relative max-sm:p-2">
			<div class="mt-10 flex justify-center"></div>
			<div
				class="  h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo xl:text-4xl text-3xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED] absolute top-1.5"
				>
					3.
				</p>
				<h2 class="Exo-Semibold text-3xl text-[#454AB0]">
					<!-- PREMIUM -->
					{@html m.solutions_PREMIUM()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- For companies that prefer an integrated start. -->
					{@html m.solutions_ForCompaniesThatPrefer()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6">
					<img src={linha_h_azul4_svg} alt="linha" loading="lazy" fetchpriority="auto" />
				</span>
			</div>
		</div>
		<div class="relative max-sm:p-2">
			<div class="mt-10 flex justify-center"></div>
			<div
				class="  h-[214px] bg-white flex flex-col justify-center items-center space-y-2 border border-gray-300 shadow-sm"
			>
				<p
					class="Exo xl:text-4xl text-3xl border border-gray-300 shadow-sm size-[4rem] flex justify-center items-center rounded-full bg-white text-[#D4D4ED] absolute top-1.5"
				>
					4.
				</p>
				<h2 class="Exo-Semibold text-3xl text-[#FCC614]">
					<!-- ENTERPRISE -->
					{@html m.solutions_ENTERPRISE()}
				</h2>
				<p class="Archivo text-[#25285F] max-w-[14rem] relative text-center">
					<!-- Can be customized according to customer's needs. -->
					{@html m.solutions_CanBeCustomizedAccordingToCustomers()}
				</p>
				<span class="max-w-[15rem] absolute bottom-6 max-sm:hidden">
					<img
						class="max-sm:hidden"
						src={linha_h_amarela3_svg}
						alt="linha"
						loading="lazy"
						fetchpriority="auto"
					/>
				</span>
			</div>
		</div>
	</div>
</section>
