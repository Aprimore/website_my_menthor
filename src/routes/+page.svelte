<script lang="ts">
	import og_image from '$lib/assets/images/og_image.webp';
	import FormLanding from '$lib/components/Home/FormLanding.svelte';
	// import Formtest from '$lib/components/Home/formtest.svelte';
	import Hero from '$lib/components/Home/Hero.svelte';
	import PopupForm from '$lib/components/Home/PopupForm.svelte';
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section5 from '$lib/components/Home/Section5.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import { cookieConsentVisible } from '$lib/stores/cookieConsent.js';
	import { onMount } from 'svelte';
	// import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	export let form;
	let isOpen = false;
	let consentVisible = false;
	// export let url;
	// export let slug;
	// export let params;
	// console.log(url, slug, params);

	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import { page } from '$app/stores';

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
</script>

<svelte:head>
	<link rel="canonical" href={SITE_URL + pagePath} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} /></svelte:head
>

<div class="fade-in">
	<!-- <PopupForm isOpen={isLandingPage} /> -->
	<!-- <Formtest /> -->
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
