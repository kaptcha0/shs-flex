<script>
	import { auth, firestore } from '$lib/firestore';
	import { FirebaseApp, SignedIn, SignedOut } from 'sveltefire';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
</svelte:head>

<FirebaseApp {firestore} {auth}>
	<main class="container">
		<nav>
			<ul>
				<li><a href="/"><strong>SHS Flex</strong></a></li>
			</ul>
			<ul>
				<SignedIn let:user>
					<li role="link">Pull Request</li>
					<li>
						<a href="/auth"><strong>{user.displayName}</strong></a>
					</li>
				</SignedIn>
				<SignedOut>
					<li><a href="/login" role="button">Login</a></li>
				</SignedOut>
			</ul>
		</nav>
		<slot />
	</main>
</FirebaseApp>

<style>
	main {
		width: clamp(768px, 100%, 1024px);
		height: 100%;
	}

	nav strong {
		color: var(--h6-color)
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100vh;
	}
</style>
