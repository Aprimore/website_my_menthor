<script lang="ts">
	import { empresa_1_png } from '$lib';

	import animationData from '$lib/assets/lotties/gif-4.json';

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

<section class="w-full items-center relative rounded-lg bg-[#F1F1F9]">
	<div class="h-[634px] max-w-screen-2xl mx-auto flex items-center flex-row my-16">
		<div class="w-1/2 relative pl-12">
			<h1 class="Exo text-[#17193B] text-4xl font-bold relative ml-10 mt-12 ">
				What is <span class="text-[#454AB0]">Business <br /> Architecture Software?</span>
			</h1>
			<div bind:this={animationContainer} class="w-[533px] h-[400px]" />
			<!-- <img src={empresa_1_png} class="w-[533px] h-[300px]" alt="" /> -->
		</div>
		<div class="w-1/2 relative p-10">
			<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
				It is a <strong>management tool</strong> that uses an architectural approach to analyze and
				integrate strategy, processes, structure and other organizational components,
				<strong>boosting organizational performance and alignment</strong>. Where as transactional
				systems such as ERP focus on automating operational transactions and operational processes.
			</p>
			<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
				As a <strong>process-oriented Business Architect platform</strong>, it
				<strong>unfolds the strategy in end-to-end view</strong> of the Value Chain, and connects to
				the Process Architecture the other elements such as Organizational Structure, Indicators, Risks,
				Internal Controls, Systems, Resources, Data, Corporate documents, among other elements that are
				generally dispersed in the functional structures.
			</p>
			<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg">
				In this way, it creates a <strong>digital twin of the organization</strong>, enabling
				<strong>analysis, improvements and operational transformations</strong>, as well as
				assessing impacts and supporting change management.
			</p>
		</div>
	</div>
</section>
