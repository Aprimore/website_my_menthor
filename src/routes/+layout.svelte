<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<main class="relative">
	<Navbar />
	<Navbar2 />
	<slot />
	<Footer />
</main>
