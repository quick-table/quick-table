<script context="module">
	import { getFirebaseApp } from '$lib/firebase';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

	export const meta = {
		title: 'Login Page'
	};

	let signupErrors = undefined;

	const userCredentials = {
		email: '',
		password: ''
	};

	async function startPasswordSignIn() {
		console.log('staring');
		signupErrors = undefined;

		const app = await getFirebaseApp();
		const auth = getAuth(app);

		var newUser = await signInWithEmailAndPassword(
			auth,
			userCredentials.email,
			userCredentials.password
		).catch((error) => {
			console.log(error);
		});

		// TODO: Send the retrieved token to the backend for additional data creation

		if (!newUser) {
			signupErrors = undefined;
			return;
		}

		console.log(await newUser.user.getIdToken());
	}
</script>

<body
	class="h-screen w-screen flex flex-col items-center justify-center"
	style="background-color: #bae8cb;"
>
	<div class="grid grid-cols-3 gap-4 h-full">
		<div class="col-span-1 h-full">
			<img class="object-fill h-full w-full" src="./img/loginimage.jpg" alt=":O" />
		</div>
		<div class="col-span-2 flex flex-col justify-start items-center">
			<h1 class="h1 font-bold mb-10 mt-10 p-15 text-gray-950">Log Into Your Account!</h1>
			<form class="text-gray-950" on:submit={startPasswordSignIn}>
				<label for="loginEmail" class="py-1">Email:</label>
				<input
					type="email"
					id="loginEmail"
					class="p-3 mb-3"
					name="loginEmail"
					bind:value={userCredentials.email}
				/>
				<label for="loginPassword" class="py-1">Password:</label>
				<input
					class="p-3"
					type="password"
					id="loginPassword"
					name="loginPassword"
					bind:value={userCredentials.password}
				/>
				<br />
				<input type="submit" value="Login" class="btn variant-filled-secondary ml-5 mt-6" />
				<p class="inline-block p-1" style="font-size: larger;">or</p>
				<a class="underline p-1 bg-secondary-hover-token" style="font-size: larger;" href="/Signup"
					>Sign Up</a
				>
			</form>
		</div>
	</div>
</body>
