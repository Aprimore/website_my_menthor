<script lang="ts">
	import { arrow_right_svg, header_hero_png, linha_h_5_svg } from '$lib';
</script>

<header class="hero-section">
	<div class="mx-auto px-4 flex h-[510px] items-center relative">
		<div class="mx-auto max-w-5xl text-center z-20">
			<p class="z-10 relative text-[#FCC614] text-lg Exo tracking-widest">
				BUSINESS PROCESS ARCHITECTURE
			</p>
			<h1 class="text-2xl sm:text-4xl z-10 relative text-white Exo font-extrabold">
				Your company on another management level
				<span><img src={linha_h_5_svg} class="z-10 sm:absolute right-0" alt="linha" /></span>
			</h1>

			<p
				class="max-w-xl mt-10 sm:text-xl/relaxed mx-auto z-10 relative mb-8 Archivo text-[#D4D4ED]"
			>
				We have consolidated our expertise and background and developed a platform capable of taking
				companies to the next level management and boost productivity and efficiency gains.
			</p>

			<button>
				<a
					class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto z-10 relative"
					href="#"
				>
					Schedule a Demo
				</a>
			</button>
			<img
				src={header_hero_png}
				alt="Hero Header"
				class="absolute inset-0 w-full h-full object-cover"
			/>
		</div>
	</div>
</header>

<style>
	.btn-demo::after {
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style>
