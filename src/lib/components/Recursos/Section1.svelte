<script lang="ts">
	import { arrow_right_svg, linha_h_cinza_svg } from '$lib';
	import animationData from '$lib/assets/lotties/gif-3.json';
	import * as m from '$lib/paraglide/messages';
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

{#if m}
	<section
		class="resources_section w-full relative sm:rounded-lg lg:bg-[#F1F1F9] sm:py-14 md:py-28 justify-center mx-auto"
		id="bottom-page"
	>
		<div
			class="bg-white grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl m-auto sm:rounded-lg lg:px-10 lg:py-6"
		>
			<div class=" lg:flex lg:flex-col max-md:flex-col max-md:text-center justify-center p-3">
				<div class="space-y-5 py-5 relative md:mt-6 lg:mt-0">
					<h1 class="Exo-Bold text-3xl">
						{m.homepage_section_6_My_menthor()}
					</h1>
					<p class="Archivo text-lg">{m.homepage_section_6_Explore()}</p>

					<button class="min-w-min Exo">
						<a
							class=" Archivo btn-access bg-[#D4D4ED] block w-full rounded-xl px-6 py-4 text-[#17193B] focus:ring sm:w-auto z-10 relative"
							href="http://mymenthor.com/blog"
							target="_blank"
						>
							{m.button_access()}
						</a>
					</button>
				</div>

				<div class="space-y-5 md:mt-6 sm:py-5 max-sm:mt-5">
					<h1 class="Exo-Bold text-3xl">
						{m.homepage_section_6_Events()}
					</h1>
					<p class="Archivo text-lg">
						{m.homepage_section_6_Take_part()}
					</p>
					<button class="min-w-min">
						<a
							class=" Archivo btn-access bg-[#D4D4ED] block w-full rounded-xl px-6 py-4 text-[#17193B] focus:ring sm:w-auto z-10 relative"
							href="http://mymenthor.com/blog"
							target="_blank"
						>
							{m.button_access()}
						</a>
					</button>
				</div>
			</div>

			<div
				class="lg:flex lg:flex-col max-md:flex-col max-md:text-center justify-center p-3 max-sm:mt-5"
			>
				<div class="space-y-5 relative sm:py-5 md:mt-6 lg:mt-0 max-md:mb-10">
					<h1 class="Exo-Bold text-3xl">
						{m.homepage_section_6_My_Menthor_Academy()}
					</h1>
					<p class="Archivo text-lg">{m.homepage_section_6_Develop()}</p>

					<button class="min-w-min btn-invisible max-md:hidden">
						<a
							class="Archivo bg-[#FFFFFF] block w-full rounded-xl px-6 py-4 text-[#FFFFFF] sm:w-auto z-10 relative btn-invisible"
							href="#"
						>
							{m.button_access()}
						</a>
					</button>
				</div>
				<div class="space-y-5 md:mt-6 sm:py-5 max-md:mb-10">
					<h1 class="Exo-Bold text-3xl">
						{m.homepage_section_6_Knowledge()}
					</h1>
					<p class="Archivo text-lg">
						{m.homepage_section_6_Access_our()}
					</p>
					<button class="min-w-min btn-invisible max-md:hidden">
						<a
							class="btn-invisible Archivo bg-[#FFFFFF] block w-full rounded-xl px-6 py-4 text-[#FFFFFF] sm:w-auto z-10 relative"
							href="#"
						>
							{m.button_access()}
						</a>
					</button>
				</div>
			</div>

			<div class="lg:flex lg:flex-col sm:rounded-xl max-xs:px-0 relative top-0 -mb-10">
				<div class="bg-[#454AB0] max-h-[265px]">
					<div class=" px-1 p-5 h-1/2 max-sm:px-10 relative -top-12 size-full">
						{#if LottiePlayer}
							<LottiePlayer
								src={animationData}
								autoplay={true}
								loop={true}
								renderer="svg"
								background="transparent"
								{controlsLayout}
							/>
						{/if}
					</div>
				</div>

				<!-- <div bind:this={animationContainer} class=" lg:absolute -top-14" /> -->
				<!-- <div class="divider relative h-full"></div> -->
				<div class="bg-[#F1F1F9] py-8 px-5 w-full h-1/2 mt-auto max-sm:p-10 relative -top-12">
					<h1 class="Exo-Bold text-4xl bottom-0 max-md:px-3 max-md:mt-3 max-md:mx-auto">
						{m.homepage_section_6_Resources()}
					</h1>
					<p class="Archivo text-lg mt-6 max-md:px-3 max-md:mb-3 max-md:mx-auto">
						{m.homepage_section_6_Discover_the_resources()}
					</p>
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- Placeholder while translations are loading -->
	<div>Loading...</div>
{/if}

<style>
	.btn-access::after {
		content: url('$lib/assets/svg/arrow_right.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}

	.btn-invisible {
		cursor: default; /* Set cursor to default */
	}

	/* @media screen and (min-width: 760px) and (max-width: 1023px) {
		.resources_section {
			margin-bottom: 500px;
		}
	} */
</style>
