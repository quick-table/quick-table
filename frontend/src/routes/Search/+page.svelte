<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import { UserStore } from '../../stores/user-store';

	$: isLoggedIn = UserStore.isLoggedIn;
	$: userData = UserStore.userData;

	var restaurant = useQuery(['restaurant', {}], async () => {
		if (!$isLoggedIn) {
			console.log('User is not logged in');
			return;
		}

		var response = await UserStore.api.searchRestaurant({
			restaurantName: ''
		});

		response.data = await response.json();

		return response.data.data;
	});

	var reservationQuery = useQuery(['restaurant', $userData?.id], async () => {
		if (!$userData) {
			console.log('User is not logged in');
			return;
		}

		var response = await UserStore.api.getReservation($userData.id);

		response.data = await response.json();

		return response.data.data;
	});

	$: console.log($restaurant.data);
	$: console.log($isLoggedIn);
</script>

<div class="min-h-screen">
	<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">
		Searching
	</h1>
	<h5 class="h5 align-middle origin-center text-center mt-5 mb-24">show query</h5>

	<div class="flex justify-center">
		<nav class="list-nav max-w-fit">
			<ul class="border-solid border-secondary-200">
				{#if $reservationQuery.data == undefined}
					<div>Loading...</div>
				{:else}
					<div>
						{JSON.stringify($reservationQuery.data)}
					</div>
				{/if}

				{#if $restaurant.data == undefined}
					<div>Loading ....</div>
				{:else}
					{#each $restaurant.data as restaurant}
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
