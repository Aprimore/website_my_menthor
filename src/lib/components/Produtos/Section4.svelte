<script lang="ts">
	import {
		linha_v_azul_svg,
		products_1_webp,
		products_2_webp,
		products_s3_bg_radial_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section class="relative w-full h-full">
	<img
		width="768"
		height="550"
		src={products_s3_bg_radial_svg}
		class="absolute top-0 left-0 w-full h-full object-cover -z-20 bg-image3 border-yellow-500"
		alt="radial effect"
		loading="lazy"
		fetchpriority="auto"
	/>
	<div class="w-full h-full relative">
		<div class="lg:max-w-screen-2xl mx-auto lg:flex flex-row items-center lg:pt-20 max-lg:p-5">
			<div class="lg:w-1/2 lg:p-10 space-y-6 lg:space-y-10 max-lg:mb-10" id="target-audience">
				<h1
					class="yellow-underline Exo-Bold xl:text-4xl text-3xl z-10 relative text-[#F1F1F9] max-lg:text-center w-fit max-lg:mx-auto"
				>
					{@html m.produtos_TargetAudience()}
				</h1>
				<p class="text-[#D4D4ED] Archivo text-lg">
					<!-- The platform is aimed at companies wishing to implement, sustain or leverage management, regardless of their level of maturity. -->
					{@html m.produtos_ThePlatformIsAimedAtCompanies()}
				</p>
				<p class="text-[#D4D4ED] Archivo text-lg">
					<!-- We develop and empower people and organizations through their executives, managers, owners, custodians and process executors, empowering and engage them to improve the performance of their processes and consequently the organization's results. -->
					{@html m.produtos_WeDevelopAndEmpowerPeopleAndOrganizations()}
				</p>
				<p class="text-[#D4D4ED] Archivo text-lg">
					<!-- Business, corporate and process architects, internal consultants and management management
									specialists enjoy the benefits of comprehensive and robust modeling of the robust modeling
									of the business and governance components of enterprise architecture offered by our
									platform. -->
					{@html m.produtos_BusinessCorporateAndProcessArchitects()}
				</p>
			</div>

			<div class="lg:w-1/2 flex flex-col justify-center items-center">
				<img
					width="688"
					height="387"
					src={products_2_webp}
					class="w-full"
					alt="Webp Vector"
					loading="lazy"
					fetchpriority="auto"
				/>
			</div>
		</div>

		<div class="lg:max-w-screen-2xl mx-auto lg:flex items-center flex-row">
			<div class="lg:w-1/2 space-y-6 lg:space-y-10 px-5 lg:px-10 relative order-1">
				<p class="text-[#D4D4ED] Archivo text-lg">
					<!-- My Menthor is a business partner for corporate areas that face the challenge of
							implementing, disseminating and improving various management models in the organization.
							This includes, among other areas, strategic planning, process management, risks and internal
							controls, quality, information technology, human resources, PMO and sustainability. -->
					{@html m.produtos_MyMenthorIsABusinessPartnerForCorporateAreas()}
				</p>
				<span class="absolute left-3 max-lg:hidden"
					><img src={linha_v_azul_svg} alt="linha" loading="lazy" fetchpriority="auto" /></span
				>
				<p class="text-[#D4D4ED] Archivo text-lg">
					<!-- My Menthor is also a strategic partner for management consultancies and independent
								consultants who wish to use the platform their clients' projects, ensuring the
								sustainability of the work and the improvements implemented after the project is completed. -->
					{@html m.produtos_MyMenthorIsAlsoAStrategicPartner()}
				</p>
			</div>
			<div class="lg:w-1/2 flex flex-col items-center p-5 lg:p-10 max-lg:order-2">
				<img
					src={products_1_webp}
					class="w-full"
					alt="Webp Vector"
					loading="lazy"
					fetchpriority="auto"
				/>
			</div>
		</div>
		<div>
			<button class="flex mx-auto pb-10 mt-5 Exo">
				<a
					class="btn-contact bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
					href="/company#contact"
				>
					<!-- Contact Us -->
					{@html m.footer_Contact_us()}
				</a>
			</button>
		</div>
	</div>
</section>

<style>
	h1.yellow-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_amarela2.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		padding-bottom: 20px;
		background-size: 100% auto; /* Adjust background size */
	}

	@media (max-width: 709px) {
		h1.yellow-underline {
			background-size: 100% auto;
		}
	}
</style>
