// place files you want to import through the `$lib` alias in this folder.
export function sameDay(d1: Date, d2: Date) {
	return (
		d1.getUTCFullYear() === d2.getUTCFullYear() &&
		d1.getUTCMonth() === d2.getUTCMonth() &&
		d1.getUTCDate() === d2.getUTCDate()
	);
}

export const arrayChunks = <T>(array: T[], chunkSize: number) =>
	array.reduce((chunks: T[][], item, index) => {
		const chunkIndex = Math.floor(index / chunkSize);

		if (!chunks[chunkIndex]) {
			chunks[chunkIndex] = [];
		}

		chunks[chunkIndex].push(item);

		return chunks;
	}, []);

export function getLastSunday(day: Date) {
	const year = day.getFullYear();
	const month = day.getMonth();
	const date = day.getDate();

	const result = new Date(year, month, date);

	const weekday = result.getDay();
	const dayDiff = weekday === 0 ? 7 : weekday;

	result.setDate(result.getDate() - dayDiff);

	return new Date(result);
}

export function getNextSaturday(day: Date) {
	const year = day.getFullYear();
	const month = day.getMonth();
	const date = day.getDate();

	const result = new Date(year, month, date);

	const weekday = result.getDay();
	const diff = 6 - weekday;
	result.setDate(date + diff);

	return new Date(result.toDateString());
}

export function getLastDay(year: number, month: number) {
	return new Date(year, month + 1, 0);
}

export function getFirstDay(year: number, month: number) {
	return new Date(year, month, 1);
}
