// src/stores.js
import { writable } from 'svelte/store';

export const selectedCountryStore = writable('');
export const phoneNumberStore = writable('');