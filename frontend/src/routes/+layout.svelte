<script lang="ts">
	import '../app.css';

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import LoggedOutNavbar from '$lib/navbar/logged-out-navbar.svelte';
	import { UserStore } from '../stores/user-store';

	// Create a client
	const queryClient = new QueryClient();
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let showNavBar = true;

	$: {
		const currentUrl = $page.route.id?.toLocaleLowerCase() ?? '';

		showNavBar = !(currentUrl.includes('login') || currentUrl.includes('signup'));
	}

	onMount(() => {
		// if the user is already logged in do not display this page, redirect the user
		// to any other page.

		UserStore.initialize();
	});
</script>

<QueryClientProvider client={queryClient}>
	{#if showNavBar}
		<LoggedOutNavbar />
	{/if}
	<slot />
</QueryClientProvider>
