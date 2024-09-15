<script lang="ts">
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import og_image from '$lib/assets/images/og_image.webp';
	import LoadingSkeleton from '$lib/components/LoadingSkeleton.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let posts = [];

	$: {
		if (data.streamed.lazyCritical) {
			posts = data.streamed.lazyCritical;
		}
	}
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	const { author, siteUrl } = website;
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-BR/');
	let title = 'Blog';
	const breadcrumbs = [
		{
			name: 'Blog',
			slug: pagePath.substring(1)
		}
	];

	let metadescription = isPortuguese
		? 'O Blog da My Menthor traz mais de 20 anos de experiência em consultoria de gestão organizacional, compartilhando insights e estratégias sobre Gestão de Arquitetura Empresarial. Explore artigos sobre melhores práticas, tendências do setor e como aproveitar plataformas SaaS para impulsionar o sucesso empresarial.'
		: 'The My Menthor Blog brings over 20 years of expertise in organizational management consulting, sharing insights and strategies on Enterprise Architecture Management. Explore articles on best practices, industry trends, and how to leverage SaaS platforms to drive business success.';
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
		datePublished: '2024-05-07T14:19:33.000+0100',
		lastUpdated: '2024-09-08T14:19:33.000+0100',
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

<section
	in:fade={{ delay: 0, duration: 150, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}
	class="blog-list sm:bg-[#F1F1F9] w-full relative rounded-lg max-sm:p-2 py-5 Exo"
>
	<div class="max-sm:bg-[#F1F1F9] max-w-screen-2xl mx-auto flex-col lg:flex-row rounded-lg p-4">
		{#await data.streamed.lazyCritical}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
				<LoadingSkeleton />
				<LoadingSkeleton />
				<LoadingSkeleton />
				<LoadingSkeleton />
			</div>
		{:then posts}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
				{#each posts as post}
					<a
						href={`/v1/blog/${post.databaseId}/${post.slug}`}
						class="border rounded-lg overflow-hidden hover:shadow-lg"
					>
						{#if post.featuredImage?.node?.sourceUrl}
							<img
								src={post.featuredImage.node.sourceUrl}
								alt={post.title}
								class="w-full h-52 object-cover"
							/>
						{:else}
							<div class="h-52 bg-gray-200"></div>
						{/if}
						<div class="p-4 flex flex-col justify-between">
							<div class="min-h-24">
								<h2 class="text-xl font-semibold mb-2 line-clamp-3">
									{post.title}
								</h2>
							</div>
							<div class="mt-auto">
								<p class="text-gray-600">
									{new Date(post.date).toLocaleDateString()}
								</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{:catch error}
			<p>Error: {error.message}</p>
		{/await}
	</div>
</section>
