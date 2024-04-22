<script lang="ts">
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	let animationContainer: HTMLElement;

	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			path: 'https://lottie.host/d68b6649-f8af-499b-a586-287e2e332e2b/J9yfWB9kr4.json'
		});
	});
</script>

<section class="jsonAnimation">
	<div bind:this={animationContainer}></div>
</section>
