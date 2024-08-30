<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { brazil_svg, usa_svg } from '$lib';
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

	const flagsMap = {
		en: usa_svg,
		'pt-br': brazil_svg
	};

	/**
	 * @type {Record<import("$lib/paraglide/runtime").AvailableLanguageTag, string>}
	 */

	const labels = {
		en: `EN`, // 🇺🇸 EN
		'pt-br': ` PT-BR ` // 🇧🇷 PT-BR
	};
</script>

<!-- <select
	class="relative h-[2.5rem] bg-[#F1F1F9] rounded-lg"
	aria-label="Select Language"
	on:change={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}
>
	{#each availableLanguageTags as langTag}
		<option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
	{/each}
</select> -->

<div class="language-buttons">
	{#each availableLanguageTags as langTag}
		<button
			class="relative h-[2.5rem] bg-[#F1F1F9] hover:bg-[#D4D4ED] rounded m-2 p-2 text-nowrap"
			on:click={() => switchToLanguage(langTag)}
			aria-pressed={languageTag() === langTag}
		>
			<p class="flex">
				<img src={flagsMap[langTag]} alt={`${langTag} flag`} class=" w-6 h-6 mr-2" />

				{labels[langTag]}
			</p>
		</button>
	{/each}
</div>
