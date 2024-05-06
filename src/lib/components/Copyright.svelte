<script lang="ts">
	import { arrow_up_svg } from '$lib';
	import * as m from '$paraglide/messages';
</script>

<div class="copyright py-5 bg-blue-800 text-sm">
	<div
		class="font-medium flex flex-row items-center p-4 md:p-0 mt-4 border border-red rounded-lg md:space-x-52 md:mt-0 md:border-0 w-full
        "
	>
		<ul
			class="flex justify-end w-[30%]
        "
		>
			<li class="">
				<a href="/" class="">{m.footer_Copyright()}</a>
			</li>
		</ul>

		<ul
			class="flex justify-start space-x-10 w-[30%]
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

		<ul
			class="flex justify-center w-[10%]
            "
		>
			<li>
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

<style>
	.copyright {
		background-color: #25285f;
	}
	* {
		color: #f1f1f9;
	}
</style>
