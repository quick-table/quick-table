<script lang="ts">
	import { getFirebaseApp } from '$lib/firebase';
	import type { SafeParseReturnType } from 'zod';
	import type { CreateUserForm } from './schema';
	import { createUserForm } from './schema';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

	export const meta = {
		title: 'Sign-up Page'
	};

	let errors: SafeParseReturnType<CreateUserForm, CreateUserForm> | undefined = undefined;

	const userCredentials: CreateUserForm = {
		email: '',
		password: '',
		passwordConfirmation: ''
	};

	async function startPasswordSignIn() {
		errors = await createUserForm.safeParseAsync(userCredentials);

		const app = await getFirebaseApp();
		const auth = getAuth(app);

		var newUser = await createUserWithEmailAndPassword(
			auth,
			userCredentials.email,
			userCredentials.password
		).catch((error) => {
			console.log(error);
		});

		newUser;
	}
</script>

<div class="grid grid-cols-3 gap-4 h-full">
	<div class="col-span-1 h-full">
		<img class="object-fill h-full w-full" src="./img/loginimage.jpg" alt=":O" />
	</div>

	<div class="col-span-2 flex flex-col justify-start items-center">
		<h1 class="my-8 text-4xl font-bold">Sign Up to QuickTable!</h1>
		<form class="mt-16 flex flex-col gap-4" on:submit={startPasswordSignIn}>
			<label for="signupEmail" class="label font-bold">
				<span class="pl-2">Email </span>
				<input
					type="email"
					name="signupEmail"
					id="signupEmail"
					class="input border-none rounded-md"
					required
					bind:value={userCredentials.email}
				/>
			</label>

			<label class="label font-bold">
				<span class="pl-2">Password </span>
				<input
					type="password"
					name="password"
					id="password"
					class="input border-none rounded-md"
					required
					bind:value={userCredentials.password}
				/>
			</label>

			<label class="label font-bold">
				<span class="pl-2">Confirm Password </span>
				<input
					type="password"
					id="confirm-password"
					class="input border-none rounded-md"
					required
					bind:value={userCredentials.passwordConfirmation}
				/>
			</label>
			<div>
				<input type="submit" value="Signup" class="btn variant-filled-secondary ml-5 mt-6" />
				<p class="inline-block p-1" style="font-size: larger;">or</p>
				<a class="underline p-1 bg-secondary-hover-token" style="font-size: larger;" href="/Login"
					>Log in</a
				>
			</div>
		</form>
	</div>
</div>
