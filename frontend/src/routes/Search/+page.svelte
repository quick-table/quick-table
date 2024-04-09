<script>
	import { onMount } from 'svelte';
	import { $location } from 'svelte-routing';
	import { useQuery } from '@sveltestack/svelte-query';
	import { useMutation } from '@sveltestack/svelte-query';

	let results = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3', 'Restaurant 4'];
	const { data: searchResults, isLoading, error } = useQuery('allEntries', fetchAllEntries);
	const [mutateR, { data: nameData, isLoading: isNameLoading, error: nameError }] = useMutation(rData => fetchRestaurantResults(rData));

	onMount(() => {
		const unsubscribe = $location.subscribe(location => {
			const state = location.state;
			if (state && state.results) {
				results = state.results;
			}
			if (!state){
				results = fetchAllEntries();
			}
		})
		return unsubscribe;
	});

	async function fetchAllEntries() {
    	try {
      		const response = await fetch("/api/restaurants");
      		const data = await response.json();
			results = data;
			return results;
		}
		catch (error) {
      		console.error('Error fetching all entries:', error);
      		throw new Error('Failed to fetch all entries');
		}
	}

	async function fetchRestaurantResults(restaurantData) {
		try {
			const response = await fetch("/api/restaurants", {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(restaurantData)
			});

			const rData = await response.json();

			navigateToRestaurantPage(rData);
		}
		catch (error) {
			console.error('Error fetching search results:', error);
		}
	}

	function handleRestaurantSearch(event) {
		event.preventDefault();
		mutateName(rData);
	}

	function navigateToRestaurantPage(results) {
		navigate('/Restaurant', { state: { results: results } });
	}

</script>

<div class="min-h-screen bg-primary-300">
	<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">
		Searching
	</h1>
	<h5 class="h5 align-middle origin-center text-center mt-5 mb-24">show query</h5>

	<div class="flex justify-center">
		<nav class="list-nav max-w-fit">
			<ul class="border-solid border-secondary-200">
				{#each results as result}
					<li on:click={handleRestaurantSearch}
						class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400"
					>
						<span
							class="badge bg-primary-400 w-16 h-16 mr-4 sm:w-20 sm:h-20 relative md:right-1/2 lg:right-3/4"
						>
							<img src="static\favicon.png" alt="icon" class="w-full h-full" />
						</span>
						<span class="text-lg sm:text-xl">{result}</span>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>
