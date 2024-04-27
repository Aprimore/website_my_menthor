<script lang="ts">
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

<footer class="footer relative">
	<div class="container mx-auto">
		<div class="flex flex-row p-12">
			<div class=" px-4 sm:w-2/3 lg:w-3/12">
				<div class="w-full mb-10">
					<a href="/" class="mb-6 inline-block max-w-[250px]">
						<img
							src={logo_footer_png}
							alt="logo"
							class="inset-0 w-full h-full object-cover size-96"
						/>
					</a>

					<!-- <div class="email_link">
						<a href="#" class="text-[#D4D4ED] email">
							<span class="mail-icon"></span>
							
						
						</a>
					</div> -->

					<button class=" flex flex-wrap gap-4">
						<a
							class="Exo btn-agendar flex items-center text-base text-[#17193B] py-4 px-10 mt-5 rounded-lg relative"
							href="#"
						>
							Agendar Demonstração
							<img
								src={arrow_right_svg}
								class="z-10 absolute right-5 bottom-[22px] size-3"
								alt=""
							/>
						</a>
					</button>
				</div>
			</div>

			<div class="flex flex-row justify-end w-full px-4 pl-8">
				<div class="w-full px-4 sm:w-1/2 lg:w-[22%] pl-8">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Produto</h4>
						<ul class="space-y-3">
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Sobre a plataforma </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Público-alvo </a>
							</li>
						</ul>
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5 mt-5">Soluções</h4>
						<ul class="space-y-3">
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm">
									Metodologia e funcionalidades
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm">
									Portfólio de serviços
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Pacotes </a>
							</li>
						</ul>
					</div>
				</div>
				<div class="w-full px-4 sm:w-1/2 lg:w-[22%] pl-8">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Stakeholders</h4>
						<ul class="space-y-3">
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Clientes </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm">
									Histórias de sucesso
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Suporte ao cliente </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm">
									Programa de parceiros
								</a>
							</li>
						</ul>
					</div>
				</div>
				
				<div class="w-full px-4 sm:w-1/2 lg:w-[22%] pl-8">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Recursos</h4>
						<ul class="space-y-3">
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Blog </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Eventos e webinar </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm">
									Academia My Menthor
								</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm">
									Base de conhecimento
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="w-full px-4 sm:w-1/2 lg:w-[22%] relative">
					<div class="w-full mb-10">
						<h4 class="text-lg font-semibold text-dark dark:text-white mb-5">Empresa</h4>
						<ul class="space-y-3">
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Sobre nós </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Propósito </a>
							</li>
							<li>
								<a href="javascript:void(0)" class="text-[#D4D4ED] text-sm"> Fale conosco </a>
							</li>
						</ul>
					</div>
					<div class="absolute bottom-0">
						<div class="flex space-x-7">
							<a href="/" class="flex items-center justify-center w-8 h-8" target="_blank">
								<img src={youtube_svg} alt="" />
							</a>
							<a href="/" class="flex items-center justify-center w-8 h-8" target="_blank">
								<img src={linkedin_svg} alt="" />
							</a>
							<a href="/" class="flex items-center justify-center w-8 h-8" target="_blank">
								<img src={facebook_svg} alt="" />
							</a>
							<a href="/" class="flex items-center justify-center w-8 h-8" target="_blank">
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

<style>
	.footer {
		background-color: #17193b;
	}

	.btn-agendar {
		background-color: #8abb3f;
		color: black;
	}

	.email_link::before {
		content: url('$lib/assets/svg/mail.svg');
		margin-right: 10px; /* Adjust as needed */
	}
</style>
