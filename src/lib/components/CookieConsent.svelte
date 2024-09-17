<script lang="ts">
	import { page } from '$app/stores';
	import { createConfig } from '$lib/functions/cookieconsent-config';
	import { loadGA, loadGTM } from '$lib/functions/loadGTM';
	import { cookieConsentAccepted, cookieConsentVisible } from '$lib/stores/cookieConsent';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';
	const pathUrl = get(page).url.pathname.startsWith('/pt-BR');
	const browserLang = pathUrl ? 'pt-BR' : 'en';
	onMount(() => {
		const config = createConfig(browserLang); // Generate config with the detected language
		CookieConsent.run({
			...config,
			onAccept: () => {
				cookieConsentAccepted.set(true);
				cookieConsentVisible.set(false);
				// Promise.all([loadGTM(), loadGA()]);
				// .then(() => {
				// 	console.log('GTM and GA loaded successfully.');
				// })
				// .catch((error) => {
				// 	console.error('Error loading GTM or GA:', error);
				// });
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

<button
	class="pb-2 w-full copyright p-1 max-sm:text-sm md:text-lg lg:text-sm copyright-component text-[#D4D4ED] hover:text-white Exo underline md:pl-28"
	on:click={CookieConsent.showPreferences}>Open Cookie consent preferences</button
>

<style>
	@media only screen and (max-width: 1400px) {
		.copyright-component {
			zoom: 127%;
		}
	}

	@media only screen and (max-width: 600px) {
		.copyright-component {
			zoom: 100%;
		}
	}

	.copyright {
		background-color: #25285f;
	}
</style>
