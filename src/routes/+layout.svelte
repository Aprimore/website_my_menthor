<script lang="ts">
	import { translatePath } from '$lib/i18n';
	import { availableLanguageTags } from '$paraglide/runtime';
	// import { onNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	// import ViewTransition from '$lib/components/navigation.svelte';
	// import { fade } from 'svelte/transition';
	import { getPageTitle } from '$lib/functions/pageTitle';
	// import CookieConsent from '$lib/components/CookieConsent.svelte';
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
	console.log(sourceLanguageTag);

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

	// let isCookieConsentAccepted = false;
	// let showPopup = false;

	// function handleCookieConsent() {
	// 	isCookieConsentAccepted = true;
	// 	showPopup = true;
	// }

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

	// Handling cookie consent
	// let cookieConsentAccepted = false;

	// function handleCookieConsent() {
	// 	cookieConsentAccepted = true;
	// 	loadGTM();
	// }

	// let pagePath = $page.url.pathname;
	// $: pagePath = $page.url.pathname;

	// import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	// import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	// import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	// import featuredImageSrc from '$lib/assets/home/home.jpg';
	// import og_image from '$lib/assets/images/og_image.webp';
	// import website from '$lib/config/website';
	// import SEO from '$lib/components/SEO/index.svelte';

	// const isPortuguese = pagePath.startsWith('/pt-BR/');
	// console.log(isPortuguese);

	// const { author, siteUrl } = website;
	// let title = isPortuguese ? 'Início' : 'Home';
	// const breadcrumbs = [
	// 	{
	// 		name: isPortuguese ? 'Início' : 'Home',
	// 		slug: ''
	// 	}
	// ];

	// let metadescription = isPortuguese
	// 	? 'My Menthor é uma plataforma SaaS de Arquitetura Empresarial que aprimora a visibilidade dos processos, integrando estratégia, pessoas e tecnologia para melhorar o desempenho e a maturidade organizacional'
	// 	: 'My Menthor is a Business Architecture SaaS platform that enhances process visibility by integrating strategy, people, and technology to improve organizational performance and maturity.';
	// const featuredImageAlt = isPortuguese
	// 	? 'Imagem de uma pessoa vetorizada, o logo do site da My Menthor'
	// 	: 'picture of a vectorized person, the logo for My Menthor website';
	// const featuredImage = {
	// 	url: featuredImageSrc,
	// 	alt: featuredImageAlt,
	// 	width: 672,
	// 	height: 448,
	// 	caption: 'Home page'
	// };
	// const ogImage = {
	// 	url: ogImageSrc,
	// 	alt: featuredImageAlt
	// };
	// const ogSquareImage = {
	// 	url: ogSquareImageSrc,
	// 	alt: featuredImageAlt
	// };

	// const twitterImage = {
	// 	url: twitterImageSrc,
	// 	alt: featuredImageAlt
	// };
	// const entityMeta = {
	// 	url: `${siteUrl}/`,
	// 	faviconWidth: 512,
	// 	faviconHeight: 512,
	// 	caption: author
	// };
	// const seoProps = {
	// 	title,
	// 	slug: '',
	// 	entityMeta,
	// 	datePublished: '2024-05-01T14:19:33.000+0100',
	// 	lastUpdated: '2024-09-05T14:19:33.000+0100',
	// 	breadcrumbs,
	// 	metadescription,
	// 	article: false,
	// 	featuredImage,
	// 	ogImage,
	// 	ogSquareImage,
	// 	twitterImage
	// };
</script>

<!-- <SEO {...seoProps} /> -->
<!-- <svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head> -->
<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={translatePath($page.url.pathname, lang)} />
	{/each}
</svelte:head>
{#key lang}
	<!-- <ViewTransition /> -->
	<!-- {#if !isLoading} -->
	<Navbar />
	<Navbar2 />
	<main>
		<slot />
	</main>
	<Footer />
	<!-- <CookieConsent on:consentAccepted={handleCookieConsent} /> -->
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
