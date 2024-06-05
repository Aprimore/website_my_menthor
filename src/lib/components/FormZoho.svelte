<script lang="ts">
	import TelInputComponent from '$lib/components/TelInputComponent.svelte';
	import { isProfessionalEmail } from '$lib/emailValidator';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import { selectedCountryStore } from './../../stores.js';

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

	let areaOfInterest = '';
	let fullName = '';
	let email = '';
	let country = 'United States';
	let phone = '';
	let company = '';
	let position = '';
	let message = '';
	// ---------------------
	let errorMessage = '';

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		// Perform any necessary form validation
		if (!fullName || !email || !message) {
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
		if (!fullName || !email || !message) {
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
		formData.append('LEADCF8', areaOfInterest);
		formData.append('Last Name', fullName);
		formData.append('Email', email);
		formData.append('Country', selectedCountry);
		formData.append('Mobile', phone);
		formData.append('Company', company);
		formData.append('LEADCF3', position);
		formData.append('LEADCF5', message);
		// Add additional form fields as needed
		console.log(formData);
		
		try {	
			const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				// console.log('Form submitted successfully:', response);
				alert('Form submitted successfully!');
			} else {
				// console.error('HTTP error:', response.status);
				alert('An error occurred while submitting the form. Please try again later.');
			}
		} catch (error) {
			console.error('Fetch error:', error);
			alert('An error occurred while submitting the form. Please try again later.');
		}
	};
</script>

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
			value="0afeca1a83d2be29cad9dc2d8a37e8f3d35be7978017274f40bbc07d1f169340"
		/>

		<input type="hidden" name="zc_gad" id="zc_gad" value="" />
		<input
			type="text"
			style="display:none;"
			name="xmIwtLD"
			value="5a87345b8b9b1b951b64a0c913eb4b4cb6cafd7e1f4b8519f9a87df2f28179339608b7c95a65f83b6f01fd5ba9569924"
		/>
		<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
		<input type="text" style="display:none;" name="returnURL" value="null" />
		<!-- Convert form fields to use Svelte's reactive variables -->

		<label class="block">
			<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_fullname()}
			</span>
			<input
				id="Last_Name"
				name="Last Name"
				class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
				type="text"
				bind:value={fullName}
				placeholder={m.ph_fullname()}
				required
			/>
		</label>
		<label for="LEADCF8" class="block"
			><span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_areaOfInterest()}
			</span>
			<select
				id="LEADCF8"
				name="LEADCF8"
				bind:value={areaOfInterest}
				class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
			>
				<option selected value="-None-">-None-</option>
				<!-- <option value="" disabled selected class="Exo-Semibold text-md text-gray-500"
				>{m.form_selectPlaceholder()}</option
			> -->
				<option value="Request a Demo" class="Exo-Semibold text-md"
					>{m.form_requestAdemo()}
				</option>
				<option value="Interested in Partnership" class="Exo-Semibold text-md"
					>{m.form_requestAcallback()}
				</option>
				<option value="Request a Callback" class="Exo-Semibold text-md"
					>{m.form_interestedInPartnership()}
				</option>
			</select>
		</label>

		<label class="block">
			<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_email()}
			</span>
			<input
				class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
				class="hidden Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 blockd"
			>
				Country
			</span>
			<input
				class="hidden text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
				type="text"
				placeholder="Country"
				id="Country"
				name="Country"
				disabled
			/>
		</label>

		<label class="block">
			<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_phone()}
			</span>
			<TelInputComponent bind:value={phone} id="Phone" name="Phone" />
		</label>

		<label class="block">
			<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_company()}
			</span>
			<input
				id="Company"
				name="Company"
				class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
				type="text"
				bind:value={company}
				placeholder={m.ph_company()}
			/>
		</label>
		<label class="block">
			<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_role()}
			</span>
			<input
				id="LEADCF3"
				name="LEADCF3"
				class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
				type="text"
				bind:value={position}
				placeholder={m.ph_role()}
			/>
		</label>
		<label class="block">
			<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
				{m.form_message()}
			</span>
			<textarea
				id="LEADCF5"
				name="LEADCF5"
				bind:value={message}
				placeholder={m.ph_message()}
				class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 max-h-96"
				rows="5"
				cols="50"
				required
			></textarea>
		</label>
		<!-- Add additional form fields as needed -->

		<!-- Add form submission buttons -->
		<div class=" text-center mt-5 flex p-1 gap-3">
			<button
				id="formsubmit"
				type="submit"
				class="btn-demo block flex-1 rounded-xl p-3 text-xl font-medium text-[#ffffff] bg-[#8ABB3F] hover:bg-[#85b43e] focus:ring sm:w-auto z-10 relative Archivo"
				>{m.zoho_btn_send()}</button
			>
			<!-- <button
				type="reset"
				name="reset"
				class="btn-demo block flex-1 rounded-xl p-3 text-xl font-medium text-[#17193B] bg-[#ffffff] hover:bg-gray-100 focus:ring sm:w-auto z-10 relative Archivo"
				>{m.zoho_btn_clear()}</button
			> -->
		</div>
		<!-- <script
			id="wf_anal"
			src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=afb68f5d6f6feff8eda30c313ce130aab5feeda7f2a2f9072512ee643b67a9ac75f33bff2bf601a0c1712258c5322263gidd51585345a7b92504021c17b1205f717f7e505556b0508675b1630ec402a9d3cgid9829421248f90bc1e90808fc9ce4183c85288aa7e60f58126a0db8ddf4bfb619gid2e1601d689bef4b2d668d12ba329debaa2da782b239f53b388313ae5dcb3d109&tw=dd1d369a4adc897d26f1ab45f565f52382e53be84b11c8393abfe8d7302bbd48"
		></script> -->
	</form>
</div>
