<script lang="ts">
	import og_image from '$lib/assets/images/og_image.webp';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Home/Hero.svelte';
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section5 from '$lib/components/Home/Section5.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';

	export let data;

	import config from '$lib/cookieconsent-config';
	import * as CookieConsent from 'vanilla-cookieconsent';

	const resetPlugin = () => {
		CookieConsent.reset(true);
		CookieConsent.run(config);
	};
</script>

<div>
	<Hero />
	<Section1 />
	<Section2 />
	<Section3 {data} />
	<Section4 />
	<Section5 />
	<div class="bg-[#F1F1F9] h-20"></div>
</div>

<!-- <style>

</style> -->
