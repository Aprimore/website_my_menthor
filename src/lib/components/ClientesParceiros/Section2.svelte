<script lang="ts">
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import { clientes_parceiros_2_png, linha_h_5_svg, linha_h_laranja_svg } from '$lib';

	import animationData from '$lib/assets/lotties/gif-6.json';

	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	let animationContainer: HTMLElement;

	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			loop: true,
			autoplay: true,
			animationData
		});
	});
</script>

<section class="w-full rounded-lg bg-[#F1F1F9] max-lg:pt-10">
	<div class="lg:max-w-screen-2xl mx-auto lg:h-[489px] flex max-lg:flex-col">
		<div class="lg:w-1/2 flex justify-center items-center max-lg:order-2">
			<div class="card">
				<div bind:this={animationContainer} />
			</div>
		</div>
		<div class="lg:w-1/2 flex justify-center items-center border-black">
			<div class="card bg-[#F1F1F9] lg:max-w-[580px] lg:mr-36">
				<h1
					class="Exo-Bold text-3xl sm:text-4xl relative text-[#17193B] whitespace-nowrap max-lg:text-center mb-5"
				>
					<span class="text-[#EB642A] relative">
						<!-- Your success -->
						{m.clientesP_YourSuccessIsOurSuccess()}
						<img
							src={linha_h_laranja_svg}
							class="absolute
							max-lg:top-9 max-lg:left-3
							top-11 left-3
							max-sm:w-52"
							alt="linha"
						/>
					</span>
					<!-- is our success -->
					<!-- {m.clientesP_YourSuccessIsOurSuccess()} -->
				</h1>
				<p class="Archivo text-[#25285F] text-lg">
					<!-- We are committed to the continued success of our clients, cultivating long-term
					relationships with a focus on results. -->
					{m.clientesP_WeAreCommittedToTheContinuedSuccess()}
				</p>
			</div>
		</div>
	</div>
</section>
