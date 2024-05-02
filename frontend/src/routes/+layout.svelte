<script lang="ts">
	import '../app.css';
	import '../markdown.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { UserStore } from '../stores/user-store';
	import { storePopup } from '@skeletonlabs/skeleton';
	import LoggedInNavbar from '$lib/navbar/logged-in-navbar.svelte';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	import LoggedOutNavbar from '$lib/navbar/logged-out-navbar.svelte';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	// Create a client
	let showNavBar = true;
	const queryClient = new QueryClient();

	$: userData = UserStore.userData;

	$: {
		const currentUrl = $page.route.id?.toLocaleLowerCase() ?? '';
		showNavBar = !(currentUrl.includes('login') || currentUrl.includes('signup'));
	}

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	onMount(() => {
		// if the user is already logged in do not display this page, redirect the user
		// to any other page.

		UserStore.initialize();
	});
</script>

<Toast />

<QueryClientProvider client={queryClient}>
	{#if showNavBar}
		{#if $userData}
			<LoggedInNavbar />
		{:else}
			<LoggedOutNavbar />
		{/if}

		<div class="w-full flex justify-center">
			<div class="w-full max-w-screen-lg px-2">
				<slot />
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</QueryClientProvider>
