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
	<div class="h-[1000px]">
		<div
			in:fade={{ delay: 200, duration: 150, easing: cubicInOut }}
			class=""
		>
			<p class=" ">
				{@html m.homepage_header_business()}
			</p>

			<h1 class="">
				{@html m.homepage_header_yourcompany()}
			</h1>

			<p class="">
				{@html m.homepage_header_webhave()}
			</p>

			<button class="">
				<a
					class=""
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
