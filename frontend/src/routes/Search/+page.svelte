<script>
	import { onMount } from 'svelte';
	import { UserStore } from '../../stores/user-store';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { extractResponse } from '../../lib/utils';
	import snarkdown from 'snarkdown';

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
			<ul class="border-solid border-secondary-200 flex flex-col gap-4">
				{#if $restaurants.data == undefined}
					<div>Loading ....</div>
				{:else}
					{#each $restaurants.data as restaurant}
						<li class="m-1 grid-cols-5 gap-8 grid">
							<a
								href={`/Restaurant?id=${restaurant.id}`}
								class="col-span-2 rounded-md block object-cover w-full h-full"
							>
								<img src={restaurant.logoUrl} alt="icon" class="object-cover w-full h-full" />
							</a>
							<div class="col-span-3 py-2">
								<h1 class="text-lg sm:text-xl font-bold">{restaurant.name}</h1>
								<div>
									{@html snarkdown(restaurant.description?.slice(1, 200) ?? '')}
								</div>
							</div>
						</li>
					{/each}
				{/if}
			</ul>
		</nav>
	</div>

	<div class=" my-16 flex">
		<span class="block m-auto text-5xl"> 😊 😋</span>
	</div>
</div>
