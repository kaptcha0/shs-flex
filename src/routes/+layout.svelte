<script>
	import Nav from '../lib/components/Nav.svelte';

	import { auth, firestore, storage } from '$lib/firestore';
	import { FirebaseApp } from 'sveltefire';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
</svelte:head>

<FirebaseApp {firestore} {auth} {storage}>
	<main class="container">
		<Nav />
		<slot />
	</main>
</FirebaseApp>

<style>
	main {
		width: clamp(768px, 100%, 1024px);
		height: 100%;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100vh;
	}
</style>
