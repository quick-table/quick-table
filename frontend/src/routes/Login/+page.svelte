<script lang="ts">
	import type { ZodError } from 'zod';
	import { goto } from '$app/navigation';
	import { createUserForm } from './schema';
	import type { CreateUserForm } from './schema';
	import { UserStore } from '../../stores/user-store';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { useMutation } from '@sveltestack/svelte-query';
	import { sleep } from '$lib/utils';

	export const meta = {
		title: 'Sign-up Page'
	};

	$: userData = UserStore.userData;
	const toastStore = getToastStore();

	let errors: ZodError<CreateUserForm> | undefined = undefined;

	const userCredentials: CreateUserForm = {
		email: '',
		password: ''
	};

	$: {
		if ($userData) {
			goto('/');
		}
	}

	const signupMutation = useMutation(async (userCredentials: CreateUserForm) => {
		const validation = await createUserForm.safeParseAsync(userCredentials);

		if (!validation.success) {
			console.log(validation);
			errors = validation.error;
			return;
		}

		try {
			UserStore.login({
				email: userCredentials.email,
				password: userCredentials.password
			});
		} catch (ex) {
			toastStore.trigger({
				message: "It didn't work"
			});
		}

		toastStore.trigger({
			message: 'Our Lords Grant You Permission 🎉👏'
		});

		await sleep(2000);
		await goto('/');
	});
</script>

<div class="grid grid-cols-7 h-full">
	<div class="col-span-3 h-full p-2">
		<a href="/">
			<img class=" object-cover h-full w-full rounded-md" src="./img/loginimage.jpg" alt=":O" />
		</a>
	</div>

	<div class="col-span-4 flex flex-col justify-start items-center">
		<h1 class="my-8 text-4xl font-bold">Sign Up to QuickTable!</h1>
		<form class="mt-16 flex flex-col gap-4">
			<label for="signupEmail" class="label font-bold">
				<span class="pl-2">Email </span>
				<input
					type="email"
					name="signupEmail"
					id="signupEmail"
					class="input border-none rounded-md"
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
					bind:value={userCredentials.password}
				/>
			</label>

			{#if errors}
				<div class="text-red-500">
					{#each errors.errors as error}
						<p>{error.path} - {error.message}</p>
					{/each}
				</div>
			{/if}

			<div>
				<input
					type="button"
					value="Login"
					on:click={(e) => {
						e.preventDefault();
						$signupMutation.mutateAsync(userCredentials);
					}}
					class="btn variant-filled-secondary ml-5 mt-6"
				/>
				<p class="inline-block p-1" style="font-size: larger;">or</p>
				<a class="underline p-1 bg-secondary-hover-token" style="font-size: larger;" href="/Signup"
					>Sign up</a
				>
			</div>
		</form>
	</div>
</div>
