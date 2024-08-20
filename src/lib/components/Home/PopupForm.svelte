<script lang="ts">
	import FormLanding from './FormLanding.svelte';
	export let isOpen;
	import * as m from '$lib/paraglide/messages';
	let cookieConsent = false;
	let doNotShowAgain = false; 

	import { cookieConsentVisible } from '$lib/stores/cookieConsent.ts';
	import { fade } from 'svelte/transition';
	cookieConsentVisible.subscribe((value) => {
		cookieConsent = value;
		if (cookieConsent == true) {
			cookieConsent = true;
		}
	});

	function closePopup() {
		isOpen = false;
		if (doNotShowAgain) {
			localStorage.setItem('popupDismissed', 'true');
		}
	}

	function handleClickOutside(event) {
		if (!cookieConsent) return;

		const popupForm = document.querySelector('.popup-form');
		if (!popupForm.contains(event.target)) {
			closePopup();
		}
	}

	async function handleSubmit(event) {
		event.preventDefault(); // Prevent default form submission
		closePopup();
	}
</script>

<svelte:window on:click={handleClickOutside} />
<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-50 transition-opacity duration-1000 ease-in-out rounded-lg p-3 " 
	class:hidden={!isOpen}
>
	<div class="bg-white rounded-lg shadow-md p-1 max-w-screen-xl flex flex-col relative popup-form" >
		<button
			on:click={closePopup}
			class="Archivo text-2xl absolute top-1.5 right-1.5 hover:bg-gray-400 z-50 px-2.5 py-1 rounded-lg text-white"
		>
			X
		</button>
		<FormLanding {closePopup} />
		<div class="mt-1 flex items-center justify-end px-2 Archivo">
			<input type="checkbox" id="doNotShowAgain" bind:checked={doNotShowAgain} class="mr-2" />
			<label for="doNotShowAgain">{m.do_not_show_again()}</label>
		</div>
	</div>
</div>
