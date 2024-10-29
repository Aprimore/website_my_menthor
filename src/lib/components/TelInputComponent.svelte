<script lang="ts">
	import { phoneNumberStore, selectedCountryStore } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import { TelInput, clickOutsideAction, isSelected, normalizedCountries } from 'svelte-tel-input';
	import 'svelte-tel-input/styles/flags.css';

	let phoneNumber = '';

	export let clickOutside = true;
	export let closeOnClick = true;
	export let disabled = false;
	export let detailedValue: any = null;
	export let value = '';
	export let searchPlaceholder = 'Search';

	export let isFormLanding;

	let searchText = '';
	let isOpen = false;
	export let selectedCountry = 'US';
	export let valid = true;
	export let options = { invalidateOnCountryChange: true };

	$: selectedCountryDialCode =
		normalizedCountries.find((el) => el.iso2 === selectedCountry)?.dialCode || null;

	const toggleDropDown = (e: any) => {
		e?.preventDefault();
		if (disabled) return;
		isOpen = !isOpen;
	};

	const closeDropdown = (e: any) => {
		if (isOpen) {
			e?.preventDefault();
			isOpen = false;
			searchText = '';
		}
	};

	const selectClick = (e: any) => {
		if (closeOnClick) closeDropdown(e);
	};

	const closeOnClickOutside = (e: any) => {
		if (clickOutside) {
			closeDropdown(e);
		}
	};

	const sortCountries = (countries: any, text: any) => {
		const normalizedText = text.trim().toLowerCase();
		if (!normalizedText) {
			return countries.sort((a: any, b: any) => a.label.localeCompare(b.label));
		}
		return countries.sort((a: any, b: any) => {
			const aNameLower = a.name.toLowerCase();
			const bNameLower = b.name.toLowerCase();
			const aStartsWith = aNameLower.startsWith(normalizedText);
			const bStartsWith = bNameLower.startsWith(normalizedText);
			if (aStartsWith && !bStartsWith) return -1;
			if (!aStartsWith && bStartsWith) return 1;
			const aIndex = aNameLower.indexOf(normalizedText);
			const bIndex = bNameLower.indexOf(normalizedText);
			if (aIndex === -1 && bIndex === -1) return a.id.localeCompare(b.id);
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			const aWeight = aIndex + (aStartsWith ? 0 : 1);
			const bWeight = bIndex + (bStartsWith ? 0 : 1);
			return aWeight - bWeight;
		});
	};

	const handleSelect = (countryName: any, val: any, e?: any) => {
		selectedCountryStore.set(countryName);

		if (disabled) return;
		e?.preventDefault();
		if (
			selectedCountry === undefined ||
			selectedCountry === null ||
			(typeof selectedCountry === typeof val && selectedCountry !== val)
		) {
			selectedCountry = val;
			onChange(val);
			selectClick();
		} else {
			dispatch('same', { option: val });
			selectClick();
		}
	};

	const dispatch = createEventDispatcher();

	const onChange = (selectedCountry: any) => {
		dispatch('change', { option: selectedCountry as any });
	};
</script>

<div
	class="flex relative rounded-lg {valid
		? ``
		: ` ring-pink-500  ring-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500`}"
>
	<div class="flex" use:clickOutsideAction={closeOnClickOutside}>
		<button
			id="states-button"
			data-dropdown-toggle="dropdown-states"
			class="{isFormLanding
				? 'bg-[#ABAEBC]'
				: 'bg-gray-100'} relative flex-shrink-0 overflow-hidden z-10 whitespace-nowrap inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500
			  border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none"
			type="button"
			role="combobox"
			aria-controls="dropdown-countries"
			aria-expanded="false"
			aria-haspopup="false"
			on:click={toggleDropDown}
		>
			{#if selectedCountry && selectedCountry !== null}
				<!-- class="text-md p-4 bg-white border placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1" -->

				<div class="inline-flex items-center text-left">
					<span class="flag flag-{selectedCountry.toLowerCase()} flex-shrink-0 mr-3" />
					<span
						class=" 
					
					{isFormLanding ? 'text-white' : 'text-gray-600'}
					
					
					">+{selectedCountryDialCode}</span
					>
				</div>
			{:else}
				Please select
			{/if}
			<svg
				aria-hidden="true"
				class="ml-1 w-4 h-4 {isOpen ? 'rotate-180' : ''}"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		{#if isOpen}
			<div
				id="dropdown-countries "
				class="absolute z-10 max-w-fit bg-white rounded divide-y divide-gray-100 shadow overflow-hidden translate-y-11"
				data-popper-reference-hidden=""
				data-popper-escaped=""
				data-popper-placement="bottom"
				aria-orientation="vertical"
				aria-labelledby="country-button"
				tabindex="-1"
			>
				<div
					class="text-sm text-gray-700 max-md:max-h-48 max-h-96 overflow-y-auto"
					aria-labelledby="countries-button"
					role="listbox"
				>
					<input
						aria-autocomplete="list"
						type="text"
						class="px-4 py-2 text-[#17193B] focus:outline-none w-full sticky top-0 text-xl hover:bg-gray-100 focus:placeholder-gray-500"
						bind:value={searchText}
						placeholder={searchPlaceholder}
					/>
					{#each sortCountries(normalizedCountries, searchText) as country (country.id)}
						{@const isActive = isSelected(country.iso2, selectedCountry)}
						<div id="country-{country.iso2}" role="option" aria-selected={isActive}>
							<button
								value={country.iso2}
								type="button"
								class="inline-flex py-2 px-4 w-full text-sm hover:bg-gray-100
                             active:bg-gray-800 overflow-hidden
                            {isActive
									? 'bg-gray-600 '
									: ' '} Exo-Semibold text-[#17193B] after:ml-0.5"
								on:click={(e) => {
									handleSelect(country.name, country.iso2, e);
								}}
							>
								<div
									class="inline-flex items-center text-left Exo text-[#17193B] text-md after:ml-0.5"
								>
									<span class="flag flag-{country.iso2.toLowerCase()} flex-shrink-0 mr-3" />
									<span class="mr-2 Exo-Semibold text-[#17193B] after:ml-0.5">{country.name}</span>
									<span class="text-gray-500">+{country.dialCode}</span>
								</div>
							</button>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<TelInput
		id="tel-input"
		bind:country={selectedCountry}
		bind:detailedValue
		bind:value
		bind:valid
		{options}
		required={true}
		class="text-md p-4 {isFormLanding
			? 'bg-[#ABAEBC]'
			: 'bg-white'} border text-[#17193B]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1  {isFormLanding
			? 'placeholder-white'
			: 'placeholder-slate-400'}"
	/>
</div>
