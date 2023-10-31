<script>
	import { auth } from '$lib/firestore';
	import {
		GoogleAuthProvider,
		signOut,
		signInWithPopup,
		sendSignInLinkToEmail,
		isSignInWithEmailLink,
		signInWithEmailLink
	} from 'firebase/auth';
	import { SignedIn, SignedOut } from 'sveltefire';
	import { PUBLIC_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	
	const provider = new GoogleAuthProvider();
	provider.addScope('profile');
	provider.addScope('email');

	/** @type {string | null} */
	let email;

	const loginWithGoogle = async () => {
		const authResult = await signInWithPopup(auth, provider);

		const { email } = authResult.user;

		if (!email) return;
	};

	const loginWithMagicLink = async () => {
		if (!email) return;

		await sendSignInLinkToEmail(auth, email, {
			url: PUBLIC_URL + '/auth',
			handleCodeInApp: true
		});

		window.localStorage.setItem('emailForMagicLink', email);
	};

	const logout = async () => {
		await signOut(auth);
	};

	onMount(async () => {
		const url = window.location.href;
		if (isSignInWithEmailLink(auth, url)) {
			email = window.localStorage.getItem('emailForMagicLink');

			if (!email) return;

			await signInWithEmailLink(auth, email, url);

			window.localStorage.removeItem('emailForMagicLink');
		}
	});
</script>

<div>
	<SignedOut>
		<form on:submit={loginWithMagicLink}>
			<input type="email" name="email" placeholder="Email" bind:value={email} />
			<input type="submit" value="Login with Email" />
		</form>
		<button on:click={loginWithGoogle}> Sign in with Google </button>
	</SignedOut>

	<SignedIn>
		<button on:click={logout}> Sign out </button>
	</SignedIn>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 0 4rem;
	}
</style>
