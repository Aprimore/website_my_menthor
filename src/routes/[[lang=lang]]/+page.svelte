<script lang="ts">
	// import FormLanding from '$lib/components/Home/FormLanding.svelte';
	import Hero from '$lib/components/Home/Hero.svelte';
	import PopupForm from '$lib/components/Home/PopupForm.svelte';
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section5 from '$lib/components/Home/Section5.svelte';
	// import Section6 from '$lib/components/Home/Section6.svelte';
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
	// import { getPageTitle } from '$lib/functions/pageTitle.js';
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

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	// ----=----=----=----=----= SEO ----=----=----=----=----=
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	// import og_image from '$lib/assets/images/og_image.webp';
	import website from '$lib/config/website';
	import SEO from '$lib/components/SEO/index.svelte';

	const isPortuguese = pagePath.startsWith('/pt-BR/');
	const { author, siteUrl } = website;
	let title = isPortuguese ? 'Início' : 'Home';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Início' : 'Home',
			slug: ''
		}
	];
	let metadescription = isPortuguese
		? 'My Menthor é uma plataforma SaaS de Arquitetura Empresarial que aprimora a visibilidade dos processos, integrando estratégia, pessoas e tecnologia para melhorar o desempenho e a maturidade organizacional'
		: 'My Menthor is a Business Architecture SaaS platform that enhances process visibility by integrating strategy, people, and technology to improve organizational performance and maturity.';
	const featuredImageAlt = isPortuguese
		? 'Imagem de uma pessoa vetorizada, o logo do site da My Menthor'
		: 'picture of a vectorized person, the logo for My Menthor website';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};

	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2024-05-01T14:19:33.000+0100',
		lastUpdated: '2024-09-05T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		article: false,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
</script>

<SEO {...seoProps} />
<div in:fade={{ delay: 0, duration: 150, easing: cubicInOut }}>
	{#if isOpen && consentVisible}
		<div in:fade={{ duration: 200, delay: 1000 }}>
			<PopupForm {isOpen} {consentVisible} {form} />
		</div>
	{/if}
	<Hero />
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section5 />
	<div class="bg-[#F1F1F9] h-20"></div>
</div>
