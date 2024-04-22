<script lang="ts">
    import "../app.css"
    import { page } from '$app/stores';

</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<main class="relative">
	<slot />
</main>