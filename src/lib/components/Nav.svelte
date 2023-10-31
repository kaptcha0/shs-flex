<script>
	import { me } from '$lib/stores/auth';
	import { Doc, SignedIn, SignedOut } from 'sveltefire';
</script>

<nav>
	<ul>
		<li><a href="/"><strong>SHS Flex</strong></a></li>
	</ul>
	<ul>
		<SignedIn>
			<li>Pull Request</li>
			<li>
					<a href="/auth"><strong>{$me?.name}</strong></a>
			</li>
		</SignedIn>
		<SignedOut>
			<li><a href="/auth" role="button">Login</a></li>
		</SignedOut>
	</ul>
</nav>

<style>
	nav strong {
		color: var(--h6-color);
	}
</style>
