<script>
	import { clientes_parceiros_3_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg my-20 bg-[#D4D4ED]">
	<div class="h-[649px] flex flex-row pt-20">
		<div>
			<div class="w-1/2">
				<h1 class="Exo text-2xl sm:text-4xl z-10 relative text-[#17193B] Exo font-extrabold">
					Purpose
				</h1>
				<p class="Archivo text-[#25285F]">
					Our purpose is to improve management capacity and boost corporate performance by
					integrating process-oriented organizational components, enhancing strategic execution and
					maximizing results.
				</p>
				<img class="w-full h-full" src={clientes_parceiros_3_png} alt="" />
			</div>
			<div class="w-1/2">
				<div class="flex flex-col md:flex-row justify-between font-sans h-screen">
					<div class="w-full md:w-1/2 bg-second p-8">
						<h2 class="text-3xl text-white text-center underline capitalize">sign up</h2>
						<form action="" class="flex flex-col gap-y-5 pt-5">
							<label class="block">
								<!--   <span class="text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      Name
                    </span> -->
								<input
									type="text"
									name="text"
									class="text-base placeholder:text-base mt-1 px-3 py-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
									placeholder="Name"
									required
								/>
							</label>
							<label class="block">
								<!--   <span class="capitalize text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      username
                    </span> -->
								<input
									type="text"
									name="text"
									class="text-base placeholder:text-base mt-1 px-3 py-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
									placeholder="Username"
									required
								/>
							</label>
							<label class="block">
								<!--   <span class="text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      Email
                    </span> -->
								<input
									type="email"
									name="email"
									class="text-base placeholder:text-base mt-1 px-3 py-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
									placeholder="Email"
									required
								/>
							</label>
							<label class="block">
								<!--   <span class="capitalize text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      password
                    </span> -->
								<input
									type="password"
									name="password"
									class="text-base placeholder:text-base mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
									placeholder="Password"
									required
								/>
							</label>
							<label class="block">
								<!--   <span class="capitalize text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      confirm password
                    </span> -->
								<input
									type="password"
									name="password"
									class="text-base placeholder:text-base mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
									placeholder="Confirm Password"
									required
								/>
							</label>
							<input
								type="submit"
								class="tracking-wide capitalize text-gray-500 bg-four p-3 rounded-md shadow-sm cursor-pointer transition-all transition ease-in-out delay-150 duration-300 hover:bg-main hover:text-white"
								value="create account"
							/>

							<div class="d-flex items-center text-center">
								<span
									class="w-full relative inline-block px-10 font-bold text-sm text-white tracking-wide after:content-[''] after:flex after:relative after:-mt-2.5 after:w-2/5 after:h-0.5 after:bg-white after:left-0 before:content-[''] before:flex before:relative before:top-[13px] before:w-2/5 before:h-0.5 before:bg-white before:mt-2.5 before:left-[60%]"
									>or</span
								>
							</div>
							<div class="flex flex-col gap-y-2">
								<button
									class="flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded bg-white hover:bg-four"
								>
									<img
										src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
										class="relative w-10 h-10 ml-0 mr-2"
										alt="google logo"
									/> <span class="w-5/6">Sign up with Google</span>
								</button>
								<button
									class="flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded bg-white hover:bg-four"
								>
									<img
										src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
										class="relative w-10 h-10 ml-0 mr-2"
										alt="facebook logo"
									/> <span class="w-5/6">Sign up with Facebook</span>
								</button>
							</div>
						</form>
					</div>
					<div class="w-full md:w-1/2 p-8">
						<h2 class="text-3xl text-center text-main underline capitalize">sign in</h2>
						<form action="" class="flex flex-col gap-y-5 pt-10">
							<label class="block">
								<!--   <span class="capitalize text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      username
                    </span> -->
								<input
									type="text"
									name="text"
									class="text-base placeholder:text-base mt-1 px-3 py-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
									placeholder="Username"
									required
								/>
							</label>
							<label class="block">
								<!--   <span class="capitalize text-white after:content-['*'] after:ml-0.5 after:text-white block text-sm font-medium text-slate-700">
                      password
                    </span> -->
								<input
									type="password"
									name="password"
									class="text-base placeholder:text-base mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
									placeholder="Password"
									required
								/>
							</label>
							<a href="#" class="text-main underline capitalize hover:text-second"
								>forgot your password?</a
							>
							<input
								type="submit"
								class="tracking-wide capitalize text-white bg-second p-3 rounded-md shadow-sm cursor-pointer transition-all transition ease-in-out delay-150 duration-300 hover:bg-third"
								value="login"
							/>
							<div class="d-flex items-center text-center">
								<span
									class="w-full relative inline-block px-10 font-bold text-sm text-main tracking-wide after:content-[''] after:flex after:relative after:-mt-2.5 after:w-2/5 after:h-0.5 after:bg-main after:left-0 before:content-[''] before:flex before:relative before:top-[13px] before:w-2/5 before:h-0.5 before:bg-main before:mt-2.5 before:left-[60%]"
									>or</span
								>
							</div>
							<div class="flex flex-col gap-y-2">
								<button
									class="flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded bg-main text-white hover:bg-second"
								>
									<img
										src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
										class="relative w-10 h-10 ml-0 mr-2 bg-white rounded"
										alt="google logo"
									/> <span class="w-5/6">Login with Google</span>
								</button>
								<button
									class="flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded bg-main text-white hover:bg-second"
								>
									<img
										src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
										class="relative w-10 h-10 ml-0 mr-2"
										alt="facebook logo"
									/> <span class="w-5/6">Login with Facebook</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
