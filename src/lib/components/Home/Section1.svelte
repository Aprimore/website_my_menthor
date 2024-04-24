<script lang="ts">
	import {
		arrow_right_svg,
		linha_h_4_svg,
		linha_v_1_svg,
		linha_v_2_svg,
		the_platform_png
	} from '$lib';

	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	let animationContainer: HTMLElement;

	// onMount(() => {
	// 	lottie.loadAnimation({
	// 		container: animationContainer,
	// 		path: 'https://lottie.host/d68b6649-f8af-499b-a586-287e2e332e2b/J9yfWB9kr4.json'
	// 	});
	// });
</script>

<section class="max-w-screen-xl relative rounded-lg mx-auto my-2">
	<div class="py-20 relative">
		<div class="relative">
			<div
				class="card1 pr-20 w-[695px] h-[588px] flex justify-center bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl"
			>
				<div
					class=" max-w-[30rem]
				 pt-5 text-gray-900 rounded-lg mt-10 ml-10"
				>
					<span class="absolute"><img src={linha_v_1_svg} alt="" /></span>
					<h3 class="ml-6 mb-2 text-lg tracking-tight text-gray-900 Archivo">
						It brings <strong>effectiveness</strong> to
						<strong> the deployment and execution of the strategy </strong> , organizational alignment
						and ​visibility of processes for various purposes ​(compliance, risks, automation, etc.)
					</h3>
					<div>
						<img src={the_platform_png} alt="lottie animation" />
					</div>
				</div>
			</div>
			<div
				class="card1 w-[816px] h-[447px] flex absolute top-[70px] left-[605px] flex-start bg-[#F1F1F9] border border-gray-300 rounded-xl shadow-xl"
			>
				<div class=" max-w-2xl p-6 text-gray-900 rounded-lg mt-12 ml-12">
					<h1 class="Exo text-4xl font-bold relative">
						The platform
						<span><img src={linha_h_4_svg} class="z-10 absolute" alt="linha" /></span>
					</h1>

					<h3 class="mt-10 mb-2 text-gray-900 Archivo text-lg">
						<strong> My Menthor </strong> is a
						<strong> SaaS Business Architecture platform </strong>
						that <strong> helps to unfold the company's strategy </strong> into a vision oriented by
						end-to-end, providing visibility of processes and aligning organizational components to
						<strong> achieve business objectives </strong>.
					</h3>

					<div class="mt-8 flex flex-wrap gap-4">
						<a
							class="btn-demo block w-full rounded-xl px-10 py-4 text-lg font-medium bg-[#8abb3f] text-white focus:ring sm:w-auto z-10 relative"
							href="#"
						>
							Learn More
							<img
								src={arrow_right_svg}
								class="z-10 absolute right-5 bottom-[24px] size-3"
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
