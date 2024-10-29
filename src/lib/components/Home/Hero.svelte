<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import * as m from '$paraglide/messages';
	import { fade } from 'svelte/transition';
</script>

<header in:fade={{ duration: 150, easing: cubicInOut }} class="hero-section banner-container">
	<div class="container mx-auto px-4 flex items-center h-[510px]">
		<div
			in:fade={{ delay: 200, duration: 150, easing: cubicInOut }}
			class="mx-auto max-w-5xl text-center"
		>
			<p class="text-[#FCC614] text-lg Exo tracking-widest">
				{@html m.homepage_header_business()}
			</p>
			<h1 class="text-2xl sm:text-3xl text-white Exo-Bold yellow-underline">
				{@html m.homepage_header_yourcompany()}
			</h1>
			<p class="max-w-xl mt-10 sm:text-xl/relaxed mx-auto mb-8 Archivo text-[#D4D4ED]">
				{@html m.homepage_header_webhave()}
			</p>
			<a
				class="btn-demo bg-[#8abb3f] inline-block rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring Exo"
				href="/company#contact"
			>
				{@html m.button_schedule_a_demo()}
			</a>
		</div>
	</div>
</header>

<style>
	.banner-container {
		background-color: #19182f;
		background: url('/header_hero.webp') no-repeat center / cover;
	}
	@media (max-width: 640px) {
		.banner-container {
			background-image: url('/header_hero_1.webp');
		}
	}
	.btn-demo::after {
		content: '';
		display: inline-block;
		width: 13px;
		height: 13px;
		background: url('$lib/assets/svg/arrow_right_2.svg') no-repeat center / contain;
		margin-left: 10px;
		vertical-align: middle;
	}
	.yellow-underline {
		background: url('$lib/assets/svg/linha_h_amarela4.svg') no-repeat bottom right / 100% auto;
		padding-bottom: 10px;
	}
</style>
