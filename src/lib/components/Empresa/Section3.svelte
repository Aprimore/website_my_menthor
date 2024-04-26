<script>
	import { arrow_right_svg, clientes_parceiros_3_png } from '$lib';
</script>

<!-- <section class="my-20 pb-20 bg-white ">
	<div class="h-[649px] flex flex-row max-w-screen-2xl mx-auto ">
		<div class="w-1/2 flex flex-col justify-center "> -->

<section class="w-full my-20 bg-white">
	<div class="flex flex-row max-w-screen-2xl mx-auto">
		<div class="w-1/2 items-center flex flex-col justify-center">
			<div class=" space-y-6 border-black">
				<h1 class="Exo text-2xl sm:text-5xl z-10 relative text-[#17193B] Exo font-extrabold">
					Contact us <span class="font-normal"> or </span> schedule a demo!
				</h1>
				<p class="Archivo text-[#25285F] text-lg">
					Fill in the form with your details. <br />
					The My Menthor team will get in touch as soon as possible!
				</p>
				<img class="w-[620px]" src={clientes_parceiros_3_png} alt="" />
			</div>
		</div>
		<div class="w-1/2">
			<div class="flex flex-col md:flex-row justify-between font-sans h-screen">
				<div
					class="w-full bg-second p-8 px-24 bg-[#F1F1F9] rounded-2xl flex flex-col justify-center"
				>
					<form action="" class="flex flex-col gap-y-5 pt-5">
						<label class="block">
							<span
								class="Exo font-bold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
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
								class="Exo font-bold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
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
								class="Exo font-bold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
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
								class="Exo font-bold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
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
								class="Exo font-bold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
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
								class="Exo font-bold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block"
							>
								Message
							</span>
							<input
								type="text"
								name="text"
								class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								placeholder="Type your message"
								required
							/>
						</label>

						<div class=" text-center">
							<a
								class="btn-demo block w-full rounded-xl px-10 py-4 text-xl font-medium text-[#17193B] bg-[#8ABB3F] focus:ring sm:w-auto z-10 relative Archivo"
								href="#"
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
