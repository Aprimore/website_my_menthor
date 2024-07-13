<script lang="ts">
	import config from '$lib/functions/cookieconsent-config';
	import { loadGTM } from '$lib/functions/loadGTM';
	import { cookieConsentAccepted, cookieConsentVisible } from '$lib/stores/cookieConsent';
	import { onMount } from 'svelte';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	onMount(() => {
		CookieConsent.run({
			...config,
			onAccept: () => {
				cookieConsentAccepted.set(true);
				cookieConsentVisible.set(false);
				loadGTM();
			},
			onReject: () => {
				cookieConsentAccepted.set(false);
				cookieConsentVisible.set(false);
			},
			onModalShow: () => {
				cookieConsentVisible.set(true);
			},
			onModalHide: () => {
				cookieConsentVisible.set(false);
			}
		});
	});
</script>

<button on:click={CookieConsent.showPreferences}>Open consent preferences</button>
