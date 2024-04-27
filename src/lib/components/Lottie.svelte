<script lang="ts">
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	let animationContainer: HTMLElement;

	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			path: 'https://lottie.host/781100bc-85f1-4857-98d0-9b129a535d12/J9yfWB9kr4.json'
		});
	});
</script>

<section class="jsonAnimation">
	<div bind:this={animationContainer}></div>
</section>
