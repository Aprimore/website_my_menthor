<script lang="ts">
	import { empresa_1_webp } from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="mt-4 lg:my-16 pb-20 bg-white">
	<div class="lg:h-[649px] lg:flex flex-row xl:max-w-screen-2xl mx-auto max-lg:p-5" id="about">
		<div class="lg:w-1/2 flex flex-col justify-center">
			<div class="lg:max-w-[600px] self-center space-y-12 mt-12">
				<h1
					class="blue-underline xl:text-4xl text-3xl max-sm:text-center z-10 relative text-[#17193B] Exo-Bold w-fit"
				>
					<!-- The company -->
					{@html m.company_TheCompany()}
				</h1>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- My Menthor is a product developed by APRIMORE Consultoria em Gestão Empresarial, based in Brazil, and TOPTIER Business Group, based in the USA . -->
					{@html m.company_AMyMenthorIsTheResult()}
				</p>
				<p class="Archivo text-[#25285F] text-lg leading-snug">
					{@html m.company_ItIsAProductDeveloped()}
				</p>

				<p class="Archivo text-[#25285F] text-lg leading-snug">
					<!-- That's when  we developed a solution capable of helping organizations in the process of implementing, sustaining and evolving the Business Architecture. We believe that our platform has the real potential to take organizations to a new level of management, providing effective  value for customers and stakeholders. -->
					{@html m.company_ThatsWhenWeDevelopedASolution()}
				</p>
			</div>
		</div>
		<div class="lg:w-1/2 lg:p-4 mt-3 relative lg:my-auto">
			<img
				src={empresa_1_webp}
				class=" mx-auto rounded-lg"
				alt="Webp Vector"
				loading="eager"
				decoding="async"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>

<style>
	h1.blue-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_azul_2.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		padding-bottom: 10px;
		background-size: 100% auto; /* Adjust background size */
	}

	@media (max-width: 709px) {
		h1.blue-underline {
			background-size: 100% auto;
		}
	}
</style>
