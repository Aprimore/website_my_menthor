<script lang="ts">
	import { translatePath } from '$lib/i18n';
	import { availableLanguageTags } from '$paraglide/runtime';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import ViewTransition from '$lib/components/navigation.svelte';
	import { fade } from 'svelte/transition';
	import { getPageTitle } from '$lib/functions/pageTitle';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	// import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import '@fontsource-variable/archivo';
	import '@fontsource-variable/exo';
	import { onMount } from 'svelte';
	import '../app.postcss';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { getTextDirection } from '$lib/i18n.js';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';

	//Determine the current language from the URL. Fall back to the source language if none is specified.
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	// console.log(sourceLanguageTag);

	//Set the language tag in the Paraglide runtime.
	//This determines which language the strings are translated to.
	//You should only do this in the template, to avoid concurrent requests interfering with each other.
	$: setLanguageTag(lang);

	//Determine the text direction of the current language
	$: textDirection = getTextDirection(lang);

	//Keep the <html> lang and dir attributes in sync with the current language
	$: if (browser) {
		document.documentElement.dir = textDirection;
		document.documentElement.lang = lang;
	}

	//////////////=========================/////////////////////=================////////////

	let isCookieConsentAccepted = false;
	let showPopup = false;

	let isLoading = true;
	onMount(async () => {
		isLoading = false;
	});

	// // Initialize isMobile
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

	// Handling cookie consent
	let cookieConsentAccepted = false;

	function handleCookieConsent() {
		cookieConsentAccepted = true;
		// loadGTM();
		showPopup = true;
	}
	const baseURL = 'https://www.mymenthor.com';

	const hreflangs = [
		{ lang: 'en', url: `${baseURL}/` },
		{ lang: 'pt-BR', url: `${baseURL}/pt-BR/` }
	];
</script>

<!-- <svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head> -->
<!-- <svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={translatePath($page.url.pathname, lang)} />
	{/each}
</svelte:head> -->
<svelte:head>
	{#each hreflangs as { lang, url }}
		<link rel="alternate" hreflang={lang} href={url} />
	{/each}
</svelte:head>
{#key lang}
	<ViewTransition />
	<!-- {#if !isLoading} -->
	<Navbar />
	<Navbar2 />
	<main>
		<slot />
	</main>
	<Footer />
	<CookieConsent on:consentAccepted={handleCookieConsent} />
	<!-- {/if} -->
{/key}

<!-- <div class="app relative" in:fade={{ duration: 200, delay: 10 }}>
		<ParaglideJS {i18n}>
		</ParaglideJS>
	</div> -->

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

	/* :global(.shell) { */
	/* position: relative; */
	/* width: 100%; */
	/* height: 100vh; */
	/* display: flex; */
	/* justify-content: center; */
	/* align-items: center; */
	/* overflow: hidden; */
	/* } */

	:global(html) {
		font-family: 'Exo Variable, sans-serif;';
	}

	:global(.Archivo) {
		font-family: 'Archivo Variable', sans-serif;
	}

	:global(.Exo) {
		font-family: 'Exo Variable', sans-serif;
	}

	:global(.Exo-Regular) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 400;
	}

	:global(.Exo-Semibold) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 600;
	}

	:global(.Exo-Bold) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 700;
	}
</style>
