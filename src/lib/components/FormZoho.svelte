<script>
	import { zoho_btn_clear } from './../paraglide/messages.js';
	// Import any necessary modules or dependencies
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';

	// Define Svelte reactive variables for form fields

	let fullName = '';
	let email = '';
	let areaOfInterest = 'Request a Demo'; // Default value for area of interest
	let country = '';
	let phone = '';
	let company = '';
	let position = '';
	let message = '';
	// Define additional form fields as needed

	// Function to handle phone number input
	const handlePhoneInput = (event) => {
		// Remove non-numeric characters from the input value
		const sanitizedValue = event.target.value.replace(/[^\d()+ -]/g, '');
		// Update the phone variable with the sanitized value
		phone = sanitizedValue;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

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
		formData.append('Country', country);
		formData.append('Phone', phone);
		formData.append('Company', company);
		formData.append('LEADCF3', position);
		formData.append('LEADCF5', message);
		// Add additional form fields as needed

		try {
			// Send form data to Zoho CRM endpoint using fetch
			const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
				method: 'POST',
				body: formData
			});

			// Check if the request was successful
			if (response.ok) {
				// Handle successful form submission
				console.log('Form submitted successfully:', response);
				alert('Form submitted successfully!');
			} else {
				// Handle HTTP error
				console.error('HTTP error:', response.status);
				alert('An error occurred while submitting the form. Please try again later.');
			}
		} catch (error) {
			// Handle fetch error
			console.error('Fetch error:', error);
			alert('An error occurred while submitting the form. Please try again later.');
		}
	};

	// Optional: Perform any initialization logic when the component mounts
	onMount(() => {
		console.log('Component mounted');
	});
</script>

<form
	id="webform5699482000001517009"
	name="WebToLeads5699482000001517009"
	class="flex flex-col gap-y-5 p-1"
	on:submit={handleSubmit}
>
	<input type="hidden" name="zc_gad" id="zc_gad" value="" />
	<input
		type="text"
		style="display:none;"
		name="xnQsjsdp"
		value="0afeca1a83d2be29cad9dc2d8a37e8f3d35be7978017274f40bbc07d1f169340"
	/>
	<input
		type="text"
		style="display:none;"
		name="xmIwtLD"
		value="5a87345b8b9b1b951b64a0c913eb4b4cb6cafd7e1f4b8519f9a87df2f28179339608b7c95a65f83b6f01fd5ba9569924"
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

	<select bind:value={areaOfInterest} class="hidden">
		<option value="Request a Demo" selected>Request a Demo</option>
		<option value="Interested in Partnership">Interested in Partnership</option>
		<option value="Request a Callback">Request a Callback</option>
	</select>
	<label class="block">
		<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
			{m.form_fullname()}
		</span>
		<input
			class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
			type="text"
			bind:value={fullName}
			placeholder={m.ph_fullname()}
			required
		/>
	</label>
	<label class="block">
		<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
			{m.form_email()}
		</span>
		<input
			class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
			type="email"
			inputmode="email"
			bind:value={email}
			placeholder={m.ph_email()}
			required
		/>
	</label>
	<label class="blockd hidden">
		<span
			class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 blockd hidden"
		>
			Country
		</span>
		<input
			class="hidden text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 blockd w-full rounded-md focus:ring-1"
			type="text"
			bind:value={country}
			placeholder="Country"
		/>
	</label>
	<label class="block">
		<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
			{m.form_phone()}
		</span>
		<input
			class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
			inputmode="tel"
			bind:value={phone}
			placeholder={m.ph_phone()}
		/>
	</label>
	<label class="block">
		<span class="Exo-Semibold text-[#17193B] text-xl after:content-['*'] after:ml-0.5 block">
			{m.form_company()}
		</span>
		<input
			class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
			class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
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
			bind:value={message}
			placeholder={m.ph_message()}
			class="text-base placeholder:text-base p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
			rows="3"
			required
		></textarea>
	</label>
	<!-- Add additional form fields as needed -->

	<!-- Add form submission buttons -->
	<div class=" text-center mt-5 flex">
		<button
			type="submit"
			class="btn-demo block flex-1 rounded-xl px-10 py-4 text-xl font-medium text-[#17193B] bg-[#8ABB3F] focus:ring sm:w-auto z-10 relative Archivo"
			>{m.zoho_btn_send()}</button
		>
		<button
			type="reset"
			class="btn-demo block flex-1 rounded-xl px-10 py-4 text-xl font-medium text-[#17193B] bg-[#ffffff] focus:ring sm:w-auto z-10 relative Archivo"
			>{m.zoho_btn_clear()}</button
		>
	</div>
</form>
