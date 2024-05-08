<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { arrow_up_svg } from '$lib';
</script>

{#if m}
	<div class="copyright p-5 bg-blue-800 text-sm w-full">
		<div class="grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-10 mx-auto">
			<ul
				class=" max-w-[90%]
        "
			>
				<li class="">
					<a href="/" class="">{m.footer_Copyright()}</a>
				</li>
			</ul>

			<ul
				class="flex max-md:flex-col md:justify-around gap-5 md:gap-10 md:ml-auto md:min-w-96 max-w-[90%]
            "
			>
				<li>
					<a href="/" class="underline" style="min-width: 48px; min-height: 48px;"
						>{m.footer_Terms()}</a
					>
				</li>
				<li>
					<a href="/" class="underline" style="min-width: 48px; min-height: 48px;"
						>{m.footer_Privacy()}</a
					>
				</li>
				<li>
					<a href="/" class="text-white underline" style="min-width: 48px; min-height: 48px;"
						>{m.footer_Cookies()}</a
					>
				</li>
			</ul>

			<ul class="max-md:absolute right-2 flex max-w-min ml-auto mb-auto">
				<li class=" ">
					<button class="bg-[#D4D4ED] size-[36px] flex justify-center items-center rounded-md Exo">
						<a href="/"
							><img
								src={arrow_up_svg}
								alt="arrow top"
								class="size-[14px]"
								aria-label="top button"
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
</style>
