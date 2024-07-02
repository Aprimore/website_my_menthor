<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { get } from 'svelte/store';

	/**
	 * @param { import("$lib/paraglide/runtime").AvailableLanguageTag } newLanguage
	 */
	function switchToLanguage(newLanguage: any) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	/**
	 * @type {Record<import("$lib/paraglide/runtime").AvailableLanguageTag, string>}
	 */
	const labels = {
		en: '\u{1F1FA}\u{1F1F8} EN', // 🇺🇸 EN
		'pt-br': '\u{1F1E7}\u{1F1F7} PT-BR' // 🇧🇷 PT-BR
	};
</script>

<select
	class="relative h-[2.5rem] bg-[#F1F1F9] rounded-lg"
	aria-label="Select Language"
	on:change={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}
>
	{#each availableLanguageTags as langTag}
		<option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
	{/each}
</select>
