<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import { i18n } from '$lib/i18n.js';
	import '@fontsource-variable/archivo';
	import '@fontsource-variable/exo';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<ParaglideJS {i18n}>
	<main class="relative">
		<Navbar />
		<Navbar2 />
		<slot />
		<Footer />
	</main>
</ParaglideJS>

<style>
	:global(html) {
		font-family: 'Exo Variable, sans-serif;';
	}

	/* Specific font classes */
	:global(.Archivo) {
		font-family: 'Archivo Variable', sans-serif;
	}

	:global(.Exo) {
		font-family: 'Exo Variable', sans-serif;
	}

	:global(.Exo-Regular) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 400; /* Set font weight */
	}

	:global(.Exo-Semibold) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 600; /* Set font weight */
	}

	:global(.Exo-Bold) {
		font-family: 'Exo Variable', sans-serif;
		font-weight: 700; /* Set font weight */
	}
</style>
