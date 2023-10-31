import { getOrCreatePerson } from '$lib/db/person';
import { auth } from '$lib/firestore';
import { derived } from 'svelte/store';
import { userStore } from 'sveltefire';

export const me = derived(userStore(auth), (current) => {
	if (!current) return null;
	if (!current?.email) return null;

	return getOrCreatePerson(current.email);
});
