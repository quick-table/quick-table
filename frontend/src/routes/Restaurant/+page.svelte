<script lang="ts">
	import { page } from '$app/stores';
	import { useQuery } from '@sveltestack/svelte-query';
	import { UserStore } from '../../stores/user-store';
	import { extractResponse } from '$lib/utils';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import LoadWrapper from '$lib/blocks/LoadWrapper.svelte';
	import snarkdown from 'snarkdown';
	import { beforeUpdate } from 'svelte';

	let tabIndex: number = 0;
	$: user = UserStore.userData;
	$: restauranId = "0";

	beforeUpdate(() => {
		restauranId = $page.url.searchParams.get('id') ?? "0";
	});

	$: restaurant = useQuery(['restaurant', restauranId, $user?.id], async () => {
		if (!$user) {
			console.log('User is not logged in');
			return;
		}

		if (restauranId === null) {
			console.log('Restaurant ID is not provided');
			return;
		}

		var response = await UserStore.api.getRestaurant(parseInt(restauranId));

		return await extractResponse(response);
	});
</script>

<div>
	<LoadWrapper loading={$restaurant.isLoading}>
		<h2 class="h2 font-bold my-7">{$restaurant.data?.name}</h2>

		<img src={$restaurant.data?.logoUrl} alt="Restaurant Logo" class="rounded-md" />

		<div class="my-10">
			<TabGroup>
				<Tab bind:group={tabIndex} name="Description" value={0}>
					<span>Description</span>
				</Tab>

				<Tab bind:group={tabIndex} name="Description" value={1}>
					<span>Availability</span>
				</Tab>

				<Tab bind:group={tabIndex} name="Description" value={2}>
					<span>Reviews</span>
				</Tab>

				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabIndex === 0}
						<div class="markdown-body h-[500px] custom-scroll-bar overflow-y-auto">
							{@html snarkdown($restaurant.data?.description ?? '')}
						</div>
					{:else if tabIndex === 1}
						<div class="markdown-body h-[500px] custom-scroll-bar overflow-y-auto">
							<span class="block m-auto font-bold text-3xl">Comming Soon</span>
						</div>
					{:else if tabIndex === 2}
						<div
							class="markdown-body flex h-[500px] items-center custom-scroll-bar overflow-y-auto"
						>
							<span class="block m-auto font-bold text-3xl">Comming Soon</span>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</LoadWrapper>
</div>
