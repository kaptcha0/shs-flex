<script>
	import Day from './Day.svelte';


  /** @type {import('$lib/types').Day[]} */
  export let week;
</script>

{#each week as day (day.date)}
  <Day {day} />
{/each}