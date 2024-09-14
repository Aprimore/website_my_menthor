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

<footer class="footer relative bg-[#17193b] Exo footer-component">
	<div class=" max-sm:flex justify-center">
		<div class=" lg:p-12 max-md:flex justify-center p-5">
			<div
				class="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 md:gap-3 lg:gap-4 p-3 sm:p-6"
			>
				<div class="footer1 xl:col-span-2 md:col-span-2 col-span-2 max-md:flex justify-center">
					<div class=" ">
						<a href="/" class="mb-6 inline-block max-w-[250px]">
							<img
								loading="lazy"
								decoding="sync"
								fetchpriority="low"
								src={logo_footer_webp}
								alt="logo"
								class="aspect-video transition-transform transform hover:-translate-y-1"
							/>
						</a>

						<!-- <div class="email_link">
						<a href="#" class="text-[#D4D4ED] email">
							<span class="mail-icon"></span>
							
						
						</a>
					</div> -->

						<button class="flex flex-wrap Exo">
							<a
								class="btn-agendar w-full bg-[#8abb3f] text-[#17193B] py-4 px-10 rounded-lg relative transition-transform transform hover:-translate-y-1"
								href="/company#contact"
							>
								{@html m.button_schedule_a_demo()}
							</a>
						</button>
					</div>
				</div>

				<div class="footer2 col-span-1 max-md:mt-10">
					<div class=" mb-10">
						<ul class="space-y-3">
							<li>
								<p class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
									{@html m.footer_Products()}
								</p>
								<a
									href="/products#platform"
									title="Learn more about our company"
									class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_About_platform()}</a
								>
							</li>
							<li>
								<a
									href="/products#target-audience"
									title="Learn more about our company"
									class="text-[#D4D4ED] text-sm hover:text-white"
								>
									{@html m.footer_Target_audience()}
								</a>
							</li>
						</ul>

						<ul class="space-y-3">
							<li>
								<p class="text-[#F1F1F9] text-lg Exo-Semibold my-5">
									{@html m.footer_Solutions()}
								</p>
								<a href="/solutions#modules" class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_The_Platform()}</a
								>
							</li>
							<li>
								<a
									href="/solutions#portfolio-services"
									class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_Service_portfolio()}</a
								>
							</li>
							<li>
								<a href="/solutions#packages" class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_Packages()}</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="footer3 col-span-1 max-md:mt-10">
					<div class=" mb-10">
						<ul class="space-y-3">
							<!-- <li>
									<a
										href="/customers_and_partners#support"
										class="text-[#D4D4ED] text-sm hover:text-white"
									>
										{@html m.footer_Customers()}
									</a>
								</li> -->
							<li>
								<p class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
									{@html m.footer_Stakeholders()}
								</p>
								<a
									href="/customers_and_partners#cases"
									class="text-[#D4D4ED] text-sm hover:text-white"
								>
									{@html m.footer_Success_stories()}
								</a>
							</li>
							<li>
								<a
									href="/customers_and_partners#support"
									class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_Customer_support()}</a
								>
							</li>
							<li>
								<a
									href="/customers_and_partners#clients"
									class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_Partner_Program()}</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="footer4 col-span-1">
					<div class=" mb-10">
						<ul class="space-y-3">
							<li>
								<p class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
									{@html m.footer_Resources()}
								</p>
								<a href="/resources#resources" class="text-[#D4D4ED] text-sm hover:text-white">
									{@html m.footer_Blog()}
								</a>
							</li>
							<li>
								<a href="/resources#resources" class="text-[#D4D4ED] text-sm hover:text-white">
									{@html m.footer_Events_Webinars()}
								</a>
							</li>
							<li>
								<a href="/resources#resources" class="text-[#D4D4ED] text-sm hover:text-white">
									{@html m.footer_My_Menthor_Academy()}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="footer5 col-span-1 relative">
					<div class=" mb-10">
						<ul class="space-y-3">
							<li>
								<p class="text-[#F1F1F9] text-lg Exo-Semibold mb-5">
									{@html m.footer_Our_Company()}
								</p>
								<a href="/company#about" class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_About_us()}</a
								>
							</li>
							<li>
								<a href="/company#purpose" class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_Purpose()}</a
								>
							</li>
							<li>
								<a href="/company#contact" class="text-[#D4D4ED] text-sm hover:text-white"
									>{@html m.footer_Contact_us()}</a
								>
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
								<img
									loading="lazy"
									decoding="sync"
									fetchpriority="low"
									src={youtube_svg}
									class="transition-transform duration-200 transform hover:scale-110"
									alt=""
								/>
							</a>
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Linkedin"
								target="_blank"
							>
								<img
									loading="lazy"
									decoding="sync"
									fetchpriority="low"
									src={linkedin_svg}
									class="transition-transform duration-200 transform hover:scale-110"
									alt=""
								/>
							</a>
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Facebook"
								target="_blank"
							>
								<img
									loading="lazy"
									decoding="sync"
									fetchpriority="low"
									src={facebook_svg}
									class="transition-transform duration-200 transform hover:scale-110"
									alt=""
								/>
							</a>
							<a
								href="/"
								class="flex items-center justify-center w-8 h-8"
								aria-label="Instagram"
								target="_blank"
							>
								<img
									loading="lazy"
									decoding="sync"
									fetchpriority="low"
									src={instagram_svg}
									class="transition-transform duration-200 transform hover:scale-110"
									alt=""
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Copyright />
</footer>

<style>
	@media only screen and (max-width: 1400px) {
		.footer-component {
			zoom: 127%;
		}
	}

	@media only screen and (max-width: 600px) {
		.footer-component {
			zoom: 100%;
		}
	}
	.btn-agendar::after {
		content: url('$lib/assets/svg/arrow_right.svg');
		display: inline-block;
		/* margin-right: 10px;  */
		margin-left: 10px;
		margin-bottom: 2px;
		vertical-align: middle;
	}
</style>
