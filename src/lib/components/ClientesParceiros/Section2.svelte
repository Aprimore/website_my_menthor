<script lang="ts">
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

<section class="w-full rounded-lg bg-[#F1F1F9]">
	<div class="max-w-screen-2xl mx-auto h-[489px] flex flex-row pt-20">
		<div class="w-1/2 flex justify-center items-center">
			<div class="card">
				<div bind:this={animationContainer} />
			</div>
		</div>
		<div class="w-1/2 flex justify-center items-center">
			<div class="card bg-[#F1F1F9] mb-10 max-w-[580px] mr-36">
				<h1
					class="Exo text-2xl sm:text-4xl z-10 relative text-[#17193B] font-extrabold mb-8 whitespace-nowrap"
				>
					<span class="text-[#EB642A]"> Your success</span> is our success

					<span><img src={linha_h_laranja_svg} class="z-10 right-0" alt="linha" /></span>
				</h1>
				<p class="Archivo text-[#25285F] text-lg">
					We are committed to the continued success of our clients, cultivating long-term
					relationships with a focus on results.
				</p>
			</div>
		</div>
	</div>
</section>
