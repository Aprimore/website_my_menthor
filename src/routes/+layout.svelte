<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import { i18n } from '$lib/i18n.js';
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
