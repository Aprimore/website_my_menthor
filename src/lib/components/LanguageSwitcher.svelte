<!--
    @component
    Adds alternate links to the head of the page for each available language. 
    This is vital for SEO.
-->
<script lang="ts">
	import { page } from '$app/stores';
	import { availableLanguageTags, sourceLanguageTag } from '$paraglide/runtime';
	import { translatePath } from '$lib/i18n';
	import * as m from '$paraglide/messages';
	import { goto } from '$app/navigation';
	import { brazil_svg, usa_svg } from '$lib';

	const flagsMap = {
		en: usa_svg,
		'pt-BR': brazil_svg
	};
	const labels = {
		en: `EN`, // 🇺🇸 EN
		'pt-BR': ` PT-BR ` // 🇧🇷 pt-BR
	};
	// console.log(availableLanguageTags);
</script>

<div class="language-buttons">
	{#each availableLanguageTags as lang}
		<a
			href={translatePath('/', lang)}
			hreflang={lang}
			class="relative bg-[#F1F1F9] hover:bg-[#D4D4ED] rounded text-nowrap p-2 inline-flex flex-row justify-center align-middle"
		>
			<p class="inline-flex p-2">
				<img src={flagsMap[lang]} alt={`${lang} flag`} class=" w-6 h-6 mr-2" />
				{labels[lang]}
			</p>
		</a>
	{/each}
</div>

<!-- <select on:change={(e) => goto(translatePath('/', e.target.value))}>
	{#each availableLanguageTags as lang}
		<option value={lang} selected={lang === languageTag()}>{lang}</option>
	{/each}
</select> -->

<!-- <script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import { get } from 'svelte/store';

	/**
	 * @param { import("$paraglide/runtime").AvailableLanguageTag } newLanguage
	 */
	function switchToLanguage(newLanguage: any) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}


	/**
	 * @type {Record<import("$paraglide/runtime").AvailableLanguageTag, string>}
	 */

	
</script>

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
</div> -->
