<script>
	import {
		arrayChunks,
		getFirstDay,
		getNextSaturday,
		getLastDay,
		getLastSunday,
		sameDay
	} from '$lib';
	import { today, dayNames, month, year } from '$lib/stores/calendar';
	import Week from './Week.svelte';

	/** @type {import('$lib/types').PullRequest[]} */
	export let requests = [];
	/** @type {import('$lib/types').Day[]} */
	let days = [];

	$: {
		days = [];
		const lastDayOfLastMonth = getLastDay($year, $month - 1);
		const firstDayOfCurrentMonth = getFirstDay($year, $month);
		const lastDayOfCurrentMonth = getLastDay($year, $month);

		const firstDayDisplayed =
			firstDayOfCurrentMonth.getDay() == 0
				? firstDayOfCurrentMonth
				: getLastSunday(lastDayOfLastMonth);

    const nextMonth = new Date(firstDayOfCurrentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

		const lastDayDisplayed =
			lastDayOfCurrentMonth.getDay() == 6
				? lastDayOfCurrentMonth
				: getNextSaturday(nextMonth);

		console.log({
			$today,
			firstDayDisplayed,
			lastDayDisplayed,
			firstDateDisplayedDay: firstDayDisplayed.getDay(),
			firstMonthDate: firstDayOfCurrentMonth.getDay(),
			firstDayOfCurrentMonth,
			lastDayOfLastMonth,
			lastDayOfCurrentMonth
		});

		for (const d = new Date(firstDayDisplayed); d <= lastDayDisplayed; d.setDate(d.getDate() + 1)) {
			days.push({
				date: new Date(d),
				current: sameDay(d, $today),
				requests: requests.filter((pr) => sameDay(pr.date, d))
			});
		}

		days = days;
	}

	$: weeks = arrayChunks(days, 7);
</script>

<div class="calendar">
	{#each dayNames as name}
		<span>{name.substring(0, 3)}</span>
	{/each}

	{#each weeks as week}
		<Week {week} />
	{/each}
</div>

<style>
	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 2rem repeat(6, 1fr);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}

	.calendar > span {
		opacity: 50%;
	}
</style>
