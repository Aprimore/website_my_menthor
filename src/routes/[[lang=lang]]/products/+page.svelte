<script lang="ts">
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import og_image from '$lib/assets/images/og_image.webp';
	import Section1 from '$lib/components/Produtos/Section1.svelte';
	import Section2 from '$lib/components/Produtos/Section2.svelte';
	import Section3 from '$lib/components/Produtos/Section3.svelte';
	import Section4 from '$lib/components/Produtos/Section4.svelte';
	import Section5 from '$lib/components/Produtos/Section5.svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	const { author, siteUrl } = website;
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-BR/');

	let title = isPortuguese ? 'Produtos' : 'Products';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Produtos' : 'Products',
			slug: pagePath.substring(1)
		}
	];

	let metadescription = isPortuguese
		? 'A My Menthor ajuda a mapear, analisar, melhorar e gerenciar componentes organizacionais a partir de uma perspectiva de cima para baixo ou de baixo para cima, permitindo uma compreensão abrangente da organização e uma mudança sustentável.'
		: 'My Menthor helps map, analyze, improve, and manage organizational components from a top-down or bottom-up perspective, allowing for a comprehensive understanding of the organization and sustainable change.';
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
		datePublished: '2024-05-04T14:19:33.000+0100',
		lastUpdated: '2024-09-05T14:19:33.000+0100',
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
<svelte:head>
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
</svelte:head>
<div in:fade={{ delay: 0, duration: 150, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}>
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section5 />
</div>

<!-- <style>

</style> -->
