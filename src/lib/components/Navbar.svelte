<script lang="ts">
	import { logo_navbar_svg } from '$lib';
</script>

<nav class="navbar bg-[#d4d4ed] relative w-full z-20 top-0 start-0 border-b">
	<div
		class="nav1 bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-2.5"
	>
		<div class="flex md:order-2 space-x-3">
			<ul class="flex p-3 md:p-0 font-medium md:space-x-2 rtl:space-x-reverse m-0 border-0">
				<!-- <li>
					<a
						href="/"
						class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent underline"
						></a
					>
				</li> -->
				<li class=" bg-[#d4d4ed]">
					<button
						type="button"
						class="login Archivo block py-2 px-3 text-[#17193B] rounded bg-[#F1F1F9]">Login</button
					>
				</li>
				<li>
					<a
						href="/"
						class="language block py-2 px-3 text-[#17193B] rounded md:hover:bg-transparent Archivo"
						>PT</a
					>
				</li>
			</ul>
		</div>
		<div
			class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
			id="navbar-sticky"
		></div>
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
