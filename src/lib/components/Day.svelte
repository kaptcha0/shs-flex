<script>
	import { month } from '$lib/stores/calendar';

	/** @type {import('$lib/types').Day} */
	export let day;
</script>

<article class:current={day.current} class:this-month={day.date.getMonth() == $month}>
	<header>
		{day.date.getDate()}
	</header>
	<span>
		{#if day.requests}
			{day.requests[0] ? day.requests[0].from : ''}
			{#if day.requests.length > 1}
				<br />
				...
			{/if}
		{/if}
	</span>
</article>

<style>
	article {
    margin: 0;
    filter: opacity(60%) brightness(80%);
    font-size: smaller;
    transition: all 250ms ease;
	}

  article:hover {
    filter: opacity(75%) brightness(80%);
    cursor: pointer;
  }

	header {
		padding: 0.5rem;
	}

  .this-month {
    filter: opacity(60%) brightness(90%)
  }

  .this-month:hover {
    filter: opacity(60%) brightness(90%)
  }

  .current {
    filter: opacity(80%);
  }

  .current:hover {
    filter: opacity(90%)
  }
</style>
