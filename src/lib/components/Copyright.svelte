<script>
	import { arrow_up_svg } from '$lib';
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
				<a href="/" class="">My Menthor Copyright © 2024. All rights reserved. </a>
			</li>
		</ul>

		<ul
			class="flex justify-start space-x-10 w-[30%]
            "
		>
			<li>
				<a href="/" class="underline">Terms of Service</a>
			</li>
			<li>
				<a href="/" class="underline">Privacy Policy</a>
			</li>
			<li>
				<a href="/" class="text-white underline">Cookies</a>
			</li>
		</ul>

		<ul
			class="flex justify-center w-[10%]
            "
		>
			<li>
				<button class="bg-[#D4D4ED] size-[36px] flex justify-center items-center rounded-md">
					<a href="/"><img src={arrow_up_svg} class="size-[14px]" alt="" /></a>
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
