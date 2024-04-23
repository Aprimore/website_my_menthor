<script lang="ts">
	import Navbar from './../lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Home/Hero.svelte';
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
</script>

<svelte:head>
	<title>My Menthor | Home</title>
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
	<Navbar />
	<Navbar2 />
	<Hero />
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Footer />
</div>

<!-- <style>

</style> -->
