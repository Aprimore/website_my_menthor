<script lang="ts">
	import { fade } from 'svelte/transition';
	// import { page } from '$app/stores';
	import {
		header_hero_1_webp,
		header_hero_2_webp,
		header_hero_3_webp,
		header_hero_webp
	} from '$lib';
	import * as m from '$paraglide/messages';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
</script>

<svelte:head>
	<link rel="preload" as="image" href={header_hero_1_webp} />
	<link rel="preload" as="image" href={header_hero_2_webp} />
	<link rel="preload" as="image" href={header_hero_3_webp} />
	<link rel="preload" as="image" href={header_hero_webp} />
</svelte:head>

<header in:fade={{ delay: 0, duration: 150, easing: cubicInOut }} class="hero-section">
	<div class="mx-auto px-4 flex h-[510px] max-sm:h-[600px] items-center relative">
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

			<img
				srcset="
				{header_hero_1_webp} 300w,
				{header_hero_2_webp} 700w,
				{header_hero_3_webp} 900w,
				{header_hero_webp} 1200w
				"
				sizes="(max-width: 500px) 100vw, 70vw"
				alt="Hero Header"
				class="absolute inset-0 w-full h-full object-cover -z-10"
				fetchpriority="high"
				loading="eager"
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
