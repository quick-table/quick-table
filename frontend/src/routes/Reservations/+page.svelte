<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { UserStore } from '../../stores/user-store';
	import { dateToString } from '$lib/utils';

	$: isLoggedIn = UserStore.isLoggedIn;
	$: userData = UserStore.userData;

	$: reservations = useQuery(['reservations', $userData?.id], async () => {
		if (!$isLoggedIn || !$userData) {
			console.log('User is not logged in');
			return;
		}

		var response = await UserStore.api.getReservation($userData.id);

		if (response) {
			response.data = await response.json();
			return response.data.data!;
		} else {
			console.log('Failed to fetch reservations: $userData is null');
			return [];
		}
	});
</script>

<div class="mt-4 flex flex-col gap-4">
	{#if $reservations.data}
		{#each $reservations.data as reservation}
			<div class="m-1 grid-cols-5 h-32 rounded-lg gap-8 grid">
				{#if reservation.status === 'ACTIVE'}
					<div class="col-span-1 bg-green-300 rounded-md"></div>
				{:else}
					<div class="col-span-1 bg-red-300 rounded-md"></div>
				{/if}

				<div class="col-span-3">
					<p>Party Size: {reservation.timeSlot?.table?.capacity}</p>
					<p>Start Date : {dateToString(new Date(reservation.timeSlot?.startDate ?? ''))}</p>
					<p>End Date: {dateToString(new Date(reservation.timeSlot?.startDate ?? ''))}</p>

					<p>Status : {reservation.status}</p>
				</div>
			</div>
		{/each}
	{/if}
</div>
