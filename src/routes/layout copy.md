<script lang="ts">
	import { page } from '$app/stores';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import { i18n } from '$lib/i18n.js';
	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import og_image from '../lib/assets/images/og_image.webp';

	// Initialize isMobile
	let isMobile = false;

	// Function to load Google Tag Manager script
	function loadGTM() {
		return new Promise((resolve, reject) => {
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				j.onload = resolve;
				j.onerror = reject;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
		});
	}

	// Function to initialize ParaglideJS
	function initializeParaglide() {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.type = 'text/partytown';
			script.src = '/src/lib/i18n.js';
			script.async = true; // Load asynchronously
			script.onload = () => {
				ParaglideJS.init({ i18n });
				resolve();
			};
			document.body.appendChild(script);
		});
	}

	onMount(() => {
		// Check if the code is running in the browser
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			// Detect if the device is mobile
			isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

			// Run all async tasks in parallel
			Promise.all([
				isMobile ? Promise.resolve() : initializeParaglide() // Skip ParaglideJS on mobile
			])
				.then(() => {
					console.log('Non-essential scripts loaded');
				})
				.catch((error) => {
					console.error('An error occurred while loading non-essential scripts', error);
				});
		}
	});

	// Handling cookie consent
	let cookieConsentAccepted = false;

	function handleCookieConsent() {
		cookieConsentAccepted = true;
		// Load essential scripts after consent
		loadGTM(); // Reload GTM scripts after consent
		initializeParaglide(); // Initialize ParaglideJS after consent
	}
</script>

<svelte:head>
	<title>{$page.data.post?.title || 'My Menthor | Home'}</title>
	{#if $page.path && $page.path !== '/'}
		<link rel="canonical" href={SITE_URL + $page.path} />
	{/if}
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
	{#if ParaglideJS}
		<ParaglideJS {i18n}>
			<Navbar />
			<Navbar2 />
			<slot />
			<Footer />
		</ParaglideJS>
	{:else}
		<div>Loading...</div>
	{/if}
	<CookieConsent bind:accepted={cookieConsentAccepted} on:accept={handleCookieConsent} />
</main>

<style>
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
