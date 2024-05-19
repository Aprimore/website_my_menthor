<script lang="ts">
	import { linha_v_1_verde_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';

	import animationData from '$lib/assets/lotties/gif-1.json';
	import { onMount } from 'svelte';

	let LottiePlayer;
	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

<section class="lg:max-w-screen-xl relative rounded-lg mx-auto my-2 max-sm:p-2">
	<div class="md:py-5 lg:py-20 relative flex flex-col sm:p-3">
		<div class="flex flex-col lg:w-1/2 relative sm:items-center max-lg:order-1 mt-3">
			<div
				class="flex justify-center bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl relative max-w-[650px] w-full lg:pr-20"
			>
				<div
					class="xl:max-w-[695px] max-h-[520px] xl:max-h-[570px]
				  text-[#17193B] rounded-lg py-10 xl:py-14 px-5 lg:px-16 relative"
				>
					<span class="absolute max-sm:hidden ml-5"
						><img
							src={linha_v_1_verde_svg}
							alt="linha"
							loading="eager"
							decoding="async"
							fetchpriority="high"
						/></span
					>
					<h1
						class="ml-12 mb-2 text-lg tracking-tight text-[#25285F] Archivo leading-tight max-w-[550px]"
					>
						{@html m.homepage_section1_desc1()}
					</h1>

					<div class="relative w-full flex juftify-center align-center">
						{#if LottiePlayer}
							<LottiePlayer
								src={animationData}
								autoplay={true}
								loop={true}
								renderer="svg"
								background="transparent"
								height={420}
								width={420}
								{controlsLayout}
							/>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div
			class="mt-5 lg:mt-24 right-0 flex lg:absolute bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl xl:max-w-screen-md max-w-[650px] lg:max-w-[580px] w-full self-center"
		>
			<div class="text-[#17193B] rounded-lg max-md:p-5 p-12 xl:p-16 w-full" id="products-about">
				<h2 class="max-sm:text-center Exo-Bold text-4xl relative blue-underline">
					{m.homepage_section1_title()}
				</h2>

				<p class="mt-10 mb-2 text-[#25285F] Archivo text-lg leading-snug">
					{@html m.homepage_section1_desc2()}
					<!--  My Menthor is a SaaS Business Architecture platform that  helps to unfold the company's strategy  into a vision oriented by end-to-end, providing visibility of processes and aligning organizational components to achieve business objectives. -->
				</p>

				<div class="mt-8 flex flex-wrap gap-4">
					<a
						class="Exo btn-learn block max-w-max rounded-xl px-8 py-4 text-lg bg-[#8ABB3F] text-[#F1F1F9] focus:ring sm:w-auto z-10 relative max-sm:mx-auto"
						href="/products#platform"
						aria-label="Learn more about the platform"
						title="Learn more about the platform"
					>
						{m.button_learn_more()}
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
		margin-left: 20px;
	}

	h2.blue-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_azul_4.svg');
		background-repeat: no-repeat;
		background-position: bottom left;
		padding-bottom: 20px;
	}
	@media (max-width: 638px) {
		h2.blue-underline {
			background-position: bottom;
		}
	}
</style>
