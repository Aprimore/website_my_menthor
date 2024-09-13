<script lang="ts">
	import FormLanding from './FormLanding.svelte';
	export let isOpen;
	import * as m from '$lib/paraglide/messages';
	let cookieConsent = false;
	let doNotShowAgain = false;

	import { cookieConsentVisible } from '$lib/stores/cookieConsent.ts';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
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
	in:fade={{ delay: 1000, duration: 800, x: 0, y: 0, opacity: 0.5, easing: cubicInOut }}
	class=" fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-50"
	class:hidden={!isOpen}
>
	<div
		in:fly={{ delay: 1200, duration: 1000, x: 0, y: 5000, opacity: 0.5, easing: cubicInOut }}
		class="bg-white rounded-3xl shadow-md p-1 max-w-screen-xl flex flex-col relative popup-form"
	>
		<button
			on:click={closePopup}
			class="Archivo text-2xl absolute top-1.5 right-1.5 hover:bg-gray-500 z-50 px-2.5 py-1 rounded-3xl text-white"
		>
			X
		</button>
		<FormLanding {closePopup} />
		<div class="mt-1 flex items-center justify-end px-2 Archivo cursor-pointer p-1">
			<input
				type="checkbox"
				id="doNotShowAgain"
				bind:checked={doNotShowAgain}
				class="mr-2 cursor-pointer"
			/>
			<label for="doNotShowAgain">{m.do_not_show_again()}</label>
		</div>
	</div>
</div>
