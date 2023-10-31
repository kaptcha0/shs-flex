import { firestore } from '$lib/firestore';
import type { PotentialResult, PullRequest, PotentialError } from '$lib/types';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { type Person, Role, personPath } from './person';

export class Teacher implements Person {
	readonly role: Role;
	get id() {
		return this.email;
	}

	/**
	 * Creates a teacher object given a name and room number
	 */
	constructor(public email: string, public name: string, public room: string) {
		this.role = Role.Teacher;
	}
	async save(): PotentialResult<Teacher, Error> {
		const ref = doc(firestore, personPath, this.id);

		try {
			const doc = await getDoc(ref);

			if (!doc.exists()) {
				await setDoc(ref, this.toObject());
			}

			return { success: this, error: null };
		} catch (e) {
			return { success: null, error: e as Error };
		}
	}

	pullRequest(date: Date, request: PullRequest): PotentialError<Error> {
		throw new Error('Method not implemented.');
	}

	toObject(): Object {
		return Object.assign({}, this);
	}
}
