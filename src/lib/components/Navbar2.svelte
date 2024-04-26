<script lang="ts">
	import { logo_navbar_svg } from '$lib';
</script>

<nav class="w-full z-20 top-0 start-0">
	<div class="nav2 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src={logo_navbar_svg} class="" alt="Flowbite Logo" />
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium text-sm flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
			>
				<li>
					<a
						href="/products"
						class="text-[#17193B] py-2 px-3 block rounded hover:bg-[#20C997] hover:text-[#F1F1F9] text-lg Exo"
						aria-current="page">Products</a
					>
				</li>
				<li>
					<a
						href="/solutions"
						class="text-[#17193B] py-2 px-3 block rounded hover:bg-[#20C997] hover:text-[#F1F1F9] text-lg Exo"
						>Solutions</a
					>
				</li>
				<li>
					<a
						href="/customers_and_partners"
						class="text-[#17193B] py-2 px-3 block rounded hover:bg-[#20C997] hover:text-[#F1F1F9] text-lg Exo"
						>Costumers and Partners</a
					>
				</li>
				<li>
					<a
						href="/resources"
						class="text-[#17193B] py-2 px-3 block rounded hover:bg-[#20C997] hover:text-[#F1F1F9] text-lg Exo"
						>Resources</a
					>
				</li>
				<li>
					<a
						href="/company"
						class="text-[#17193B] py-2 px-3 block rounded hover:bg-[#20C997] hover:text-[#F1F1F9] text-lg Exo"
						>Company</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<!-- <nav class="mt-20 bg-white border-gray-200  m-0 p-0"></nav> -->

<style>
	* {
		color: black;
	}
</style>
