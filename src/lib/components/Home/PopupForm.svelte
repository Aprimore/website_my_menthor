<script>
	import FormLanding from './FormLanding.svelte';
	export let isOpen;

	function closePopup() {
		isOpen = false;
	}

	function handleClickOutside(event) {
		const popupForm = document.querySelector('.popup-form');
		if (!popupForm.contains(event.target)) {
			isOpen = false;
		}
	}

	async function handleSubmit(event) {
		event.preventDefault(); // Prevent default form submission

		closePopup();
	}
</script>

<svelte:window on:click={handleClickOutside} />
<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-50 transition-opacity duration-300 ease-in-out rounded-lg p-3"
	class:hidden={!isOpen}
>
	<div class="bg-white rounded-lg shadow-md p-1 max-w-screen-xl flex flex-col relative popup-form">
		<button
			on:click={closePopup}
			class="Archivo text-2xl absolute top-1.5 right-1.5 hover:bg-gray-400 z-50 px-2.5 py-1 rounded-lg text-white"
		>
			X
		</button>
		<FormLanding />
	</div>
</div>
