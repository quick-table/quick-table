<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	// Create a client
	const queryClient = new QueryClient();

	async function GetIdToken() {
		const firebase = (await import('firebase/compat/app')).default;

		const idToken = await firebase.auth().currentUser?.getIdToken(true);

		console.log('idToken', idToken);
	}

	onMount(async () => {
		const firebaseui = await import('firebaseui');
		const firebase = (await import('firebase/compat/app')).default;
		const firebaseInitializer = (await import('../lib/firebase')).initializeFirebase;

		firebaseInitializer();

		// Initialize the FirebaseUI Widget using Firebase.
		var ui = new firebaseui.auth.AuthUI(firebase.auth());

		ui.start('#firebaseui-auth-container', {
			signInSuccessUrl: '/',
			signInOptions: [
				{
					provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
					signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
				}
			],

			signInFlow: 'popup',

			callbacks: {
				signInSuccessWithAuthResult(authResult, redirectUrl) {
					console.log('signing resutl', authResult, redirectUrl);
					// User successfully signed in.
					// Return type determines whether we continue the redirect automatically
					// or whether we leave that to developer to handle.
					return true;
				}
			}
			// Other config options...
		});
	});
</script>

<QueryClientProvider client={queryClient}>
	<div id="firebaseui-auth-container" />
	<button on:click={GetIdToken}>Click me</button>
	<slot />
</QueryClientProvider>
