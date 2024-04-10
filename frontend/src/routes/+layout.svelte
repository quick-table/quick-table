<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import LoggedOutNavbar from '$lib/navbar/logged-out-navbar.svelte';

	// Create a client
	const queryClient = new QueryClient();
	import { page } from '$app/stores';

	let showNavBar = true;

	$: {
		const currentUrl = $page.route.id?.toLocaleLowerCase() ?? '';

		showNavBar = !(currentUrl.includes('login') || currentUrl.includes('signup'));
	}
</script>

<QueryClientProvider client={queryClient}>
	{#if showNavBar}
		<LoggedOutNavbar />
	{/if}
	<slot />
</QueryClientProvider>
