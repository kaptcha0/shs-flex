export interface Person {
	name: string;
	pullRequest(date: Date, request: PullRequest): boolean;
}

export interface PullRequest {
	id: string;
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

export class Teacher implements Person {
	/**
	 * Creates a teacher object given a name and room number
	 */
	constructor(public name: string, public room: string) {}

	pullRequest(date: Date, request: PullRequest): boolean {
		throw new Error('Method not implemented.');
	}
}

export class Student implements Person {
	/**
	 * Creates a student object given a name
	 */
	constructor(public name: string) {}

	pullRequest(date: Date, request: PullRequest): boolean {
		throw new Error('Method not implemented.');
	}
}
