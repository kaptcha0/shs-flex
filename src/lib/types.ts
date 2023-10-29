import type { Teacher } from './db/teacher';

export enum Role {
	Teacher,
	Student
}

export type PotentialResult<T, E extends Error> = Promise<
	{ success: T; error: null } | { success: null; error: E }
>;
export type PotentialError<E extends Error> = PotentialResult<true, E>;

export interface DbObject {
	id: string;
}

export const personPath = 'users';

export interface Person extends DbObject {
	email: string;
	name: string;
	role: Role;
	save(): PotentialResult<Person, Error>;
	pullRequest(date: Date, request: PullRequest): PotentialError<Error>;
}

export interface PullRequest extends DbObject {
	date: Date;
	from: Teacher;
	notes: string;
	participants: Person[];
}

export interface Day {
	date: Date;
	current: boolean;
	requests: PullRequest[];
}
