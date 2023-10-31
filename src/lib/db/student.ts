import { firestore } from '$lib/firestore';
import type { PullRequest, PotentialResult, PotentialError } from '$lib/types';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { type Person, personPath, Role } from './person';

export class Student implements Person {
	readonly role: Role;
	get id() {
		return this.email;
	}

	/**
	 * Creates a student object given a name
	 */
	constructor(public email: string, public name: string) {
		this.role = Role.Student;
	}

	async save(): PotentialResult<Student, Error> {
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

