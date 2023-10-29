import { firestore } from '$lib/firestore';
import {
	type Person,
	Role,
	type PotentialResult,
	type PullRequest,
	type PotentialError,
	personPath
} from '$lib/types';
import { doc, setDoc } from 'firebase/firestore';

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
