<script lang="ts">
	import { page } from '$app/stores';
	import og_image from '$lib/assets/images/og_image.webp';
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
	import '../app.postcss';
</script>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
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

	{@html '<script>' + partytownSnippet() + '</script>'}

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-ZX7H2KPXNZ"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-ZX7H2KPXNZ');
	</script>

	<title>{$page.data.post?.title || 'My Menthor | Home'}</title>
	{#if $page.path && $page.path !== '/'}
		<link rel="canonical" href={SITE_URL + $page.path} />
	{/if}
	<!-- <link rel="canonical" href={SITE_URL} /> -->
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="My Menthor | Your company on another management level" />
	<!-- <meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} /> -->
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

{#if ParaglideJS}
	<ParaglideJS {i18n}>
		<main class="relative">
			<Navbar />
			<Navbar2 />
			<slot />
			<Footer />
		</main>
	</ParaglideJS>
{:else}
	<div>Loading...</div>
{/if}

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
