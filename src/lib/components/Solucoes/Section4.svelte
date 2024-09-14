<script lang="ts">
	import { checkmark_2_svg } from '$lib';
	import * as m from '$paraglide/messages';
</script>

<section class="w-full my-20 relative rounded-lg">
	<!-- flex flex-row justify-center lg:space-x-2 xl:space-x-4 -->
	<div
		class="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 max-w-screen-2xl mx-auto xl:space-x-5 p-3"
	>
		<div class="">
			<div class="rounded-t-lg h-[104px] bg-white flex justify-center items-center">
				<h1 class="Exo-Bold underline text-white text-3xl">
					<!-- Packages -->
					{@html m.produtos_MyMenthorIs()}
				</h1>
			</div>
			<div class=" h-[62px] flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Administrator License -->
					{@html m.solutions_AdministratorLicense()}
				</p>
			</div>
			<div class=" h-[62px] bg-white flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- User License -->
					{@html m.solutions_UserLicense()}
				</p>
			</div>
			<div class=" h-[62px] flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Viewer License -->
					{@html m.solutions_ViewerLicense()}
				</p>
			</div>
			<div class=" h-[62px] bg-white flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Technical Support (8x5) -->
					{@html m.solutions_TechnicalSupport()}
				</p>
			</div>
			<div class=" h-[62px] flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Framework, Knowledge Base and Online Training -->
					{@html m.solutions_FrameworkKnowledgeBaseAndOnlineTraining()}
				</p>
			</div>
			<div class=" h-[62px] bg-white flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Administrator / Architect (8h) -->
					{@html m.solutions_AdministratorArchitect()}
				</p>
			</div>
			<div class=" h-[62px] flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Business Diagnosis and Implementation Strategy -->
					{@html m.solutions_BusinessDiagnosisAndImplementationStrategy()}
				</p>
			</div>
			<div class=" h-[62px] bg-white flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Customer Success -->
					{@html m.solutions_CustomerSuccess()}
				</p>
			</div>
			<div class=" h-[62px] flex items-center border-b">
				<p class="text-base Archivo text-[#25285F]">
					<!-- Ongoing - Mentoring / Consulting (Package of hours) -->
					{@html m.solutions_OngoingMentoringConsulting()}
				</p>
			</div>
		</div>
		<div class=" border border-gray-200 shadow-md rounded">
			<div class="rounded-t-lg h-[104px] bg-[#EB642A] flex justify-center items-center">
				<h1 class="Exo-Bold underline text-[#F1F1F9] text-3xl">STARTER</h1>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">1</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">2</p>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">5</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F]">4 Tickets</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">5</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">6</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">7</p> -->
				<!-- <img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/> -->
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">8</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">
					<!-- Adicional -->
					{@html m.solutions_Additional()}
				</p>
			</div>
		</div>
		<div class=" border border-gray-200 shadow-md rounded">
			<div class="rounded-t-lg h-[104px] bg-[#8ABB3F] flex justify-center items-center">
				<h1 class="Exo-Bold underline text-[#F1F1F9] text-3xl">BASIC</h1>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">1</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">5</p>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">25</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F]">8 Tickets</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">5</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">6</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">7</p> -->
				<!-- <img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/> -->
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">8</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">
					<!-- Adicional -->
					<!-- {@html m.produtos_MyMenthorIs()} -->
					{@html m.solutions_Additional()}
				</p>
			</div>
		</div>
		<div class=" border border-gray-200 shadow-md rounded">
			<div class="rounded-t-lg h-[104px] bg-[#454AB0] flex justify-center items-center">
				<h1 class="Exo-Bold underline text-[#F1F1F9] text-3xl">PREMIUM</h1>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">1</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">10</p>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">50</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F]">12 Tickets</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">5</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">6</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">7</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">8</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">
					<!-- Adicional -->
					{@html m.solutions_Additional()}
				</p>
			</div>
		</div>
		<div class=" border border-gray-200 shadow-md rounded">
			<div class="rounded-t-lg h-[104px] bg-[#FCC614] flex justify-center items-center">
				<h1 class="Exo-Bold underline text-[#17193B] text-3xl">ENTERPRISE</h1>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">1</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">TBD</p>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">TBD</p>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F]">TBD</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">5</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">6</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">7</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-white flex justify-center items-center">
				<!-- <p class="text-xl Archivo text-[#25285F] ">8</p> -->
				<img
					src={checkmark_2_svg}
					alt="Checkmark Icon"
					loading="lazy"
					decoding="sync"
					fetchpriority="low"
				/>
			</div>
			<div class=" h-[62px] bg-[#F1F1F9] flex justify-center items-center">
				<p class="text-xl Archivo text-[#25285F]">
					<!-- Adicional -->
					{@html m.solutions_Additional()}
				</p>
			</div>
		</div>
	</div>
	<div class="flex justify-center my-20">
		<button class="Exo">
			<a
				class="btn-demo bg-[#8abb3f] block w-full rounded-xl px-10 py-4 text-lg text-[#17193B] focus:ring sm:w-auto z-10 relative"
				href="/company/#contact"
			>
				<!-- Schedule a Demo -->
				{@html m.footer_Contact_us()}
			</a>
		</button>
	</div>
</section>

<!-- <style>
	.btn-agendar::after {
		content: url('$lib/assets/svg/arrow_right_2.svg');
		display: inline-block;
		/* vertical-align: middle; */
		margin-left: 10px;
	}
</style> -->
