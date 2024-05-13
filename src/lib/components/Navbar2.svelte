<script lang="ts">
	import { page } from '$app/stores';
	import { logo_navbar_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	function generateDynamicId(pageName) {
		return `${pageName}#top`;
	}
	let currentPage = '';
	$: {
		currentPage = $page.params.page || 'home';
	}

	const hrClass = 'max-sm:block';

	const navbarClasses =
		'text-[#17193B] py-2 md:px-3 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-lg hover:text-[#F1F1F9] Exo ';
</script>

{#if m}
	<nav
		class="bg-[#F1F1F9] bg-opacity-80 relative max-md:py-3 px-6 py-8 mx-auto lg:flex md:justify-between md:items-center z-50 max-w-full"
	>
		<div class="flex items-center justify-between" id={generateDynamicId(currentPage)}>
			<a
				class="logoHeader text-white hover:text-slate-300 transition-transform transform hover:-translate-y-1"
				aria-label="My Menthor"
				href="/"
			>
				<img
					src={logo_navbar_svg}
					alt="Logo MyMenthor"
					loading="eager"
					decoding="async"
					fetchpriority="high"
					class="aspect-video w-[235px] h-[132px]"
				/>
			</a>
			<!-- Mobile menu button -->
			<div class="hamb flex lg:hidden Exo">
				<button
					on:click={toggleNavbar}
					type="button"
					aria-label="Toggle Navigation"
					class="text-white hover:text-slate-300 focus:outline-none focus:text-slate-100"
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
			class=" nav-links whitespace-nowrap mt-8 space-y-4 lg:flex sm:space-y-0 lg:flex-row lg:items-center lg:space-x-3 md:space-x-2 text-center md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a class={navbarClasses} href="/">{m.navbar_Home()}</a>
			<a class={navbarClasses} href="/products">{m.navbar_Products()}</a>
			<a class={navbarClasses} href="/solutions">{m.navbar_Solutions()}</a>
			<a class={navbarClasses} href="/customers_and_partners">{m.navbar_Clients_and_Partners()}</a>
			<a class={navbarClasses} href="/resources">{m.navbar_Resources()}</a>
			<a class={navbarClasses} href="http://mymenthor.com/blog" target="_blank">{m.navbar_Blog()}</a
			>
			<a class={navbarClasses} href="/company">{m.navbar_Company()}</a>
		</div>
	</nav>
{:else}
	<!-- Placeholder while translations are loading -->
	<div>Loading...</div>
{/if}

<style>
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
