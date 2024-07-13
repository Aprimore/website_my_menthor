<script lang="ts">
	import { page } from '$app/stores';
	import { ebook_cover_en2, ebook_cover_pt2 } from '$lib';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import * as m from '$lib/paraglide/messages';
	import TelInputComponent from '$lib/components/TelInputComponentFormLanding.svelte';
	import { isProfessionalEmail } from '$lib/functions/emailValidator.js';
	import { selectedCountryStore } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let selectedCountry: any;
	selectedCountryStore.subscribe((value) => {
		selectedCountry = value;
	});

	export const isFormLanding = true;


	// let areaOfInterest = '';
	let fullName = '';
	let email = '';
	let country = 'United States';
	let phone = '';
	let company = '';
	let position = '';
	// let message = '';
	// ---------------------
	let errorMessage = '';

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		// Perform any necessary form validation
		if (!fullName || !email) {
			alert('Please fill in all required fields.');
			return;
		}
		// Por favor, use um endereço de e-mail profissional
		if (!isProfessionalEmail(email)) {
			alert(`${m.form_profissionalEmailAddress()}`);
			// alert('Please use a professional email address.');
			return;
		}

		// Perform any necessary form validation
		if (!fullName || !email) {
			alert('Please fill in all required fields.');
			return;
		}

		// Prepare form data to send to Zoho CRM endpoint
		const formData = new FormData();
		formData.append('xnQsjsdp', '0afeca1a83d2be29cad9dc2d8a37e8f3d35be7978017274f40bbc07d1f169340');
		formData.append(
			'xmIwtLD',
			'5a87345b8b9b1b951b64a0c913eb4b4cb6cafd7e1f4b8519f9a87df2f28179339608b7c95a65f83b6f01fd5ba9569924'
		);
		formData.append('actionType', 'TGVhZHM=');
		formData.append('returnURL', 'null');
		// formData.append('LEADCF8', areaOfInterest);
		formData.append('Last Name', fullName);
		formData.append('Email', email);
		formData.append('Country', selectedCountry);
		formData.append('Mobile', phone);
		formData.append('Company', company);
		formData.append('LEADCF3', position);
		// formData.append('LEADCF5', message);
		// Add additional form fields as needed

		alert(`${m.form_submit_success()}`);
	};
	const pathUrl = get(page).url.pathname;
	const selectedImage = pathUrl === '/' ? ebook_cover_en2 : ebook_cover_pt2;
</script>

<section class="bg-[#F1F1F9] w-full items-center relative rounded-l-lg Exo">
	<div class="flex flex-col-reverse sm:flex-row rounded-l-lg max-w-screen-md max-sm:max-w-sm">
		<div class="sm:w-1/2 flex justify-end items-center rounded-l-lg bookbg2">
			<div class=" m-auto sm:p-1">
				<!-- <h1 class="text-transparent pointer-events-none">
					Sustaining: Transformation through business architecture by My Menthor
				</h1> -->
				<img src={selectedImage} alt="ebook cover" class=" transform -rotate-[1deg] top-0" />
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
						onSubmit="javascript:document.charset=`UTF-8`;"
						action="https://crm.zoho.com/crm/WebToLeadForm"
						id="webform5699482000001517009"
						name="WebToLeads5699482000001517009"
						method="POST"
						class="flex flex-col md:gap-y-3 p-1"
						accept-charset="UTF-8"
						on:submit={handleSubmit}
					>
						<input
							type="text"
							style="display:none;"
							name="xnQsjsdp"
							value="2881cbb79ac3eb1a026c8673ec449830c1973a1255cf88cb1a9309eed99d23b4"
						/>

						<input type="hidden" name="zc_gad" id="zc_gad" value="" />
						<input
							type="text"
							style="display:none;"
							name="xmIwtLD"
							value="f88f60bd9c8b8609b49132ee09cc50fafaad885567dcb6add9a6965e39b7c4a39739ba2fc4dea3cb997bc4b1fd4e3d7c"
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
								class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
								class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
								class="hidden text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
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
								class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
								class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								type="text"
								bind:value={position}
								placeholder={m.ph_role()}
							/>
						</label>
						<!-- <label class="block">
							<span
								class="Exo-Semibold text-[#fff] text-lg after:content-['*'] after:ml-0.5 block"
							>
								{m.form_message()}
							</span>
							<textarea
								id="LEADCF5"
								name="LEADCF5"
								bind:value={message}
								placeholder={m.ph_message()}
								class="text-sm p-3 bg-transparent border placeholder-white  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 max-h-96"
								rows="5"
								cols="50"
								required
							></textarea>
						</label> -->
						<!-- Add additional form fields as needed -->

						<!-- Add form submission buttons download-->
						<div class=" text-center flex p-1 gap-3">
							<button
								id="formsubmit"
								type="submit"
								class="btn-demo block rounded-xl p-1.5 text-lg font-medium bg-[#fff] text-[#ABAEBC] hover:text-[#52535a] focus:ring sm:w-auto z-10 Archivo ml-auto"
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
						<div id="crmWebToEntityForm" class=" bottom-0">
							<form
								onSubmit="javascript:document.charset=`UTF-8`;"
								action="https://crm.zoho.com/crm/WebToLeadForm"
								id="webform5699482000001517009"
								name="WebToLeads5699482000001517009"
								method="POST"
								class="flex flex-col md:gap-y-5 p-1"
								accept-charset="UTF-8"
								on:submit={handleSubmit}
							>
								<input
									type="text"
									style="display:none;"
									name="xnQsjsdp"
									value="2881cbb79ac3eb1a026c8673ec449830c1973a1255cf88cb1a9309eed99d23b4"
								/>

								<input type="hidden" name="zc_gad" id="zc_gad" value="" />
								<input
									type="text"
									style="display:none;"
									name="xmIwtLD"
									value="f88f60bd9c8b8609b49132ee09cc50fafaad885567dcb6add9a6965e39b7c4a39739ba2fc4dea3cb997bc4b1fd4e3d7c"
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
										class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
										class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
										class="hidden Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 blockd"
									>
										Country
									</span>
									<input
										class="hidden text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
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
										class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
										class="text-sm p-3 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
										type="text"
										bind:value={position}
										placeholder={m.ph_role()}
									/>
								</label>
								<!-- <label class="block">
							<span
								class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
							>
								{m.form_message()}
							</span>
							<textarea
								id="LEADCF5"
								name="LEADCF5"
								bind:value={message}
								placeholder={m.ph_message()}
								class="text-sm p-3 bg-transparent border placeholder-white  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 max-h-96"
								rows="5"
								cols="50"
								required
							></textarea>
						</label> -->
								<!-- Add additional form fields as needed -->

								<!-- Add form submission buttons download-->
								<div class=" text-center flex p-3 gap-3">
									<button
										id="formsubmit"
										type="submit"
										class="btn-demo block rounded-xl p-2 text-xl font-medium bg-[#fff] text-[#ABAEBC] hover:text-[#52535a] focus:ring sm:w-auto z-10 Archivo ml-auto"
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

	.shelfbg {
		background-image: url('$lib/assets/images/book_shelf2.webp');
		background-repeat: no-repeat;
		background-position: center; /* Adjust as needed */
		/* background-size: contain;  */
		background-size: cover; /* Use cover to stretch the image */
	}

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
		background-image: url('$lib/assets/images/ebook_cover_en.webp');
		zoom: 1;
		/* background-color: #abaebc; */
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		/* background-size: cover; */
		/* opacity: 50%; */
	}
</style>
