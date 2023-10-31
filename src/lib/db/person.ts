import type { DbObject, PotentialError, PotentialResult, PullRequest } from '$lib/types';
import { Student } from './student';
import { Teacher } from './teacher';

export enum Role {
	Teacher,
	Student
}

export const personPath = 'users';

export interface Person extends DbObject {
	email: string;
	name: string;
	role: Role;
	save(): PotentialResult<Person, Error>;
	pullRequest(date: Date, request: PullRequest): PotentialError<Error>;
}
export function getOrCreatePerson(
	email: string,
	fullName?: [string, string | null, string]
): Person {
	const isStudentRegex = /.*-.*@/g;
	const isStudent = isStudentRegex.test(email);

	const displayName = email.split('@')[0];

	if (isStudent) {
		return new Student(email, displayName);
	}

	return new Teacher(email, displayName, '');
}
