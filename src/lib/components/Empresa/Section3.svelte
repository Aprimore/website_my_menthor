<script lang="ts">
	import * as m from '$paraglide/messages';
	// {m.xxxxxxxxxxxxxxxxxx()}
	import { arrow_right_svg, clientes_parceiros_3_png } from '$lib';
	import FormZoho from './../FormZoho.svelte';

	import animationData from '$lib/assets/lotties/gif-7.json';

	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	let animationContainer: HTMLElement;

	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			loop: true,
			autoplay: true,
			animationData
		});
	});

	import { base } from '$app/paths';
</script>

<!-- <section class="my-20 pb-20 bg-white ">
	<div class="h-[649px] flex flex-row max-w-screen-2xl mx-auto ">
		<div class="w-1/2 flex flex-col justify-center "> -->

<section class="w-full my-8 lg:my-20 bg-white">
	<div class="lg:flex flex-row xl:max-w-screen-2xl mx-auto max-lg:p-5" id="contact">
		<div class="lg:w-1/2 flex items-center flex-col justify-center">
			<div
				class="lg:space-y-6 lg:p-10 lg:ml-10 max-lg:flex lg:flex-col max-md:flex-col justify-center items-center w-full h-full"
			>
				<div>
					<h1 class="text-4xl md:text-5xl relative text-[#17193B] Exo-Bold mb-10">
						<!-- Contact us <span class="font-normal"> or </span> <br /> schedule a demo! -->
						{m.company_ContactUsOr()} <br />
						{m.company_ScheduleADemo()}
					</h1>
					<p class="Archivo text-[#25285F] text-lg">
						<!-- Fill in the form with your details. <br />
						The My Menthor team will get in touch as soon as possible! -->
						{m.company_FillInTheForm()} <br />
						{m.company_FillInTheForm_2()}
					</p>
				</div>

				<div bind:this={animationContainer} class="" />
				<!-- <img class="w-[620px]" src={clientes_parceiros_3_png} alt="" /> -->
			</div>
		</div>
		<div class="lg:w-1/2">
			<div class="flex flex-col md:flex-row justify-between">
				<div
					class="w-full p-8 px-4 md:px-24 lg:px-12 xl:px-24 bg-[#F1F1F9] rounded-2xl flex flex-col justify-center"
				>
					<form action="" class="flex flex-col gap-y-5 p-1">
						<label class="block">
							<span
								class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								Full name
							</span>
							<input
								type="text"
								name="text"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Type your full name"
								required
							/>
						</label>
						<label class="block">
							<span
								class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								E-mail
							</span>
							<input
								type="text"
								name="text"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Username"
								required
							/>
						</label>
						<label class="block">
							<span
								class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								Phone
							</span>
							<input
								type="phone"
								name="phone"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Phone"
								required
							/>
						</label>
						<label class="block">
							<span
								class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								Company
							</span>
							<input
								type="text"
								name="text"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Type the name of your Company"
								required
							/>
						</label>
						<label class="block">
							<span
								class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								Role
							</span>
							<input
								type="text"
								name="text"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Type your role at the company"
								required
							/>
						</label>
						<label class="block">
							<span
								class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								Message
							</span>
							<textarea
								name="message"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Type your message"
								rows="3"
								required
							></textarea>
						</label>

						<div class=" text-center mt-5">
							<a
								class="btn-demo block w-full rounded-xl px-10 py-4 text-xl font-medium text-[#17193B] bg-[#8ABB3F] focus:ring sm:w-auto z-10 relative Archivo"
								href="/company"
							>
								Send
								<img
									src={arrow_right_svg}
									class="z-10 absolute right-5 bottom-[24px] size-3"
									alt=""
								/>
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<FormZoho />
