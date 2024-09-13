<script lang="ts">
	import { i18n } from '$lib/i18n.js';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import ViewTransition from '$lib/components/navigation.svelte';
	import { fade } from 'svelte/transition';
	// import { getPageTitle } from '$lib/functions/pageTitle';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import { getPageTitle } from '$lib/functions/pageTitle';

	import '@fontsource-variable/archivo';
	import '@fontsource-variable/exo';

	import { onMount } from 'svelte';
	import '../app.postcss';
	import og_image from '../lib/assets/images/og_image.webp';

	let isCookieConsentAccepted = false;
	let showPopup = false;

	function handleCookieConsent() {
		isCookieConsentAccepted = true;
		showPopup = true;
	}

	let isLoading = true;
	onMount(async () => {
		isLoading = false;
	});

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
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
</script>

<!-- <svelte:head>
	
</svelte:head> -->

<ViewTransition />
{#if !isLoading}
	<div class="app relative" in:fade={{ duration: 200, delay: 10 }}>
		<!-- {#if isLoading} -->
		<!-- <div class="shell"> -->
		<!-- <div class=""></div> -->
		<!-- <p>...</p> -->
		<!-- </div> -->
		<!-- Conteúdo real do seu site -->
		<ParaglideJS {i18n}>
			<Navbar />
			<Navbar2 />
			<main>
				<slot />
			</main>
			<Footer />
			<CookieConsent on:consentAccepted={handleCookieConsent} />
		</ParaglideJS>
	</div>
{/if}

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
