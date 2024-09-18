<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logo_navbar_svg } from '$lib';
	import * as m from '$paraglide/messages';
	import { fade } from 'svelte/transition';
	import { sourceLanguageTag, languageTag } from '$paraglide/runtime';
	import { translatePath } from '$lib/i18n';

	let isOpen = false;
	const toggleNavbar = () => (isOpen = !isOpen);

	function generateDynamicId(pageName: any) {
		return `${pageName}#top`;
	}

	let currentPage = '';
	$: {
		currentPage = $page.params.page || 'home';
	}

	function resetPopupAndNavigate() {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('popupDismissed');
		}
		// Navigate to the homepage
		goto('/').then(() => {
			window.location.reload();
		});
	}

	$: navbarClasses = `bg-opacity-0 text-base text-[#17193B] p-3 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-lg hover:text-[#F1F1F9] Exo bg-[#F1F1F9] `;

	const navItems = [
		{ href: '/', label: m.navbar_Home },
		{ href: '/products', label: m.navbar_Products },
		{ href: '/solutions', label: m.navbar_Solutions },
		{ href: '/customers_and_partners', label: m.navbar_Clients_and_Partners },
		{ href: '/resources', label: m.navbar_Resources },
		{ href: '/v1/blog', label: m.navbar_Blog },
		{ href: '/company', label: m.navbar_Company }
	];

	$: currentLanguage = languageTag();
	$: isSourceLanguage = currentLanguage === sourceLanguageTag;

	function getHref(basePath: string) {
		return isSourceLanguage ? basePath : `/${currentLanguage}${basePath}`;
	}
</script>

<nav
	class="bg-[#F1F1F9] bg-opacity-80 relative mx-auto lg:flex md:justify-between md:items-center z-50 max-w-full max-h-[115px] nav-component"
	in:fade={{ duration: 300, delay: 10 }}
>
	<div class="lg:flex items-center max-lg:justify-between m-auto max-xl:px-4">
		<div
			class="flex items-center max-lg:justify-between m-auto xl:mr-48"
			id={generateDynamicId(currentPage)}
		>
			<a
				class="logoHeader text-white hover:text-slate-300 transition-transform transform hover:-translate-y-1"
				aria-label="My Menthor"
				href="/"
			>
				<img
					width="235"
					height="113"
					src={logo_navbar_svg}
					alt="Vectorized Logo of MyMenthor Website"
					class="sm:mr-48"
				/>
			</a>
			<!-- Mobile menu button -->
			<div class="hamb flex lg:hidden Exo">
				<button
					on:click={toggleNavbar}
					type="button"
					aria-label="Toggle Navigation"
					aria-expanded={isOpen}
					aria-controls="nav-links"
					class="text-white hover:text-slate-300 focus:outline-none focus:text-slate-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#17193B"
						width="48"
						height="48"
					>
						{#if isOpen}
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
		<div
			id="nav-links"
			class="space-y-3 w-full max-lg:bg-[#F1F1F9] max-md:py-2 nav-links whitespace-nowrap lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3 md:space-x-2 text-center md:mt-0 {isOpen
				? 'flex flex-col lg:flex-row'
				: 'hidden lg:flex lg:flex-row'}"
		>
			{#each navItems as item}
				<a class={navbarClasses} on:click={toggleNavbar} href={getHref(item.href)}>
					{@html item.label()}
				</a>
			{/each}
			<button class={navbarClasses} on:click={resetPopupAndNavigate}>E-book</button>
		</div>
	</div>
</nav>

<style>
	@media only screen and (max-width: 1400px) {
		.nav-component {
			zoom: 127%;
		}
	}

	@media only screen and (max-width: 600px) {
		.nav-component {
			zoom: 100%;
		}
	}
	.nav-links {
		font-size: 1.25rem;
		line-height: 1rem;
	}

	@media (max-width: 1350px) {
		.nav-links {
			font-size: 1rem;
			line-height: 1rem;
		}
	}

	@media (max-width: 1020px) {
		.nav-links {
			font-size: 1.25rem;
			line-height: 1.5rem;
		}
	}
</style>
