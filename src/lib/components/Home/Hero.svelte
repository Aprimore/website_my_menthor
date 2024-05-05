<script lang="ts">
	import { page } from '$app/stores';
	import { arrow_right_svg, header_hero_webp, linha_h_amarela4_svg } from '$lib';
	import * as m from '$paraglide/messages';
</script>

<!-- <span>{$page.url.pathname}</span> -->

<!-- <button on:click={() => setLanguageTag('en')}> ENGLISH</button>
<button on:click={() => setLanguageTag('pt-br')}> PORTUGUES</button> -->

<header class="hero-section">
	<div class="mx-auto px-4 flex h-[510px] items-center relative">
		<div class="mx-auto max-w-5xl text-center z-20">
			<p class="z-10 relative text-[#FCC614] text-lg Exo tracking-widest">
				{m.homepage_header_business()}
			</p>
			<h1 class="text-2xl sm:text-4xl z-10 relative text-white Exo-Bold">
				{m.homepage_header_yourcompany()}
				<span><img src={linha_h_amarela4_svg} class="z-10 sm:absolute right-0" alt="linha" /></span>
			</h1>

			<p
				class="max-w-xl mt-10 sm:text-xl/relaxed mx-auto z-10 relative mb-8 Archivo text-[#D4D4ED]"
			>
				{m.homepage_header_webhave()}
			</p>

			<button>
				<a
					class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto z-10 relative"
					href="/company#contact"
				>
					{m.button_schedule_a_demo()}
				</a>
			</button>
			<img
				src={header_hero_webp}
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
