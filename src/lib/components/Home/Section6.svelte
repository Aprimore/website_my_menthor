<script lang="ts">
	import { arrow_right_svg, linha_h_cinza_svg } from '$lib';
	import animationData from '$lib/assets/lotties/gif-3.json';
	import * as m from '$paraglide/messages';

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

<section
	class="resources_section w-full items-center relative sm:rounded-lg lg:bg-[#F1F1F9] sm:py-14 md:py-28"
>
	<div class="lg:flex md:max-w-[1420px] md:h-[500px] mx-auto bg-white">
		<div
			class="bg-[#454AB0] order-2 lg:w-1/3 relative flex max-sm:flex-col lg:flex-col justify-center sm:rounded-xl"
		>
			<div bind:this={animationContainer} class=" lg:absolute -top-14" />

			<div
				class="bg-[#F1F1F9] flex flex-col justify-center max-sm:p-3 p-10 px-10 z-30 relative lg:mt-auto"
			>
				<h1 class="Exo-Bold text-4xl bottom-0 text-nowrap">
					{m.homepage_section_6_Resources()}
				</h1>
				<p class="Archivo max-w-96 text-lg mt-6">
					{m.homepage_section_6_Discover_the_resources()}
				</p>
			</div>
		</div>
		<div
			class="md:space-x-10 lg:space-x-0 lg:w-1/3 sm:flex lg:flex-col justify-center sm:p-3 lg:p-12 p-3"
		>
			<img
				class="absolute bottom-0 h-screen/2 max-w-xs h-full max-lg:hidden"
				src={linha_h_cinza_svg}
				alt=""
			/>
			<div class="space-y-5 py-5 relative md:mt-6 lg:mt-0">
				<h1 class="Exo-Bold text-3xl text-nowrap">
					{m.homepage_section_6_My_menthor()}
				</h1>
				<p class="Archivo max-w-96 text-lg">{m.homepage_section_6_Explore()}</p>

				<button class="min-w-min">
					<a
						class="Archivo btn-access bg-[#D4D4ED] block w-full rounded-xl px-6 py-4 text-[#17193B] focus:ring sm:w-auto z-10 relative"
						href="http://mymenthor.com/blog"
						target="_blank"
					>
						{m.button_access()}
					</a>
				</button>
			</div>

			<div class="space-y-5 md:mt-6 sm:py-5 max-sm:mt-5">
				<h1 class="Exo-Bold text-3xl text-nowrap">
					{m.homepage_section_6_Events()}
				</h1>
				<p class="Archivo text-lg max-w-96">
					{m.homepage_section_6_Take_part()}
				</p>
				<button class="min-w-min">
					<a
						class="Archivo btn-access bg-[#D4D4ED] block w-full rounded-xl px-6 py-4 text-[#17193B] focus:ring sm:w-auto z-10 relative"
						href="http://mymenthor.com/blog"
						target="_blank"
					>
						{m.button_access()}
					</a>
				</button>
			</div>
		</div>

		<div
			class="md:space-x-10 lg:space-x-0 lg:w-1/3 sm:flex lg:flex-col justify-center sm:p-3 lg:p-12 p-3 max-sm:mt-5"
		>
			<img
				class="absolute bottom-0 h-screen/2 max-w-xs h-full max-lg:hidden"
				src={linha_h_cinza_svg}
				alt=""
			/>
			<div class="space-y-5 relative sm:py-5 md:mt-6 lg:mt-0 max-md:mb-10" id="bottom-page">
				<h1 class="Exo-Bold text-3xl text-nowrap">
					{m.homepage_section_6_My_Menthor_Academy()}
				</h1>
				<p class="Archivo max-w-96 text-lg">{m.homepage_section_6_Develop()}</p>

				<button class="min-w-min btn-invisible max-md:hidden">
					<a
						class="Archivo bg-[#FFFFFF] block w-full rounded-xl px-6 py-4 text-[#FFFFFF] sm:w-auto z-10 relative btn-invisible"
						href="#bottom-page"
					>
						{m.button_access()}
					</a>
				</button>
			</div>
			<div class="space-y-5 md:mt-6 sm:py-5 max-md:mb-10">
				<h1 class="Exo-Bold text-3xl text-nowrap">
					{m.homepage_section_6_Knowledge()}
				</h1>
				<p class="Archivo max-w-96 text-lg">
					{m.homepage_section_6_Access_our()}
				</p>
				<button class="min-w-min btn-invisible max-md:hidden">
					<a
						class="btn-invisible Archivo bg-[#FFFFFF] block w-full rounded-xl px-6 py-4 text-[#FFFFFF] sm:w-auto z-10 relative"
						href="#bottom-page"
					>
						{m.button_access()}
					</a>
				</button>
			</div>
		</div>
	</div>
</section>

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

	@media screen and (min-width: 760px) and (max-width: 1023px) {
		.resources_section {
			margin-bottom: 500px;
		}
	}
</style>
