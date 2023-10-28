<script>
	import { FirebaseApp } from 'sveltefire';

	// Import the functions you need from the SDKs you need
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { onMount } from 'svelte';
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: 'AIzaSyB3gnVaDiz6U8iUwdTQ9p7fefhn-EyYI5A',
		authDomain: 'shs-flex-50a7d.firebaseapp.com',
		projectId: 'shs-flex-50a7d',
		storageBucket: 'shs-flex-50a7d.appspot.com',
		messagingSenderId: '565249607818',
		appId: '1:565249607818:web:f2cbe58c479f540b5bc573',
		measurementId: 'G-1ETYEVQCJ6'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const firestore = getFirestore(app);
	const auth = getAuth(app);
	let analytics = undefined;

	onMount(() => {
		analytics = getAnalytics(app);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
</svelte:head>

<FirebaseApp {firestore} {auth}>
	<main class="container">
		<nav>
			<ul>
				<li><strong>SHS Flex</strong></li>
			</ul>
			<ul>
				<li><a href="/login" role="button">Login</a></li>
			</ul>
		</nav>
		<slot />
	</main>
</FirebaseApp>

<style>
	main {
		width: clamp(768px, 100%, 1024px);
	}
</style>
