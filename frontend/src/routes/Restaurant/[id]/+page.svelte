<script lang="ts">
	import { page } from '$app/stores';
	import { useQuery } from '@sveltestack/svelte-query';
	import { UserStore } from '../../../stores/user-store';
	import { extractResponse } from '$lib/utils';

	$: user = UserStore.userData;

	$: restaurant = useQuery(['restaurant', $page.params.id, $user], async () => {
		if (!$user) {
			console.log('User is not logged in');
			return;
		}

		var response = await UserStore.api.getRestaurant(parseInt($page.params.id));

		return await extractResponse(response);
	});
</script>

<div>
	{$page.params.id}
	{JSON.stringify($restaurant.data)}
</div>
