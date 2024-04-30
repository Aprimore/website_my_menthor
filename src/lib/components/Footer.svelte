<script lang="ts">
	import { base } from '$app/paths';
	import {
		arrow_right_svg,
		facebook_svg,
		instagram_svg,
		linkedin_svg,
		logo_footer_png,
		mail_svg,
		youtube_svg
	} from '$lib';
	import Copyright from './Copyright.svelte';
</script>

<footer class="footer relative bg-[#17193b] w-full">
	<div class="container mx-auto">
		<div class=" p-12">
			<div class="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-20 mx-auto p-6">
				<div class="mx-auto">
					<div class="w-full mb-10">
						<a href="{base}/" class="mb-6 inline-block max-w-[250px]">
							<img
								src={logo_footer_png}
								alt="logo"
								class="inset-0 w-full h-full object-cover size-96"
							/>
						</a>

						<!-- <div class="email_link">
						<a href="{base}#" class="text-[#D4D4ED] email">
							<span class="mail-icon"></span>
							
						
						</a>
					</div> -->

						<button class=" flex flex-wrap gap-4">
							<a
								class="Exo btn-agendar bg-[#8abb3f] flex items-center text-base text-[#17193B] py-4 px-10 mt-5 rounded-lg relative lg:whitespace-nowrap"
								href="{base}/company#contact"
							>
								Schedule a Demo
								<img
									src={arrow_right_svg}
									class="z-10 absolute right-5 bottom-[22px] size-3"
									alt=""
								/>
							</a>
						</button>
					</div>
				</div>

				<div class="lg:ml-24 w-full">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Product</h4>
						<ul class="space-y-3">
							<li>
								<a href="{base}/products#platform" class="text-[#D4D4ED] text-sm"
									>About the Platform</a
								>
							</li>
							<li>
								<a href="{base}/products#target-audience" class="text-[#D4D4ED] text-sm">
									Target Audience
								</a>
							</li>
						</ul>
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5 mt-5">Solutions</h4>
						<ul class="space-y-3">
							<li>
								<a href="{base}/solutions#modules" class="text-[#D4D4ED] text-sm"> The Platform </a>
							</li>
							<li>
								<a href="{base}/solutions#portfolio-services" class="text-[#D4D4ED] text-sm">
									Portfolio of Services
								</a>
							</li>
							<li>
								<a href="{base}/solutions#packages" class="text-[#D4D4ED] text-sm">Packages</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="lg:ml-24 w-full">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Stakeholders</h4>
						<ul class="space-y-3">
							<li>
								<a href="{base}/customers_and_partners#clients" class="text-[#D4D4ED] text-sm">
									Clients
								</a>
							</li>
							<li>
								<a href="{base}/customers_and_partners#cases" class="text-[#D4D4ED] text-sm">
									Success Stories
								</a>
							</li>
							<li>
								<a href="{base}/customers_and_partners#support" class="text-[#D4D4ED] text-sm">
									Customer Support
								</a>
							</li>
							<li>
								<a href="{base}/customers_and_partners" class="text-[#D4D4ED] text-sm">
									Partner Program
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="lg:ml-24 w-full">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Resources</h4>
						<ul class="space-y-3">
							<li>
								<a href="{base}/" class="text-[#D4D4ED] text-sm">Blog</a>
							</li>
							<li>
								<a href="{base}/" class="text-[#D4D4ED] text-sm">Events & Webinar</a>
							</li>
							<li>
								<a href="{base}/" class="text-[#D4D4ED] text-sm">My Menthor Academy</a>
							</li>
							<li>
								<a href="{base}/" class="text-[#D4D4ED] text-sm">Knowledge Base</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="lg:ml-24 w-full relative">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Enterprise</h4>
						<ul class="space-y-3">
							<li>
								<a href="{base}/company#about" class="text-[#D4D4ED] text-sm">About Us</a>
							</li>
							<li>
								<a href="{base}/company#purpose" class="text-[#D4D4ED] text-sm">Purpose</a>
							</li>
							<li>
								<a href="{base}/company#contact" class="text-[#D4D4ED] text-sm">Contact Us</a>
							</li>
						</ul>
					</div>
					<div class="md:absolute bottom-0">
						<div class="flex space-x-7">
							<a href="{base}/" class="flex items-center justify-center w-8 h-8" target="_blank">
								<img src={youtube_svg} alt="" />
							</a>
							<a href="{base}/" class="flex items-center justify-center w-8 h-8" target="_blank">
								<img src={linkedin_svg} alt="" />
							</a>
							<a href="{base}/" class="flex items-center justify-center w-8 h-8" target="_blank">
								<img src={facebook_svg} alt="" />
							</a>
							<a href="{base}/" class="flex items-center justify-center w-8 h-8" target="_blank">
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
