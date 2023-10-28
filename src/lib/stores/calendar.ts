import { derived, writable } from 'svelte/store';

export const today = writable(new Date());
export const month = derived(today, (value) => value.getMonth());
export const year = derived(today, (value) => value.getFullYear());
export const day = derived(today, (value) => value.getDate());

export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const dayNames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];
