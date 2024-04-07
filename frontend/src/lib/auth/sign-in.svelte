<script lang="ts">
	import { initializeFirebase } from '$lib/firebase';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { onMount } from 'svelte';

	// async function GetIdToken() {
	// 	const firebase = (await import('firebase/compat/app')).default;

	// 	const idToken = await firebase.auth().currentUser?.getIdToken(true);

	// 	console.log(idToken);
	// }

	const userCredentials = {
		email: '',
		password: ''
	};

	async function startPasswordSignIn() {
		const app = await initializeFirebase();
		const auth = getAuth(app);

		var cred = await signInWithEmailAndPassword(
			auth,
			userCredentials.email,
			userCredentials.password
		).catch((error) => {
			console.log(error);
		});

		console.log(cred);
	}
</script>

<form class="form max-w-lg flex flex-col gap-2">
	<label class="label">
		<span>Email</span>
		<input type="email" bind:value={userCredentials.email} class="input" placeholder="Email" />
	</label>

	<label class="label">
		<span>Password</span>
		<input type="text" bind:value={userCredentials.password} class="input" placeholder="Password" />
	</label>

	<button type="button" class="btn variant-filled m-auto" on:click={startPasswordSignIn}>
		<span>Sign In</span>
	</button>
</form>
