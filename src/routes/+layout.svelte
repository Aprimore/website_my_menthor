<script lang="ts">
	import { page } from '$app/stores';
	// import CookieConsent from '$lib/components/CookieConsent.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	// import { getPageTitle } from '$lib/functions/pageTitle';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import { getPageTitle } from '$lib/functions/pageTitle';
	import { i18n } from '$lib/i18n.js';
	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import '@fontsource-variable/archivo';
	import '@fontsource-variable/exo';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import og_image from '../lib/assets/images/og_image.webp';
	import LoadingSpinner from './../lib/components/LoadingSpinner.svelte';

	// let isLoading = true;
	// onMount(async () => {
	// 	isLoading = false;
	// });

	// Initialize isMobile
	// let isMobile = false;
	// onMount(() => {
	// 	// Check if the code is running in the browser
	// 	if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
	// 		// Detect if the device is mobile
	// 		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	// 		// Run all async tasks in parallel
	// 		Promise.all([isMobile ? Promise.resolve() : initializeParaglide()])
	// 			.then(() => {
	// 				console.log('.');
	// 			})
	// 			.catch((error) => {
	// 				console.error('An error occurred while loading non-essential scripts', error);
	// 			});
	// 	}
	// });

	// initializeParaglide();

	export function loadGTM() {
		return new Promise((resolve, reject) => {
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s) as HTMLScriptElement,
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				j.onload = resolve;
				j.onerror = reject;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
		});
	}

	// Handling cookie consent
	// let cookieConsentAccepted = false;

	// function handleCookieConsent() {
	// 	cookieConsentAccepted = true;
	// 	loadGTM();
	// }

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
</script>

<svelte:head>
	<!-- <title>{$page.data.post?.title || 'My Menthor | Home'}</title> -->
	<title>{getPageTitle(pagePath)}</title>
	<!-- {#if pagePath && pagePath !== '/'}
	{/if} -->
	<link rel="canonical" href={SITE_URL + pagePath} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<main class="relative">
	<!-- {#if isLoading} -->
	<!-- <div class="shell"> -->
	<!-- <div class=""></div> -->
	<!-- <p>...</p> -->
	<!-- <LoadingSpinner /> -->
	<!-- </div> -->
	<!-- {:else} -->
	<!-- Conteúdo real do seu site -->
	<ParaglideJS {i18n}>
		<Navbar />
		<Navbar2 />
		<slot />
		<Footer />
	</ParaglideJS>
	<CookieConsent />
	<!-- {/if} -->
</main>

<style>
	/* Zoom responsiveness */
	@media only screen and (min-width: 600px) {
		:global(html) {
			zoom: 0.8;
		}
	}

	@media only screen and (min-width: 1000x) {
		:global(html) {
			zoom: 0.9;
		}
	}

	@media only screen and (min-width: 1400px) {
		:global(html) {
			zoom: 1;
		}
	}
	:global(.shell) {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	:global(html) {
		font-family: 'Exo Variable, sans-serif;';
	}

	/* Specific font classes */
	:global(.Archivo) {
		font-family: 'Archivo Variable', sans-serif;
	}

	:global(.Exo) {
		font-family: 'Exo Variable', sans-serif;
	}

	:global(.Exo-Regular) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 400; /* Set font weight */
	}

	:global(.Exo-Semibold) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 600; /* Set font weight */
	}

	:global(.Exo-Bold) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 700; /* Set font weight */
	}
</style>
