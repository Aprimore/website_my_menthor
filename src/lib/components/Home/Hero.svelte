<script lang="ts">
	// import header_hero_webp from '$lib/assets/images/header_hero.webp?enhanced';
	// import header_hero_1_webp from '$lib/assets/images/header_hero_1.webp?enhanced';
	// import header_hero_2_webp from '$lib/assets/images/header_hero_2.webp?enhanced';
	// import header_hero_3_webp from '$lib/assets/images/header_hero_3.webp?enhanced';
	// import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import * as m from '$paraglide/messages';
	import { fade } from 'svelte/transition';
	// import {
	// 	header_hero_1_webp,
	// 	header_hero_2_webp,
	// 	header_hero_3_webp,
	// 	header_hero_webp
	// } from '$lib';
	import { header_hero_webp } from '$lib';
</script>

<!-- <svelte:head>
	<link rel="preload" as="image" href={header_hero_1_webp} />
	<link rel="preload" as="image" href={header_hero_2_webp} />
	<link rel="preload" as="image" href={header_hero_3_webp} />
	<link rel="preload" as="image" href={header_hero_webp} />
</svelte:head> -->

<header in:fade={{ delay: 0, duration: 150, easing: cubicInOut }} class="hero-section bg-[#19182F]">
	<div class="mx-auto px-4 flex h-[510px] max-sm:h-[400px] items-center relative">
		<div
			in:fade={{ delay: 200, duration: 150, easing: cubicInOut }}
			class="mx-auto max-w-5xl text-center z-20"
		>
			<p class=" text-[#FCC614] text-lg Exo tracking-widest">
				{@html m.homepage_header_business()}
			</p>

			<h1 class="text-2xl sm:text-3xl text-white Exo-Bold yellow-underline">
				{@html m.homepage_header_yourcompany()}
			</h1>

			<p class="max-w-xl mt-10 sm:text-xl/relaxed mx-auto mb-8 Archivo text-[#D4D4ED]">
				{@html m.homepage_header_webhave()}
			</p>

			<button class="Exo">
				<a
					class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto"
					href="/company#contact"
				>
					{@html m.button_schedule_a_demo()}
				</a>
			</button>

			<!-- srcset="
				{header_hero_1_webp} 300w,
				{header_hero_2_webp} 700w,
				{header_hero_3_webp} 900w,
				{header_hero_webp} 1200w,
				" -->
			<img
				src={header_hero_webp}
				alt="Hero Header"
				class="absolute inset-0 w-full h-full object-cover -z-10"
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

	h1.yellow-underline {
		content: '';
		background-image: url('$lib/assets/svg/linha_h_amarela4.svg');
		background-repeat: no-repeat;
		background-position: bottom right;
		padding-bottom: 10px;
	}
	@media (max-width: 709px) {
		h1.yellow-underline {
			background-size: 100% auto;
		}
	}
</style>
