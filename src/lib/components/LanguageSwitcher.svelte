<!--
    @component
    Adds alternate links to the head of the page for each available language. 
    This is vital for SEO.
-->
<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';
	import { translatePath } from '$lib/i18n';
	// import * as m from '$paraglide/messages';
	// import { goto } from '$app/navigation';
	import { brazil_svg, usa_svg } from '$lib';

	const flagsMap = {
		en: usa_svg,
		'pt-BR': brazil_svg
	};
	const labels = {
		en: `EN`, // 🇺🇸 EN
		'pt-BR': ` PT-BR ` // 🇧🇷 pt-BR
	};
</script>

<div class="language-buttons">
	{#each availableLanguageTags as lang}
		<!-- hreflang={lang} -->
		<a
			href={translatePath('/', lang)}
			class="relative bg-[#F1F1F9] hover:bg-[#D4D4ED] rounded text-nowrap p-2 inline-flex flex-row justify-center align-middle"
		>
			<p class="inline-flex p-2">
				<img width="24" height="24" src={flagsMap[lang]} alt={`${lang} flag`} class="  mr-2" />
				{labels[lang]}
			</p>
		</a>
	{/each}
</div>
