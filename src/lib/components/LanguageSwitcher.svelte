<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import { get } from 'svelte/store';

	/**
	 * @param { import("$paraglide/runtime").AvailableLanguageTag } newLanguage
	 */
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	/**
	 * @type {Record<import("$paraglide/runtime").AvailableLanguageTag, string>}
	 */
	const labels = {
		en: 'English',
		'pt-br': 'Brasileiro'
	};
</script>

<select on:change={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}>
	{#each availableLanguageTags as langTag}
		<option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
	{/each}
</select>
