<script>
	import { Student } from '$lib/db/student';
	import { Teacher } from '$lib/db/teacher';
	import { auth } from '$lib/firestore';
	import { GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
	import { SignedIn, SignedOut } from 'sveltefire';

	const provider = new GoogleAuthProvider();
	provider.addScope('profile');
	provider.addScope('email');

    let email = ''

	const loginWithGoogle = async () => {
		const authResult = await signInWithPopup(auth, provider);

		const { email, displayName } = authResult.user;

		if (!email || !displayName) return;

		const isStudentRegex = /.*-.*@/g;
		const isStudent = isStudentRegex.test(email);

		/** @type {import('$lib/types').Person} */
		let person;

		if (isStudent) {
			person = new Student(email, displayName);
		} else {
			person = new Teacher(email, displayName, '');
		}

		const result = await person.save();

		console.log(result);
	};
    
    const loginWithMagicLink = async () => {
        // TODO
    }

	const logout = async () => {
		await signOut(auth);
	};
</script>

<div>
	<SignedOut>
		<form on:submit={loginWithMagicLink}>
			<input type="text" name="email" placeholder="Email" bind:value={email} />
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
