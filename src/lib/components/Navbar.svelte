<script lang="ts">
	import { logo_navbar_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';
	import { languageTag, setLanguageTag } from '$lib/paraglide/runtime';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';
</script>

<nav class="navbar bg-[#d4d4ed] relative w-full z-20 top-0 start-0 border-b">
	<button class="absolute text-transparent cursor-pointer max-md:hidden">
		<a class="absolute text-transparent cursor-pointer max-md:hidden" href="/blogtest">adsadas</a>
		dsa</button
	>
	<div
		class="nav1 bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-2.5 p-1"
	>
		<div class="flex order-2 space-x-3">
			<ul
				class="flex p-3 md:p-0 font-medium space-x-3 md:space-x-2 rtl:space-x-reverse m-0 border-0"
			>
				<!-- <li>
				<a
				href="/"
				class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent underline"
				></a
				>
			</li> -->

				<li class=" bg-[#d4d4ed]">
					<a
						class="login Archivo block py-2 px-3 text-[#17193B] rounded bg-[#F1F1F9]"
						href="https://www.mymenthor.com.br/"
						target="_blank">Login</a
					>
				</li>
				<li class=" bg-[#F1F1F9] px-2">
					<!-- <a
						href="/"
						class="language block py-2 px-3 text-[#17193B] rounded md:hover:bg-transparent Archivo"
						>PT</a

						> -->
					<span class="language block text-[#17193B] md:hover:bg-transparent Archivo"
						><LanguageSwitcher /></span
					>
				</li>
			</ul>
		</div>
		<div class="items-center justify-between flex w-auto" id="navbar-sticky"></div>
	</div>
</nav>

<style>
	.language::before {
		content: url('$lib/assets/svg/globe.svg');
		display: inline-block;
		vertical-align: middle;
		margin-bottom: -5px;
		margin-right: 7px; /* Adjust as needed */
	}
	.login::before {
		content: url('$lib/assets/svg/lock.svg');
		display: inline-block;
		vertical-align: middle;
		margin-right: 5px; /* Adjust as needed */
	}
</style>
