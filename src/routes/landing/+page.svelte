<script lang="ts">
	import { page } from '$app/stores';
	import {
		ebook_cover_en,
		ebook_cover_pt,
		piramid_home_en_svg,
		piramid_home_pt_br_svg
	} from '$lib';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import * as m from '$lib/paraglide/messages';
	// export let data;

	// console.log('DATA URKL', data.url);
	// Define a variable to hold the selected SVG based on the lang prop
	// let piramid_home_svg = lang === 'pt-br' ? piramid_home_pt_br_svg : piramid_home_en_svg;

	import TelInputComponent from '$lib/components/TelInputComponent.svelte';
	import { isProfessionalEmail } from '$lib/functions/emailValidator.js';
	import { onMount } from 'svelte';
	import { selectedCountryStore } from '$lib/stores.js';

	let selectedCountry: any;
	selectedCountryStore.subscribe((value) => {
		// console.log('FORM ZOHO sc', value);
		selectedCountry = value;
	});

	// onMount(() => {
	// 	const unsubscribe = selectedCountryStore.subscribe((value) => {
	// 		paisSelecionado = value;
	// 	});

	// 	return unsubscribe;
	// });

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
		console.log(formData);

		try {
			const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				// areaOfInterest = '';
				fullName = '';
				email = '';
				country = 'United States';
				phone = '';
				company = '';
				position = '';
				// message = '';
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
</script>

<section
	class="bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo border-black"
>
	<div
		class="flex flex-col md:flex-row items-center lg:max-w-[92rem] m-auto my-5 h-[80vh] border-black"
	>
		<div
			class="h-full w-full md:w-1/2 xl:w-2/3 max-h-fit relative flex justify-end items-center border-white shelfbg"
		>
			<div
				class="bg-[#992066] border border-black relative right-0 max-h-[90%] max-w-[60%] m-auto flex mr-24"
			>
				<img
					src={ebook_cover_en}
					alt=""
					class=" transform -rotate-[20deg]
	  border-yellow-400 max-w-[90%] p-20 h-full"
				/>
			</div>
		</div>
		<div
			class="bg-[#ABAEBC] w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 h-full
        flex items-center justify-center"
		>
			<div class="w-full h-full">
				<h1 class="text-xl md:text-2xl font-bold leading-tight py-7 text-[#fff]">
					{m.form_title_landing()}
				</h1>
				<div id="crmWebToEntityForm">
					<form
						onSubmit="javascript:document.charset=`UTF-8`;"
						action="https://crm.zoho.com/crm/WebToLeadForm"
						id="webform5699482000001517009"
						name="WebToLeads5699482000001517009"
						method="POST"
						class="flex flex-col gap-y-5 p-1"
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
							<span class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block">
								{m.form_fullname()}
							</span>
							<input
								id="Last_Name"
								name="Last Name"
								class="text-md p-4 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								type="text"
								bind:value={fullName}
								placeholder={m.ph_fullname()}
								required
							/>
						</label>

						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block">
								{m.form_email()}
							</span>
							<input
								class="text-md p-4 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
								class="hidden text-md p-4 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
								type="text"
								placeholder="Country"
								id="Country"
								name="Country"
								disabled
							/>
						</label>

						<label class="block">
							<span
								class="bg-transparent Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block"
							>
								{m.form_phone()}
							</span>
							<TelInputComponent bind:value={phone} id="Mobile" name="Mobile" />
						</label>

						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block">
								{m.form_company()}
							</span>
							<input
								id="Company"
								name="Company"
								class="text-md p-4 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
								type="text"
								bind:value={company}
								placeholder={m.ph_company()}
							/>
						</label>
						<label class="block">
							<span class="Exo-Semibold text-[#fff] text-xl after:content-['*'] after:ml-0.5 block">
								{m.form_role()}
							</span>
							<input
								id="LEADCF3"
								name="LEADCF3"
								class="text-md p-4 bg-transparent border placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
								class="text-md p-4 bg-transparent border placeholder-white  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 max-h-96"
								rows="5"
								cols="50"
								required
							></textarea>
						</label> -->
						<!-- Add additional form fields as needed -->

						<!-- Add form submission buttons -->
						<div class=" text-center flex p-1 gap-3">
							<button
								id="formsubmit"
								type="submit"
								class="btn-demo block rounded-xl p-3 text-xl font-medium bg-[#fff] text-[#ABAEBC] hover:text-[#52535a] focus:ring sm:w-auto z-10 relative Archivo ml-auto"
								>{m.zoho_btn_ebook()}</button
							>
							<!-- <button
				type="reset"
				name="reset"
				class="btn-demo block flex-1 rounded-xl p-3 text-xl font-medium text-[#fff] bg-[#ffffff] hover:bg-gray-100 focus:ring sm:w-auto z-10 relative Archivo"
				>{ m.zoho_btn_clear()}</button
			> -->
						</div>
						<!-- <script
			id="wf_anal"
			src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=afb68f5d6f6feff8eda30c313ce130aab5feeda7f2a2f9072512ee643b67a9ac75f33bff2bf601a0c1712258c5322263gidd51585345a7b92504021c17b1205f717f7e505556b0508675b1630ec402a9d3cgid9829421248f90bc1e90808fc9ce4183c85288aa7e60f58126a0db8ddf4bfb619gid2e1601d689bef4b2d668d12ba329debaa2da782b239f53b388313ae5dcb3d109&tw=dd1d369a4adc897d26f1ab45f565f52382e53be84b11c8393abfe8d7302bbd48"
		></script> -->
					</form>
				</div>

				<hr class="my-6 border-gray-300 w-full" />
				<!-- <button
					type="button"
					class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
				>
					<div class="flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							class="w-6 h-6"
							viewBox="0 0 48 48"
							><defs
								><path
									id="a"
									d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
								/></defs
							><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path
								clip-path="url(#b)"
								fill="#FBBC05"
								d="M0 37V11l17 13z"
							/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path
								clip-path="url(#b)"
								fill="#34A853"
								d="M0 37l30-23 7.9 1L48 0v48H0z"
							/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg
						>
						<span class="ml-4"> Log in with Google</span>
					</div>
				</button>
				<p class="mt-8">
					Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold"
						>Create an account</a
					>
				</p> -->
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
</style>
