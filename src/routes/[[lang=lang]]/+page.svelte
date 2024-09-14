<script lang="ts">
	import FormLanding from '$lib/components/Home/FormLanding.svelte';
	// import Formtest from '$lib/components/Home/formtest.svelte';
	import Hero from '$lib/components/Home/Hero.svelte';
	import PopupForm from '$lib/components/Home/PopupForm.svelte';
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section5 from '$lib/components/Home/Section5.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import { cookieConsentVisible } from '$lib/stores/cookieConsent.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let form;
	let isOpen = false;
	let consentVisible = false;
	// import {
	// 	OG_IMAGE_HEIGHT,
	// 	OG_IMAGE_WIDTH,
	// 	SITE_DESCRIPTION,
	// 	SITE_TITLE,
	// 	SITE_URL
	// } from '$lib/siteConfig';
	import { page } from '$app/stores';
	import { getPageTitle } from '$lib/functions/pageTitle.js';
	onMount(() => {
		cookieConsentVisible.subscribe((value) => {
			consentVisible = !value;
			if (consentVisible) {
				// Only check localStorage in the browser
				if (typeof window !== 'undefined') {
					const popupDismissed = localStorage.getItem('popupDismissed');
					if (!popupDismissed) {
						isOpen = true;
					}
				}
			}
		});
	});

	// let pagePath = $page.url.pathname;
	// $: pagePath = $page.url.pathname;
	// const isPortuguese = pagePath.startsWith('/pt-BR/');
</script>

<!-- <SEO {...seoProps} /> -->
<svelte:head>
	<!-- Load Google Analytics script -->
	<!-- <script
		async
		src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_TRACKING_ID}`}
	></script>
	<script>
		// Initialize Google Analytics
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', import.meta.env.VITE_GA_TRACKING_ID);
	</script>
	 <title>{getPageTitle(pagePath)}</title>-->
</svelte:head>

<div in:fade={{ delay: 0, duration: 150, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}>
	<!-- <PopupForm isOpen={isLandingPage} /> -->
	<!-- <Formtest /> -->
	<!-- {#if isOpen && consentVisible}
		<div in:fade={{ duration: 200, delay: 1000 }}>
			<PopupForm {isOpen} {consentVisible} {form} />
		</div>
	{/if} -->
	<Hero />
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section5 />
	<div class="bg-[#F1F1F9] h-20"></div>
</div>
