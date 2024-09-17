<script lang="ts">
	import { fly } from 'svelte/transition';
	// export let form;
	import { page } from '$app/stores';
	import { ebook_cover_en_3, ebook_cover_pt_3 } from '$lib';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import TelInputComponent from '$lib/components/TelInputComponentFormLanding.svelte';
	import { isProfessionalEmail } from '$lib/functions/emailValidator.js';
	// import { sendPdf } from '$lib/functions/sendPdf';
	import * as m from '$paraglide/messages';
	import { selectedCountryStore } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { quintOut } from 'svelte/easing';
	export let closePopup: () => void;

	let selectedCountry: any;
	selectedCountryStore.subscribe((value) => {
		selectedCountry = value;
	});

	export const isFormLanding = true;

	let fullName = '';
	let email = '';
	let country = 'United States';
	let phone = '';
	let company = '';
	let position = '';
	// ---------------------
	let errorMessage = '';

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		// validation
		if (!fullName || !email) {
			alert('Please fill in all required fields.');
			return;
		}
		// Por favor, use um endereço de e-mail profissional
		// if (!isProfessionalEmail(email)) {
		// alert(`${m.form_profissionalEmailAddress()}`);
		// alert('Please use a professional email address.');
		// return;
		// }
		// validation
		if (!fullName || !email) {
			alert('Please fill in all required fields.');
			return;
		}

		// Prepare form data to send to Zoho CRM endpoint
		const formData = new FormData();
		formData.append('xnQsjsdp', 'db156b5477c72a66c88c7e4a9839776abc55fd23cb033cf593bae78a1853ba8f');
		formData.append(
			'xmIwtLD',
			'23d72370a8d44038b006d2656631fdc8ef8fcbf5c182cef0fa23bbc7a86931b67aead827ebcef90d3becf9f131b1ffd7'
		);
		formData.append('actionType', 'TGVhZHM=');
		formData.append('returnURL', 'null');
		formData.append('Last Name', fullName);
		formData.append('Email', email);
		formData.append('Country', selectedCountry);
		formData.append('Mobile', phone);
		formData.append('Company', company);
		formData.append('LEADCF3', position);
		if (!isPtBr) {
			formData.append('LEADCF23', 'Sustaining Transformation through Business Architecture');
		} else {
			formData.append('LEADCF23', 'Sustentando a Transformação');
		}
		// formData.append('LEADCF23', '-None-');
		// formData.append('LEADCF23', 'Sustaining&#x20;Transformation&#x20;through&#x20;Business&#x20;Architecture');

		try {
			const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				fullName = '';
				email = '';
				country = 'United States';
				phone = '';
				company = '';
				position = '';
				message = '';
			}
			// else {
			// 	console.error('HTTP error:', response.status);
			// 	alert(`${m.form_submit_error()}`);
			// }
		} catch (error) {
			console.error('Form sent');
			// alert(`${m.form_submit_error()}`);
		} finally {
			alert(`${m.form_submit_success()}`);
			closePopup();
		}
	};

	// $: pathUrl = $page.url.pathname;

	const pathUrl = get(page).url.pathname;
	const selectedImage = pathUrl === '/' ? ebook_cover_en_3 : ebook_cover_pt_3;

	// const browserLang = pathUrl ? 'pt-BR' : 'en';
	const isPtBr = pathUrl.startsWith('/pt-BR/');
</script>

<section class="bg-[#F1F1F9] w-full items-center relative rounded-3xl Exo">
	<div class="flex flex-col-reverse sm:flex-row rounded-l-3xl max-w-screen-md max-sm:max-w-sm">
		<div class="sm:w-1/2 flex justify-end items-center rounded-l-3xl bookbg2">
			<div class=" m-auto sm:p-1">
				<!-- <h1 class="text-transparent pointer-events-none">
					Sustaining: Transformation through business architecture by My Menthor
				</h1> -->
				<img src={selectedImage} alt="ebook cover " class="max-w-[23rem]" />
			</div>
		</div>

		<div
			class="bookbg sm:w-1/2 w-full h-full
         sm:rounded-r-3xl"
		>
			<div class="w-full max-sm:hidden bg-[#ABAEBC] px-8 rounded-r-3xl">
				<h1 class="text-xl font-bold leading-tight py-5 text-[#fff]">
					{m.form_title_landing()}
				</h1>
				<div id="crmWebToEntityForm" class="relative bottom-0">
					<form
						action="https://crm.zoho.com/crm/WebToLeadForm"
						onSubmit="javascript:document.charset=`UTF-8`;"
						id="webform5699482000002169001"
						name="WebToLeads5699482000002169001"
						method="POST"
						class="flex flex-col md:gap-y-3 p-1"
						accept-charset="UTF-8"
						on:submit={handleSubmit}
					>
						<input
							type="text"
							style="display:none;"
							name="xnQsjsdp"
							value="db156b5477c72a66c88c7e4a9839776abc55fd23cb033cf593bae78a1853ba8f"
						/>

						<input type="hidden" name="zc_gad" id="zc_gad" value="" />
						<input
							type="text"
							style="display:none;"
							name="xmIwtLD"
							value="23d72370a8d44038b006d2656631fdc8ef8fcbf5c182cef0fa23bbc7a86931b67aead827ebcef90d3becf9f131b1ffd7"
						/>
						<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
						<input type="text" style="display:none;" name="returnURL" value="null" />
						<!-- Convert form fields to use Svelte's reactive variables -->

						<label for="Last_Name" class="block">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_fullname()}
							</span>
							<input
								id="Last_Name"
								name="Last Name"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
								type="text"
								bind:value={fullName}
								placeholder={m.ph_fullname()}
								required
							/>
						</label>

						<label for="email" class="block">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_email()}
							</span>
							<input
								id="email"
								name="Email"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
								type="email"
								inputmode="email"
								bind:value={email}
								placeholder={m.ph_email()}
								required
							/>
						</label>

						{#if errorMessage}
							<p style="color: red;">{errorMessage}</p>
						{/if}

						<label for="Country" class="hidden blockd">
							<span
								class="hidden Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 blockd"
							>
								Country
							</span>
							<input
								class="hidden text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-3xl focus:ring-1"
								type="text"
								placeholder="Country"
								id="Country"
								name="Country"
								disabled
							/>
						</label>

						<label class="block" for="Mobile">
							<span
								class="bg-transparent Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block"
							>
								{m.form_phone()}
							</span>
							<TelInputComponent bind:value={phone} id="Mobile" name="Mobile" {isFormLanding} />
						</label>

						<label class="block" for="Company">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_company()}
							</span>
							<input
								id="Company"
								name="Company"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
								type="text"
								bind:value={company}
								placeholder={m.ph_company()}
							/>
						</label>
						<label class="block" for="LEADCF3">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_role()}
							</span>
							<input
								id="LEADCF3"
								name="LEADCF3"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
								type="text"
								bind:value={position}
								placeholder={m.ph_role()}
							/>
						</label>
						<!-- hidden -->
						<label for="LEADCF23" class="hidden">
							<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
								<label for="LEADCF23">Formul&aacute;rio</label>
							</div>
							<div class="zcwf_col_fld">
								<select class="zcwf_col_fld_slt" id="LEADCF23" name="LEADCF23">
									<option value="-None-">-None-</option>
									<option
										value="Sustaining&#x20;Transformation&#x20;through&#x20;Business&#x20;Architecture"
										selected={!isPtBr}
									>
										Sustaining Transformation through Business Architecture
									</option>

									<option
										value="Sustentando&#x20;a&#x20;Transforma&ccedil;&atilde;o"
										selected={isPtBr}
									>
										Sustentando a Transformação
									</option>
								</select>
								<div class="zcwf_col_help"></div>
							</div>
							<!-- <span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_role()}
							</span>
							<input
								id="LEADCF3"
								name="LEADCF3"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
								type="text"
								bind:value={position}
								placeholder={m.ph_role()}
							/> -->
						</label>

						<div class=" text-center flex p-1 gap-3">
							<button
								id="formsubmit"
								type="submit"
								class="btn-demo block rounded-xl p-1.5 text-lg font-medium bg-[#fff] text-[#ABAEBC] hover:text-[#52535a] focus:ring sm:w-auto Archivo ml-auto"
								>{m.zoho_btn_ebook()}</button
							>
						</div>
					</form>
				</div>
			</div>

			<div class="w-full summary-details sm:hidden absolute">
				<details class="sm:hidden">
					<summary
						transition:fly={{
							delay: 250,
							duration: 300,
							x: 100,
							y: 500,
							opacity: 0.5,
							easing: quintOut
						}}
						class="flex rounded-t-3xl text-white bg-[#ABAEBC] cursor-pointer hover:bg-[#8a8c97]"
					>
						<h1 class="text-md font-bold leading-tight p-6 m-0">
							Click here to {m.form_title_landing()}
						</h1>
					</summary>

					<div
						class=" bg-[#ABAEBC] w-full px-5
                      flex items-center justify-center rounded-b-lg"
					>
						<div id="crmWebToEntityForm" class="bottom-0">
							<form
								onSubmit="javascript:document.charset=`UTF-8`;"
								action="https://crm.zoho.com/crm/WebToLeadForm"
								id="webform5699482000002169001"
								name="WebToLeads5699482000002169001"
								method="POST"
								class="flex flex-col md:gap-y-5 p-1"
								accept-charset="UTF-8"
								on:submit={handleSubmit}
							>
								<input
									type="text"
									style="display:none;"
									name="xnQsjsdp"
									value="db156b5477c72a66c88c7e4a9839776abc55fd23cb033cf593bae78a1853ba8f"
								/>

								<input type="hidden" name="zc_gad" id="zc_gad" value="" />
								<input
									type="text"
									style="display:none;"
									name="xmIwtLD"
									value="23d72370a8d44038b006d2656631fdc8ef8fcbf5c182cef0fa23bbc7a86931b67aead827ebcef90d3becf9f131b1ffd7"
								/>
								<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
								<input type="text" style="display:none;" name="returnURL" value="null" />
								<!-- Convert form fields to use Svelte's reactive variables -->

								<label for="Last_Name" class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_fullname()}
									</span>
									<input
										id="Last_Name"
										name="Last Name"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
										type="text"
										bind:value={fullName}
										placeholder={m.ph_fullname()}
										required
									/>
								</label>

								<label for="email" class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_email()}
									</span>
									<input
										name="Email"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
										type="email"
										inputmode="email"
										bind:value={email}
										id="email"
										placeholder={m.ph_email()}
										required
									/>
								</label>

								{#if errorMessage}
									<p style="color: red;">{errorMessage}</p>
								{/if}

								<label for="Country" class="hidden blockd">
									<span
										class="hidden Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 blockd"
									>
										Country
									</span>
									<input
										class="hidden text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-3xl focus:ring-1"
										type="text"
										placeholder="Country"
										id="Country"
										name="Country"
										disabled
									/>
								</label>

								<label for="Mobile" class="block">
									<span
										class="bg-transparent Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block"
									>
										{m.form_phone()}
									</span>
									<TelInputComponent bind:value={phone} id="Mobile" name="Mobile" />
								</label>

								<label for="Company" class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_company()}
									</span>
									<input
										id="Company"
										name="Company"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
										type="text"
										bind:value={company}
										placeholder={m.ph_company()}
									/>
								</label>
								<label for="LEADCF3" class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_role()}
									</span>
									<input
										id="LEADCF3"
										name="LEADCF3"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
										type="text"
										bind:value={position}
										placeholder={m.ph_role()}
									/>
								</label>
								<label for="LEADCF23" class="hidden">
									<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
										<label for="LEADCF23">Formul&aacute;rio</label>
									</div>
									<div class="zcwf_col_fld">
										<select class="zcwf_col_fld_slt" id="LEADCF23" name="LEADCF23">
											<option value="-None-">-None-</option>
											<option
												value="Sustaining&#x20;Transformation&#x20;through&#x20;Business&#x20;Architecture"
												selected={!isPtBr}
											>
												Sustaining Transformation through Business Architecture
											</option>

											<option
												value="Sustentando&#x20;a&#x20;Transforma&ccedil;&atilde;o"
												selected={isPtBr}
											>
												Sustentando a Transformação
											</option>
										</select>
										<div class="zcwf_col_help"></div>
									</div>
									<!-- <span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_role()}
									</span>
									<input
										id="LEADCF3"
										name="LEADCF3"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl focus:ring-1"
										type="text"
										bind:value={position}
										placeholder={m.ph_role()}
									/> -->
								</label>

								<div class=" text-center flex p-3 gap-3">
									<button
										id="formsubmit"
										type="submit"
										class="btn-demo block rounded-xl p-2 text-xl font-medium bg-[#fff] text-[#ABAEBC] hover:text-[#52535a] focus:ring sm:w-auto Archivo ml-auto"
										>{m.zoho_btn_ebook()}</button
									>
								</div>
							</form>
						</div>
					</div>
				</details>
			</div>
		</div>
	</div>
</section>

<style>
	/* .bg-transparent{
		background-color: transparent;
	} */

	/* .bookbg {
		background-image: url('$lib/assets/images/ebook_cover_en.webp');
		background-color: #abaebc;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		background-size: cover;
		opacity: 50%;
	} */

	.bookbg2 {
		zoom: 1;
		/* background-color: #abaebc; */
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		/* background-size: cover; */
		/* opacity: 50%; */
	}

	details[open] summary ~ * {
		animation: slide-down 0.3s cubic-bezier(0.77, 0, 0.175, 1);
		transform-origin: top;
	}

	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-40%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	details:not([open]) summary ~ * {
		animation: slide-up 0.3s cubic-bezier(0.77, 0, 0.175, 1);
	}

	@keyframes slide-up {
		0% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-40%);
		}
	}

	/* Accessibility: Disable animations for users who prefer reduced motion */
	@media (prefers-reduced-motion: reduce) {
		details[open] summary ~ *,
		details:not([open]) summary ~ * {
			animation: none; /* Disable animations */
			transition: none; /* Disable transitions */
		}
	}
</style>
