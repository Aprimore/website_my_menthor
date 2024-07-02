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
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import '@fontsource-variable/archivo';
	import '@fontsource-variable/exo';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import og_image from '../lib/assets/images/og_image.webp';

	let gtmLoaded = false;
	let isMobile = false;

	// Function to load Google Tag Manager script
	function loadGTM() {
		if (gtmLoaded) return;
		gtmLoaded = true;
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WSRLN9FV';
		script.async = true;
		document.head.appendChild(script);

		// return new Promise((resolve, reject) => {
		// 	(function (w, d, s, l, i) {
		// 		w[l] = w[l] || [];
		// 		w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
		// 		var f = d.getElementsByTagName(s)[0],
		// 			j = d.createElement(s),
		// 			dl = l != 'dataLayer' ? '&l=' + l : '';
		// 		j.async = true;
		// 		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		// 		j.onload = resolve;
		// 		j.onerror = reject;
		// 		f.parentNode.insertBefore(j, f);
		// 	})(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
		// });
	}

	function loadGtag() {
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZX7H2KPXNZ';
		script.async = true;
		document.head.appendChild(script);
		script.onload = () => {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-ZX7H2KPXNZ');
		};
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
		window.addEventListener('cookieconsent:accept', () => {
			loadGTM();
			loadGtag();
		});
	});

	onMount(() => {
		// Check if the code is running in the browser
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			// Detect if the device is mobile
			isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

			// Run all async tasks in parallel
			Promise.all([
				loadGTM(),
				isMobile ? Promise.resolve() : initializeParaglide() // Skip ParaglideJS on mobile
			])
				.then(() => {
					console.log('Scripts loaded and initializations complete');
				})
				.catch((error) => {
					console.error('An error occurred while loading scripts', error);
				});
		}
	});
</script>

<svelte:head>
	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-WSRLN9FV');
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};

		
	</script>

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-ZX7H2KPXNZ"
		async
	></script>
	<script type="text/partytown" async>
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-ZX7H2KPXNZ');
	</script>

	<!-- Partytown Integration for ParaglideJS -->
	{@html '<script async>' + partytownSnippet() + '</script>'}
	<script type="text/partytown" src="/src/lib/i18n.js" async></script>
	<script type="text/partytown" async>
		// Initialize ParaglideJS
		const initializeParaglideJS = () => {
			ParaglideJS.init({ i18n });
		};
		// Run initialization
		initializeParaglideJS();
	</script>

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
	<CookieConsent />
	{#if !isMobile || ParaglideJS}
		<ParaglideJS {i18n}>
			<Navbar />
			<Navbar2 />
			<slot />
			<Footer />
		</ParaglideJS>
	{:else}
		<div>Loading...</div>
	{/if}
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
</style>
