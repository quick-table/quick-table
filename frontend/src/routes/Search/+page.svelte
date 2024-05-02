<script>
	import { onMount } from 'svelte';
	import { UserStore } from '../../stores/user-store';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { extractResponse } from '../../lib/utils';

	const queryClient = useQueryClient();

	$: userData = UserStore.userData;

	$: restaurants = useQuery(['restaurant', $userData?.id], async () => {
		if (!$userData?.id) {
			console.log('User is not logged in');
			return;
		}

		var response = await UserStore.api.searchRestaurant({
			restaurantName: ''
		});

		return await extractResponse(response);
	});
</script>

<div class="min-h-screen">
	<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">
		Searching
	</h1>
	<h5 class="h5 align-middle origin-center text-center mt-5 mb-24">show query</h5>

	<div class="flex justify-center">
		<nav class="list-nav max-w-fit">
			<ul class="border-solid border-secondary-200">
				{#if $restaurants.data == undefined}
					<div>Loading ....</div>
				{:else}
					{#each $restaurants.data as restaurant}
						<li
							class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-2 border-solid flex items-center hover:bg-surface-200-700-token"
						>
							<span class="badge w-16 h-16 mr-4 sm:w-20 sm:h-20 relative md:right-1/2 lg:right-3/4">
								<img src="static\favicon.png" alt="icon" class="w-full h-full" />
							</span>
							<span class="text-lg sm:text-xl">{restaurant.name}</span>
						</li>
					{/each}
				{/if}
			</ul>
		</nav>
	</div>
</div>
