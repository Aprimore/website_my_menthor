<script>
	import config from '$lib/cookieconsent-config';
	import { onMount } from 'svelte';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		CookieConsent.run(config);
	});
</script>

<button on:click={CookieConsent.showPreferences}>Open consent preferences</button>
