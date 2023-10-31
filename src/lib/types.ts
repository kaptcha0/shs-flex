import type { Person } from './db/person';
import type { Teacher } from './db/teacher';

export type PotentialResult<T, E extends Error> = Promise<
	{ success: T; error: null } | { success: null; error: E }
>;
export type PotentialError<E extends Error> = PotentialResult<true, E>;

export interface DbObject {
	id: string;
	toObject(): Object;
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
