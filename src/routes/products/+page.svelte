<script lang="ts">
	import Section1 from '$lib/components/Produtos/Section1.svelte';
	import Section2 from '$lib/components/Produtos/Section2.svelte';
	import Section3 from '$lib/components/Produtos/Section3.svelte';
	import Section4 from '$lib/components/Produtos/Section4.svelte';
	import Section5 from '$lib/components/Produtos/Section5.svelte';
	// import type { PageData } from './$types';
	// export let data: PageData;
</script>

<svelte:head>
	<!-- <title>My Menthor | Home</title> -->
	<!-- <link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="My Menthor" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} /> -->
</svelte:head>

<div>
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section5 />
</div>

<!-- <style>

</style> -->
