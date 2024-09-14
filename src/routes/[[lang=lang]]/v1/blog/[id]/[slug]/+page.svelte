<script lang="ts">
	import { post } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let data;

	onMount(() => {
		if (data && data.post) {
			document.title = `${data.post.title} | My Menthor` ?? 'Blog Post | My Menthor';
		}
	});

	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	const { author, siteUrl } = website;
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];

	let metadescription =
		'My Menthor is a Business Architecture SaaS platform that enhances process visibility by integrating strategy, people, and technology to improve organizational performance and maturity.';
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
		slug: '',
		entityMeta,
		datePublished: '2024-05-08T14:19:33.000+0100',
		lastUpdated: '2024-09-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription
		// featuredImage,
		// ogImage,
		// ogSquareImage,
		// twitterImage
	};
</script>

<!-- <!-- <SEO {...seoProps} /> --> -->
<section
	in:fade={{ delay: 0, duration: 150, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}
	class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo"
>
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg"
	>
		<div class="max-lg:p-5 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			{#if data.post}
				<article class="prose lg:prose-xl">
					<h1 class="text-4xl font-bold mb-8">{data.post.title}</h1>
					{#if data.post.featuredImage?.node?.sourceUrl}
						<img
							src={data.post.featuredImage.node.sourceUrl}
							alt={data.post.title}
							class="mb-4 rounded-lg shadow-lg"
						/>
					{/if}
					<div class="text-gray-600 mb-4">
						<p>{new Date(data.post.date).toLocaleDateString()}</p>
					</div>
					<div class="">
						<article class="prose lg:prose-xl">
							{@html data.post.content}
						</article>
					</div>
				</article>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
</section>
