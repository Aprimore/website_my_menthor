<script>
	import { linha_h_1_svg, linha_h_4_svg, linha_v_1_svg, portfolio_servicos_png } from '$lib';
</script>

<section class="w-full items-center relative rounded-lg mt-20 bg-[#F1F1F9]">
	<div class="max-w-screen-2xl pt-20 flex justify-center mx-auto">
		<div class="w-1/2 flex flex-col justify-center">
			<div>
				<h1 class="text-1xl sm:text-5xl relative Exo font-extrabold text-[#17193B] text-center">
					Portfolio of services
					<span><img src={linha_h_4_svg} class="z-10 absolute right-64" alt="linha" /></span>
				</h1>
			</div>
			<img
				src={portfolio_servicos_png}
				class=" cover size-[
                300px
            ] mx-auto mt-10"
				alt=""
			/>
		</div>

		<div class="w-1/2 flex flex-col justify-center">
			<div class="max-w-2xl flex flex-col self-center">
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					We carry out assessment, implementation consultancy and setup and we help our clients
					develop a strategy and roadmap for implementation roadmap.
				</p>
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					In <strong> addition to the software </strong>, we also offer mentoring and consultancy
					services to ensure the client's success, monitoring their progress and boosting their
					results. We also guarantee continuous availability of the platform and specialized
					technical support.
				</p>
				<p class="mb-8 Archivo text-lg text-[#25285F]">
					We aim for customer success, guiding the user through the entire implementation journey,
					offering step-by-step implementation journey, guidance to achieve results, through
					knowledge base, targeted training and regular follow-up. Our aim is to ensure that each
					client achieves their objectives and extracts maximum value from our platform.
				</p>
			</div>
			<div class="max-w-2xl flex flex-col self-center h-[150px] w-[695px] bg-[#17193B] rounded-md">
				<div class="flex justify-center my-auto relative">
					<span class="absolute left-16"><img src={linha_v_1_svg} alt="" /></span>
					<p class="max-w-lg ml-5 mt-3 Archivo text-lg text-[#F1F1F9]">
						<span class="text-[#FCC614]"> We act as business partners </span>
						in management solutions before, during and after implementation, in pursuit of effective
						results for our clients.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
