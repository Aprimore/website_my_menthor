<script lang="ts">
	import { arrow_up_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- <div class="div1"></div>
<div class="div2"></div>
<div class="div3"></div> -->

{#if m}
	<div class="copyright p-5 bg-blue-800 text-sm">
		<div class="gridFooter max-md:text-center max-md:space-y-5">
			<ul
				class="col-span-1
        "
			>
				<li class=" ">
					<a href="/" class="">{m.footer_Copyright()}</a>
				</li>
			</ul>

			<ul
				class="flex max-md:flex-col gap-5 max-sm:text-center
            "
			>
				<li>
					<a
						href="/"
						class="underline text-[#D4D4ED] hover:text-white"
						style="min-width: 48px; min-height: 48px;">{m.footer_Terms()}</a
					>
				</li>
				<li>
					<a
						href="/"
						class="underline text-[#D4D4ED] hover:text-white"
						style="min-width: 48px; min-height: 48px;">{m.footer_Privacy()}</a
					>
				</li>
				<li>
					<a
						href="/"
						class=" underline text-[#D4D4ED] hover:text-white"
						style="min-width: 48px; min-height: 48px;">{m.footer_Cookies()}</a
					>
				</li>
			</ul>

			<ul class=" max-w-max arrowUp max-md:ml-auto">
				<!-- max-md:absolute right-2 max-sm:bottom-3 flex max-w-min ml-auto mb-auto -->
				<li class=" ">
					<button
						class="bg-[#D4D4ED] size-[36px] flex justify-center items-center rounded-md Exo transition-transform duration-200 transform hover:scale-105"
					>
						<a href="/"
							><img
								src={arrow_up_svg}
								alt="arrow top"
								class="size-[14px]"
								aria-label="top button"
								decoding="sync"
								fetchpriority="low"
							/></a
						>
					</button>
				</li>
			</ul>
		</div>
	</div>
{:else}
	<!-- Placeholder while translations are loading -->
	<div>Loading...</div>
{/if}

<style>
	.copyright {
		background-color: #25285f;
	}
	* {
		color: #f1f1f9;
	}

	.gridFooter {
		display: grid;
		grid-template-columns: 45% 45% 10%;
		gap: 5px;
	}
	.arrowUp {
		justify-self: end;
	}

	@media (max-width: 740px) {
		.gridFooter {
			display: block;
		}
	}
</style>
