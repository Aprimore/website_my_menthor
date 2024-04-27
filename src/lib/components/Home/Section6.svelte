<script lang="ts">
	import { arrow_right_svg, linha_h_7_svg, the_platform_png } from '$lib';

	import animationData from '$lib/assets/lotties/gif-3.json';

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
	class="w-full items-center relative rounded-lg lg:bg-[#F1F1F9] py-28 max-sm:mb-[82rem] max-md:mb-[55rem] max-lg:mb-[40rem]"
>
	<div class="lg:flex max-w-[1420px] h-[500px] mx-auto bg-white">
		<div class="max-lg:space-x-10 lg:w-1/3 md:flex lg:flex-col justify-center p-12">
			<img
				class="absolute bottom-0 h-screen/2 max-w-xs h-full max-lg:hidden"
				src={linha_h_7_svg}
				alt=""
			/>
			<div class="space-y-5 py-5 relative max-lg:mt-6">
				<h1 class="Exo text-2xl lg:text-3xl font-bold text-nowrap">My Mentor Blog</h1>
				<p class="Archivo text-lg">Explore insights and expert tips on our blog.</p>

				<button class="min-w-min">
					<a
						class="Archivo btn-access bg-[#D4D4ED] block w-full rounded-xl px-6 py-4 text-[#17193B] focus:ring sm:w-auto z-10 relative"
						href="#"
					>
						Access
					</a>
				</button>
			</div>

			<div class="space-y-5 mt-6 py-5">
				<h1 class="Exo text-2xl lg:text-3xl font-bold text-nowrap">Events and Webinars</h1>
				<p class="Archivo text-lg max-w-96">
					Take part in our events and webinars to keep up to date with our ecosystem.
				</p>
				<button class="min-w-min">
					<a
						class="Archivo btn-access bg-[#D4D4ED] block w-full rounded-xl px-6 py-4 text-[#17193B] focus:ring sm:w-auto z-10 relative"
						href="#"
					>
						Access
					</a>
				</button>
			</div>
		</div>

		<div class="max-lg:space-x-10 lg:w-1/3 md:flex lg:flex-col justify-center p-12">
			<img
				class="absolute bottom-0 h-screen/2 max-w-xs h-full max-lg:hidden"
				src={linha_h_7_svg}
				alt=""
			/>
			<div class="space-y-5 relative py-5 max-lg:mt-6" id="bottom-page">
				<h1 class="Exo text-2xl lg:text-3xl font-bold text-nowrap">My Menthor Academy</h1>
				<p class="Archivo text-lg">Train and develop skills related to Business Architecture.</p>

				<button class="min-w-min btn-invisible">
					<a
						class="Archivo bg-[#FFFFFF] block w-full rounded-xl px-6 py-4 text-[#FFFFFF] sm:w-auto z-10 relative btn-invisible"
						href="#bottom-page"
					>
						Access
					</a>
				</button>
			</div>
			<div class="space-y-5 mt-6 py-5">
				<h1 class="Exo text-2xl lg:text-3xl font-bold text-nowrap">Knowledge base</h1>
				<p class="Archivo text-lg">
					Access our knowledge base to find answers and solutions to your business challenges.
				</p>
				<button class="min-w-min btn-invisible">
					<a
						class="btn-invisible Archivo bg-[#FFFFFF] block w-full rounded-xl px-6 py-4 text-[#FFFFFF] sm:w-auto z-10 relative"
						href="#bottom-page"
					>
						Access
					</a>
				</button>
			</div>
		</div>

		<div
			class="bg-[#454AB0] lg:w-1/3 relative flex max-sm:flex-col lg:flex-col justify-center rounded-xl"
		>
			<div bind:this={animationContainer} class=" lg:absolute -top-14" />

			<div class="bg-[#F1F1F9] flex flex-col justify-center p-10 px-10 z-30 relative lg:mt-auto">
				<h1 class="Exo text-4xl font-bold bottom-0 text-nowrap">Resources</h1>
				<p class="Archivo text-lg mt-6">
					Discover the resources available to you stay updated about the best articles, events and
					knowledge about the platform.
				</p>
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
</style>
