<script>
	import { page } from '$app/stores';
	import { UserStore } from '../../stores/user-store';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { extractResponse } from '../../lib/utils';
	import snarkdown from 'snarkdown';
	import { beforeUpdate, onMount } from 'svelte';

	$: searchQuery = '';
	$: userData = UserStore.userData;

	onMount(() => {
		searchQuery = $page.url.searchParams.get('query') ?? '';
	});

	$: restaurants = useQuery(['restaurant', $userData?.id, searchQuery], async () => {
		if (!$userData?.id) {
			console.log('User is not logged in');
			return;
		}

		var response = await UserStore.api.searchRestaurant({
			restaurantName: searchQuery
		});

		return await extractResponse(response);
	});
</script>

<div class="min-h-screen">
	<div class="flex my-8 items-center">
		<label for="searchNameHome"> </label>
		<input
			type="text"
			name="searchName"
			id="searchNameHome"
			bind:value={searchQuery}
			placeholder="Search..."
			class="input w-64 rounded-md py-2 px-4 border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 align-middle origin-center relative mb-2"
		/>
	</div>

	{#if $restaurants.isLoading}
		<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">
			Searching
		</h1>
	{/if}

	<div class="flex justify-center">
		<nav class="list-nav max-w-fit">
			<ul class="border-solid border-secondary-200 flex flex-col gap-4">
				{#if $restaurants.data == undefined}
					<div>Loading ....</div>
				{:else if $restaurants.data.length === 0}
					<div class="markdown-body flex h-[500px] items-center custom-scroll-bar overflow-y-auto">
						<span class="block m-auto font-bold text-3xl">Looks Empty In Here</span>
					</div>
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
