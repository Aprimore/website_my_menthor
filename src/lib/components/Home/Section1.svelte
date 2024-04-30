<script lang="ts">
	import {
		arrow_right_svg,
		linha_h_4_svg,
		linha_v_1_svg,
		linha_v_2_svg,
		the_platform_png
	} from '$lib';

	import animationData from '$lib/assets/lotties/gif-1.json';

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

<section class="max-w-screen-xl relative rounded-lg mx-auto my-2">
	<div class="py-5 lg:py-20 relative flex flex-col">
		<div class="flex flex-col lg:w-1/2 relative items-center">
			<div
				class="card1 flex justify-center bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl relative max-w-[600px]"
			>
				<div
					class="max-w-[600px] lg:max-w-[695px] max-h-[520px] lg:max-h-[570px]
				  text-[#17193B] rounded-lg py-10 xl:py-14 px-5 lg:px-16 relative"
				>
					<span class="absolute"><img src={linha_v_1_svg} alt="" /></span>
					<h3 class="ml-6 mb-2 text-lg tracking-tight text-[#25285F] Archivo leading-tight">
						It brings <strong>effectiveness</strong> to
						<strong> the deployment and execution of the strategy </strong> , organizational alignment
						and ​visibility of processes for various purposes ​(compliance, risks, automation, etc.)
					</h3>
					<div bind:this={animationContainer} class="max-lg:max-w-96" />
				</div>
			</div>
		</div>
		<div
			class="mt-5 lg:mt-24 right-0 flex lg:absolute card1 bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl xl:max-w-screen-md max-w-[600px] self-center"
		>
			<div class="text-[#17193B] rounded-lg p-12 xl:p-16 w-full" id="products-about">
				<h1 class="Exo text-4xl font-bold relative">
					The platform
					<span><img src={linha_h_4_svg} class="z-10" alt="linha" /></span>
				</h1>

				<h3 class="mt-10 mb-2 text-[#25285F] Archivo text-lg leading-snug">
					<strong> My Menthor </strong> is a
					<strong> SaaS Business Architecture platform </strong>
					that <strong> helps to unfold the company's strategy </strong> into a vision oriented by
					end-to-end, providing visibility of processes and aligning organizational components to
					<strong> achieve business objectives </strong>.
				</h3>

				<div class="mt-8 flex flex-wrap gap-4">
					<a
						class="btn-learn block max-w-max rounded-xl px-8 py-4 text-lg font-medium bg-[#8ABB3F] text-[#F1F1F9] focus:ring sm:w-auto z-10 relative"
						href="/products#platform"
					>
						Learn More
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.btn-learn::after {
		background-color: #8abb3f;
		content: url('$lib/assets/svg/arrow_right_claro.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
