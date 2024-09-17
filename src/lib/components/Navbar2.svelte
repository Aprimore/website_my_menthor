<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logo_navbar_svg } from '$lib';
	import * as m from '$paraglide/messages';
	import { fade } from 'svelte/transition';
	import { sourceLanguageTag, languageTag } from '$paraglide/runtime';
	import { translatePath } from '$lib/i18n';
	// let showMenu = false;
	let isOpen = false;
	const toggleNavbar = () => (isOpen = !isOpen);

	// const labels = {
	// 	en: 'EN',
	// 	'pt-BR': 'PT-BR'
	// };

	// function toggleNavbar() {
	// 	showMenu = !showMenu;
	// }

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

	// const hrClass = 'max-sm:block ';

	// const navbarClasses =
	// 	' bg-opacity-0 text-base text-[#17193B] py-2 md:px-3 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-lg hover:text-[#F1F1F9] Exo bg-[#F1F1F9]';

	$: navbarClasses = `bg-opacity-0 text-base text-[#17193B] py-2 md:px-3 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-lg hover:text-[#F1F1F9] Exo bg-[#F1F1F9] `;

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

<svelte:head>
	<link rel="preload" as="image" href={logo_navbar_svg} />
</svelte:head>

<nav
	class=" bg-[#F1F1F9] bg-opacity-80 relative mx-auto lg:flex md:justify-between md:items-center z-50 max-w-full max-h-[115px] nav-component"
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
					src={logo_navbar_svg}
					alt="Logo MyMenthor"
					loading="eager"
					fetchpriority="high"
					class="aspect-video mr-48"
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
					class="text-white hover:text-slate-300 focus:outline-none focus:text-slate-100 {!isOpen
						? 'block'
						: 'hidden lg:block'}"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#17193B"
						class="w-12 h-12"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div
			id="nav-links"
			class="w-full max-lg:bg-[#F1F1F9] max-md:py-2 nav-links whitespace-nowrap space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3 md:space-x-2 text-center md:mt-0 {isOpen
				? 'flex'
				: 'hidden '}"
		>
			{#each navItems as item}
				<a class={navbarClasses} on:click={toggleNavbar} href={getHref(item.href)}>
					{@html item.label()}
				</a>
			{/each}
			<button class={navbarClasses} on:click={resetPopupAndNavigate}>E-book</button>
		</div>
		<!-- <div
			id="nav-links"
			class="w-full max-lg:bg-[#F1F1F9] max-md:py-2 nav-links whitespace-nowrap space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3 md:space-x-2 text-center md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a class={navbarClasses} on:click={toggleNavbar} href="/">{@html m.navbar_Home()}</a>
			<a class={navbarClasses} on:click={toggleNavbar} href="/products"
				>{@html m.navbar_Products()}</a
			>
			<a class={navbarClasses} on:click={toggleNavbar} href="/solutions"
				>{@html m.navbar_Solutions()}</a
			>
			<a class={navbarClasses} on:click={toggleNavbar} href="/customers_and_partners"
				>{@html m.navbar_Clients_and_Partners()}</a
			>
			<a class={navbarClasses} on:click={toggleNavbar} href="/resources"
				>{@html m.navbar_Resources()}</a
			>
			<a
				class={navbarClasses}
				on:click={toggleNavbar}
				href="/v1/blog"
				data-sveltekit-preload-data="tap">{@html m.navbar_Blog()}</a
			>
			<a class={navbarClasses} on:click={toggleNavbar} href="/company">{@html m.navbar_Company()}</a
			>
			<button class={navbarClasses} on:click={resetPopupAndNavigate}>E-book</button>
		</div> -->
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
			flex-direction: column;
		}
	}
</style>
