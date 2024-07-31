<script lang="ts">
	// export let form;
	import { page } from '$app/stores';
	import { ebook_cover_en_3, ebook_cover_pt_3 } from '$lib';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import TelInputComponent from '$lib/components/TelInputComponentFormLanding.svelte';
	import { isProfessionalEmail } from '$lib/functions/emailValidator.js';
	// import { sendPdf } from '$lib/functions/sendPdf';
	import * as m from '$lib/paraglide/messages';
	import { selectedCountryStore } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

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
		// 	alert(`${m.form_profissionalEmailAddress()}`);
		// 	// alert('Please use a professional email address.');
		// 	return;
		// }

		// validation
		if (!fullName || !email) {
			alert('Please fill in all required fields.');
			return;
		}

		// Prepare form data to send to Zoho CRM endpoint
		const formData = new FormData();
		formData.append('xnQsjsdp', '77572b91863c9e6937929b77678d9ecc206bba24c21de7351ab2ec4b38b2f464');
		formData.append(
			'xmIwtLD',
			'3db759aa41d35f7f2f4ce2d2dbeb637960c9e9af6f3ff99b79d8290f7f0fa70bfbc4a7da5cda4bf911215b59ab517bce'
		);
		formData.append('actionType', 'TGVhZHM=');
		formData.append('returnURL', 'null');
		formData.append('Last Name', fullName);
		formData.append('Email', email);
		formData.append('Country', selectedCountry);
		formData.append('Mobile', phone);
		formData.append('Company', company);
		formData.append('LEADCF3', position);

		console.log(formData);

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
				// console.log('Form submitted successfully:', response);
				alert(`${m.form_submit_success()}`);
			} else {
				// console.error('HTTP error:', response.status);
				alert(`${m.form_submit_error()}`);
			}
		} catch (error) {
			console.error('Fetch error:', error);
			alert(`${m.form_submit_error()}`);
		}
	};

	const pathUrl = get(page).url.pathname;
	const selectedImage = pathUrl === '/' ? ebook_cover_en_3 : ebook_cover_pt_3;
</script>

<section class="bg-[#F1F1F9] w-full items-center relative rounded-l-lg Exo">
	<div class="flex flex-col-reverse sm:flex-row rounded-l-lg max-w-screen-md max-sm:max-w-sm">
		<div class="sm:w-1/2 flex justify-end items-center rounded-l-lg bookbg2">
			<div class=" m-auto sm:p-1">
				<!-- <h1 class="text-transparent pointer-events-none">
					Sustaining: Transformation through business architecture by My Menthor
				</h1> -->
				<img src={selectedImage} alt="ebook cover " class="max-w-[23rem]" />
			</div>
		</div>

		<div
			class="bookbg sm:w-1/2 w-full h-full
         sm:rounded-r-lg"
		>
			<div class="w-full max-sm:hidden bg-[#ABAEBC] px-8">
				<h1 class="text-xl font-bold leading-tight py-5 text-[#fff]">
					{m.form_title_landing()}
				</h1>
				<div id="crmWebToEntityForm" class="relative bottom-0">
					<form
						action="https://crm.zoho.com/crm/WebToLeadForm"
						onSubmit="javascript:document.charset=`UTF-8`;"
						id="webform5699482000002094005"
						name="WebToLeads5699482000002094005"
						method="POST"
						class="flex flex-col md:gap-y-3 p-1"
						accept-charset="UTF-8"
						on:submit={handleSubmit}
					>
						<input
							type="text"
							style="display:none;"
							name="xnQsjsdp"
							value="77572b91863c9e6937929b77678d9ecc206bba24c21de7351ab2ec4b38b2f464"
						/>

						<input type="hidden" name="zc_gad" id="zc_gad" value="" />
						<input
							type="text"
							style="display:none;"
							name="xmIwtLD"
							value="3db759aa41d35f7f2f4ce2d2dbeb637960c9e9af6f3ff99b79d8290f7f0fa70bfbc4a7da5cda4bf911215b59ab517bce"
						/>
						<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
						<input type="text" style="display:none;" name="returnURL" value="null" />
						<!-- Convert form fields to use Svelte's reactive variables -->

						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_fullname()}
							</span>
							<input
								id="Last_Name"
								name="Last Name"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								type="text"
								bind:value={fullName}
								placeholder={m.ph_fullname()}
								required
							/>
						</label>

						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_email()}
							</span>
							<input
								id="email"
								name="Email"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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

						<label class="hidden blockd">
							<span
								class="hidden Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 blockd"
							>
								Country
							</span>
							<input
								class="hidden text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
								type="text"
								placeholder="Country"
								id="Country"
								name="Country"
								disabled
							/>
						</label>

						<label class="block">
							<span
								class="bg-transparent Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block"
							>
								{m.form_phone()}
							</span>
							<TelInputComponent bind:value={phone} id="Mobile" name="Mobile" {isFormLanding} />
						</label>

						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_company()}
							</span>
							<input
								id="Company"
								name="Company"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								type="text"
								bind:value={company}
								placeholder={m.ph_company()}
							/>
						</label>
						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block">
								{m.form_role()}
							</span>
							<input
								id="LEADCF3"
								name="LEADCF3"
								class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								type="text"
								bind:value={position}
								placeholder={m.ph_role()}
							/>
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
						class="flex rounded-t-lg text-white bg-[#ABAEBC] cursor-pointer hover:bg-[#8a8c97]"
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
								id="webform5699482000002094005"
								name="WebToLeads5699482000002094005"
								method="POST"
								class="flex flex-col md:gap-y-5 p-1"
								accept-charset="UTF-8"
								on:submit={handleSubmit}
							>
								<input
									type="text"
									style="display:none;"
									name="xnQsjsdp"
									value="77572b91863c9e6937929b77678d9ecc206bba24c21de7351ab2ec4b38b2f464"
								/>

								<input type="hidden" name="zc_gad" id="zc_gad" value="" />
								<input
									type="text"
									style="display:none;"
									name="xmIwtLD"
									value="3db759aa41d35f7f2f4ce2d2dbeb637960c9e9af6f3ff99b79d8290f7f0fa70bfbc4a7da5cda4bf911215b59ab517bce"
								/>
								<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
								<input type="text" style="display:none;" name="returnURL" value="null" />
								<!-- Convert form fields to use Svelte's reactive variables -->

								<label class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_fullname()}
									</span>
									<input
										id="Last_Name"
										name="Last Name"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
										type="text"
										bind:value={fullName}
										placeholder={m.ph_fullname()}
										required
									/>
								</label>

								<label class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_email()}
									</span>
									<input
										name="Email"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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

								<label class="hidden blockd">
									<span
										class="hidden Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 blockd"
									>
										Country
									</span>
									<input
										class="hidden text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
										type="text"
										placeholder="Country"
										id="Country"
										name="Country"
										disabled
									/>
								</label>

								<label class="block">
									<span
										class="bg-transparent Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block"
									>
										{m.form_phone()}
									</span>
									<TelInputComponent bind:value={phone} id="Mobile" name="Mobile" />
								</label>

								<label class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_company()}
									</span>
									<input
										id="Company"
										name="Company"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
										type="text"
										bind:value={company}
										placeholder={m.ph_company()}
									/>
								</label>
								<label class="block">
									<span
										class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
									>
										{m.form_role()}
									</span>
									<input
										id="LEADCF3"
										name="LEADCF3"
										class="text-sm p-3 bg-transparent border placeholder-white text-[#fff] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
										type="text"
										bind:value={position}
										placeholder={m.ph_role()}
									/>
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
</style>
