<script>
	import Calendar from '$lib/components/Calendar.svelte';
	import { month, monthNames, today } from '$lib/stores/calendar';

	const prevMonth = () => {
		today.update((tod) => {
			tod.setMonth(tod.getMonth() - 1);

			return tod;
		});
	};
	const nextMonth = () => {
		today.update((tod) => {
			tod.setMonth(tod.getMonth() + 1);

			return tod;
		});
	};
</script>

<svelte:head>
	<title>SHS Flex</title>
</svelte:head>

<section>
	<h2>{monthNames[$month]}</h2>
	<div>
		<a on:click={prevMonth}>Prev</a>
		<a on:click={nextMonth}>Next</a>
	</div>
</section>
<Calendar />

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	section > div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 1rem;
	}

	a:hover {
		cursor: pointer;
	}
</style>
