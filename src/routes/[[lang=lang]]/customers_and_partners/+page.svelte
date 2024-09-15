<script lang="ts">
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import og_image from '$lib/assets/images/og_image.webp';
	import Section1 from '$lib/components/ClientesParceiros/Section1.svelte';
	import Section2 from '$lib/components/ClientesParceiros/Section2.svelte';
	import Section3 from '$lib/components/ClientesParceiros/Section3.svelte';
	import Section4 from '$lib/components/ClientesParceiros/Section4.svelte';
	// import type { PageData } from './$types';
	// export let data: PageData;
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import website from '$lib/config/website';
	import SEO from '$lib/components/SEO/index.svelte';
	const { author, siteUrl } = website;
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-BR/');
	let title = isPortuguese ? 'Clientes e Parceiros' : 'Customers and Partners';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Clientes e Parceiros' : 'Customers and Partners',
			slug: pagePath.substring(1)
		}
	];

	let metadescription = isPortuguese
		? 'Entre em contato para saber mais sobre nosso programa de parcerias e descubra como podemos alcançar resultados excepcionais juntos. Estamos comprometidos com o sucesso contínuo de nossos clientes e parceiros, cultivando relacionamentos de longo prazo focados em resultados.'
		: 'Get in touch to learn about our partnership program and find out how we can achieve exceptional results together. We are committed to the ongoing success of our customers and partners, cultivating long-term relationships focused on results.';
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
		datePublished: '2024-05-07T03:19:33.000+0100',
		lastUpdated: new Date(),
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
<!-- <svelte:head>
	<link rel="canonical" href={siteUrl} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta name="description" content={metadescription} />
	<meta property="og:description" content={metadescription} />
	<meta property="og:image" content={ogImageSrc} />
	<meta property="og:image:width" content="672" />
	<meta property="og:image:height" content="448" />
	<meta name="twitter:image" content={twitterImageSrc} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metadescription} />
</svelte:head> -->
<div in:fade={{ delay: 0, duration: 150, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}>
	<Section1 />
	<Section2 />
	<!-- <Section3 /> -->
	<Section4 />
</div>
