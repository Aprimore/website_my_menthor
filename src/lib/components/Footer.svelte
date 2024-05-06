<script lang="ts">
	import {
		arrow_right_svg,
		facebook_svg,
		instagram_svg,
		linkedin_svg,
		logo_footer_webp,
		mail_svg,
		youtube_svg
	} from '$lib';
	import * as m from '$paraglide/messages';
	import Copyright from './Copyright.svelte';
</script>

<footer class="footer relative bg-[#17193b] w-full Exo">
	<div class="lg:container mx-auto max-sm:flex justify-center">
		<div class=" lg:p-12">
			<div
				class="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 lg:gap-20 mx-auto p-3 sm:p-6"
			>
				<div class="mx-auto">
					<div class="w-full mb-10">
						<a href="/" class="mb-6 inline-block max-w-[250px]">
							<img
								src={logo_footer_webp}
								alt="logo"
								class="inset-0 w-full h-full object-cover size-96"
							/>
						</a>

						<!-- <div class="email_link">
						<a href="#" class="text-[#D4D4ED] email">
							<span class="mail-icon"></span>
							
						
						</a>
					</div> -->

						<button class=" flex flex-wrap gap-4 Exo">
							<a
								class="btn-agendar bg-[#8abb3f] flex items-center text-base text-[#17193B] py-4 px-10 mt-5 rounded-lg relative max-lg:whitespace-nowrap lg:whitespace-nowrap"
								href="/company#contact"
							>
								{m.button_schedule_a_demo()}
								<img
									src={arrow_right_svg}
									class="z-10 absolute right-5 bottom-[22px] size-3"
									alt=""
								/>
							</a>
						</button>
					</div>
				</div>

				<div class="lg:ml-12 w-full">
					<div class="w-full mb-10">
						<h4 class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
							{m.footer_Products()}
						</h4>
						<ul class="space-y-3">
							<li>
								<a href="/products#platform" class="text-[#D4D4ED] text-sm"
									>{m.footer_About_platform()}</a
								>
							</li>
							<li>
								<a href="/products#target-audience" class="text-[#D4D4ED] text-sm">
									{m.footer_Target_audience()}
								</a>
							</li>
						</ul>
						<h4 class="text-[#F1F1F9] text-lg Exo-Semibold mb-5 mt-5">
							{m.footer_Stakeholders()}
						</h4>
						<ul class="space-y-3">
							<li>
								<a href="/solutions#modules" class="text-[#D4D4ED] text-sm">
									{m.footer_Customers()}
								</a>
							</li>
							<li>
								<a href="/solutions#portfolio-services" class="text-[#D4D4ED] text-sm">
									{m.footer_Success_stories()}
								</a>
							</li>
							<li>
								<a href="/solutions#packages" class="text-[#D4D4ED] text-sm"
									>{m.footer_Customer_support()}</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="lg:ml-12 w-full">
					<div class="w-full mb-10">
						<h4 class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
							{m.footer_Partner_Program()}
						</h4>
						<ul class="space-y-3">
							<li>
								<a href="/customers_and_partners#clients" class="text-[#D4D4ED] text-sm">
									{m.footer_Resources()}
								</a>
							</li>
							<li>
								<a href="/customers_and_partners#cases" class="text-[#D4D4ED] text-sm">
									{m.footer_Blog()}
								</a>
							</li>
							<li>
								<a href="/customers_and_partners#support" class="text-[#D4D4ED] text-sm">
									{m.footer_Events_Webinars()}
								</a>
							</li>
							<li>
								<a href="/customers_and_partners" class="text-[#D4D4ED] text-sm">
									{m.footer_My_Menthor_Academy()}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="lg:ml-12 w-full">
					<div class="w-full mb-10">
						<h4 class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
							{m.footer_Knowledge_Base()}
						</h4>
						<ul class="space-y-3">
							<li>
								<a href="/" class="text-[#D4D4ED] text-sm">{m.footer_Our_Company()}</a>
							</li>
							<li>
								<a href="/" class="text-[#D4D4ED] text-sm">{m.footer_About_us()}</a>
							</li>
							<li>
								<a href="/" class="text-[#D4D4ED] text-sm">My {m.footer_Purpose()}</a>
							</li>
							<li>
								<a href="/" class="text-[#D4D4ED] text-sm">{m.footer_Contact_us()}</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="lg:ml-12 w-full relative">
					<div class="w-full mb-10">
						<h4 class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
							{m.footer_Solutions()}
						</h4>
						<ul class="space-y-3">
							<li>
								<a href="/company#about" class="text-[#D4D4ED] text-sm">{m.footer_The_Platform()}</a
								>
							</li>
							<li>
								<a href="/company#purpose" class="text-[#D4D4ED] text-sm"
									>{m.footer_Service_portfolio()}</a
								>
							</li>
							<li>
								<a href="/company#contact" class="text-[#D4D4ED] text-sm">{m.footer_Packages()}</a>
							</li>
						</ul>
					</div>
					<div class="xl:absolute bottom-0 right-5 mr-5">
						<div class="flex space-x-7">
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Youtube"
								target="_blank"
							>
								<img src={youtube_svg} alt="" />
							</a>
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Linkedin"
								target="_blank"
							>
								<img src={linkedin_svg} alt="" />
							</a>
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Facebook"
								target="_blank"
							>
								<img src={facebook_svg} alt="" />
							</a>
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Instagram"
								target="_blank"
							>
								<img src={instagram_svg} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Copyright />
</footer>

<!-- <style>
	.email_link::before {
		content: url('$lib/assets/svg/mail.svg');
		margin-right: 10px; /* Adjust as needed */
	}
</style> -->
