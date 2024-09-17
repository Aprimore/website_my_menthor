<script lang="ts">
	import { page } from '$app/stores';
	import { piramid_home_en_svg, piramid_home_pt_br_svg } from '$lib';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import * as m from '$paraglide/messages';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-BR/');

	const ogLanguage = isPortuguese ? 'pt-BR' : 'en';
	const pageTitle = 'Cookies';
	const metadescription = isPortuguese
		? 'Este documento descreve como os cookies são usados nos sites www.mymenthor.com e www.mymenthor.com.br, identificando os diferentes tipos de cookies usados, suas finalidades, como os usuários podem consentir ou optar por não usar os cookies e terceiros envolvidos na colocação de cookies.'
		: 'This document describes how cookies are used on the websites www.mymenthor.com and www.mymenthor.com.br, identifying the different types of cookies used, their purposes, how users can consent to or opt out of using cookies, and the third parties involved in placing cookies.';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={metadescription} />
</svelte:head>

<section
	in:fade={{ delay: 0, duration: 150, easing: cubicInOut }}
	class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo"
>
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto items-center rounded-lg"
	>
		<div class="max-lg:p-5 lg:w-2/3 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			<h1
				class="xl:text-4xl sm:xl:text-4xl text-3xl relative Exo-Bold text-[#17193B] blue-underline"
			>
				{@html m.COOKIES_COOKIES_POLICY()}
			</h1>

			<p class="mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_THIS_DOCUMENT_DESCRIBES()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_WHAT_IS_A_COOKIE()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_A_COOKIE_IS_A_SMALL()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_WHAT_TYPES_OF_COOKIES()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_COOKIES_CAN_BE_SESSION()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_WE_CLASSIFY_COOKIES()}
			</h2>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.COOKIES_STRICTLY_NECESSARY_THESE_COOKIES()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.COOKIES_FUNCTIONAL_THESE_COOKIES_ENHANCE()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">{@html m.COOKIES_PREFERENCE()}</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">{@html m.COOKIES_ANALYTICS()}</li>
			</ul>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_THIRD_PARTY_COOKIES()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_PURPOSE_OF_COOKIES()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_COOKIE_RETENTION_PERIOD()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_SESSION_COOKIES()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_PERSISTENT_COOKIES()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_DELETE_COOKIES()}
			</p>

			<ul style="list-style-type: disc;">
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.COOKIES_HOW_YOU_CAN_MANAGE_COOKIES()}
				</li>
				<li class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
					{@html m.COOKIES_BROWSER_SETTINGS()}
				</li>
			</ul>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_EXPLICIT_CONSENT()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_INTERNATIONAL_HOW_YOU_CAN_MANAGE()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_YOU_CAN_MANAGE()}
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_BROWSER_SETTINGS_2()}
			</p>

			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_EXPLICIT_CONSENT_2()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_OUR_USERS_CAN()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_INTERNATIONAL_DATA_TRANSFERS()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_IN_SOME_CASES()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_DISCLAIMER()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_WE_DESERVE_THE_RIGHT()}
			</p>
			<h2 class="Exo-Bold mt-14 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_POLICY_UPDATES()}
			</h2>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_THIS_POLICY_MAY()}
			</p>
			<p class="mt-5 mb-2 Archivo text-lg text-[#25285F]">
				{@html m.COOKIES_FOR_MORE_INFORMATION()}
			</p>
		</div>
	</div>
</section>
