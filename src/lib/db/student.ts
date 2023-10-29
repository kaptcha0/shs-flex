import { firestore } from '$lib/firestore';
import {
	type Person,
	Role,
	type PullRequest,
	type PotentialResult,
	type PotentialError,
	personPath
} from '$lib/types';
import { doc, setDoc } from 'firebase/firestore';

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
			await setDoc(ref, Object.assign({}, this), {
				merge: true
			});

			return { success: this, error: null };
		} catch (e) {
			return { success: null, error: e as Error };
		}
	}

	pullRequest(date: Date, request: PullRequest): PotentialError<Error> {
		throw new Error('Method not implemented.');
	}
}
