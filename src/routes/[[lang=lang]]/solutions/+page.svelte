<script lang="ts">
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import og_image from '$lib/assets/images/og_image.webp';
	import Section1 from '$lib/components/Solucoes/Section1.svelte';
	import Section2 from '$lib/components/Solucoes/Section2.svelte';
	import Section3 from '$lib/components/Solucoes/Section3.svelte';
	import Section4 from '$lib/components/Solucoes/Section4.svelte';
	import Section5 from '$lib/components/Solucoes/Section5.svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	const { author, siteUrl } = website;
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-BR/');
	let title = isPortuguese ? 'Soluções' : 'Solutions';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Soluções' : 'Solutions',
			slug: pagePath.substring(1)
		}
	];

	let metadescription = isPortuguese
		? 'Descubra o portfólio abrangente de serviços da My Menthor, projetado para garantir o sucesso do cliente em todas as etapas da implementação. Desde a configuração e a implantação da estratégia até a gestão de processos e maturidade organizacional, oferecemos consultoria personalizada, mentoria e suporte contínuo para ajudar as empresas a alcançar seus objetivos e maximizar o valor da plataforma.'
		: 'Discover My Menthor’s comprehensive portfolio of services, designed to ensure customer success at every stage of implementation. From setup and strategy deployment to process management and organizational maturity, we provide tailored consulting, mentoring, and ongoing support to help businesses achieve their goals and maximize platform value.';
	const featuredImageAlt = 'picture of a vectorized person, the logo for My Menthor website';
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
		datePublished: '2024-05-06T14:19:33.000+0100',
		lastUpdated: '2024-09-09T14:19:33.000+0100',
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
<div in:fade={{ delay: 0, duration: 150, easing: cubicInOut }}>
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section5 />
</div>
