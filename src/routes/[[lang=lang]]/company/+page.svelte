<script lang="ts">
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import og_image from '$lib/assets/images/og_image.webp';
	import Section1 from '$lib/components/Empresa/Section1.svelte';
	import Section2 from '$lib/components/Empresa/Section2.svelte';
	import Section3 from '$lib/components/Empresa/Section3.svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import website from '$lib/config/website';
	import SEO from '$lib/components/SEO/index.svelte';
	const { author, siteUrl } = website;
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	const isPortuguese = pagePath.startsWith('/pt-BR/');
	// const urlSlug = pagePath.substring(1);
	let title = isPortuguese ? 'Empresa' : 'Company';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Empresa' : 'Company',
			slug: pagePath.substring(1)
		}
	];

	let metadescription = isPortuguese
		? 'A My Menthor é o resultado de mais de 20 anos de experiência em consultoria de gestão organizacional, transformados em uma Plataforma Tecnológica SaaS para a Gestão de Arquitetura Empresarial.'
		: 'My Menthor is result of over 20 years of experience in organizational management consulting transformed into a SaaS Technological Platform for Enterprise Architecture Management.';
	const featuredImageAlt = isPortuguese
		? 'Imagem de uma pessoa vetorizada, o logo do site da My Menthor'
		: 'picture of a vectorized person, the logo for My Menthor website';
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
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: pagePath.substring(1),
		entityMeta,
		datePublished: '2024-05-02T14:19:33.000+0100',
		lastUpdated: '2024-09-02T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		article: false
		// featuredImage,
		// ogImage,
		// ogSquareImage,
		// twitterImage
	};
</script>

<SEO {...seoProps} />
<div in:fade={{ delay: 0, duration: 150, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}>
	<Section1 />
	<Section2 />
	<Section3 />
</div>
