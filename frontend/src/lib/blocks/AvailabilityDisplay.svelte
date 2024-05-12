<script lang="ts">
	import type { CreateReservationDto, Reservation, Restaurant, TimeSlot } from '$lib/api-request';
	import { dateToString, extractResponse, sleep, time } from '$lib/utils';
	import { useMutation, useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { onMount } from 'svelte';
	import {
		SvelteGantt,
		SvelteGanttTable,
		type SvelteGanttComponent,
		type SvelteGanttOptions
	} from 'svelte-gantt/svelte';
	import { UserStore } from '../../stores/user-store';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let restaurant: Restaurant;

	const currentStart = time('06:00');
	const currentEnd = time('18:00');

	$: user = UserStore.userData;
	$: restaurantId = restaurant.id;

	$: restaurantQuery = useQuery(['restaurant', restaurantId, $user?.id], async () => {
		if (!$user) {
			console.log('User is not logged in');
			return;
		}

		if (restaurantId === null) {
			console.log('Restaurant ID is not provided');
			return;
		}

		var response = await UserStore.api.getRestaurant(restaurantId!);

		return await extractResponse(response);
	});

    $: {
        if ($restaurantQuery.data?.reservations) {
            init();
        }
    }

	let createReservation: CreateReservationDto = {
		tableId: 1,
		userId: '',
		startDate: '',
		endDate: ''
	};

	let currentTaskModel: TaskModel | null = null;
	$: currentReservation = $restaurantQuery.data?.reservations?.find(
		(x) => x.id == currentTaskModel?.id
	);

	const toastStore = getToastStore();
	const queryClient = useQueryClient();

	$: userData = UserStore.userData;

	type TaskModel = Exclude<SvelteGanttOptions['tasks'], undefined>[0];

	const createReservationMutation = useMutation(async (createReservation: CreateReservationDto) => {
		currentTaskModel!.label = 'Loading ...';

		gantt?.updateTask(currentTaskModel!);

		try {
			const respone = await UserStore.api.createReservation(createReservation);
			currentReservation = await extractResponse(respone);
		} catch (ex) {
			toastStore.trigger({
				message: 'We Failed to create your reservation 😢'
			});

			return;
		}

		toastStore.trigger({
			message: 'Your Reservation has been successfully created 🎉👏'
		});

		currentTaskModel!.label = 'Reserved';
		gantt?.updateTask(currentTaskModel!);

		await queryClient.refetchQueries('restaurant');
        init();
	});

	const deleteReservationMutation = useMutation(async (id: number) => {
		currentTaskModel!.label = 'Deleting ...';

		gantt?.updateTask(currentTaskModel!);

		try {
			await UserStore.api.cancelReservation(id);
		} catch (ex) {
			toastStore.trigger({
				message: 'We Failed to delete reservation 😢'
			});

			return;
		}

		toastStore.trigger({
			message: 'No more food I guess: Your reservation has been deleted'
		});

		queryClient.refetchQueries('restaurant');
        init();
	});

	type MissingTypes = {
		enableCreateTask: boolean;
		onCreateTask: (data: { from: number; to: number; resourceId: string | number }) => TaskModel;
	};

	let options: SvelteGanttOptions & MissingTypes = {
		// dateAdapter: new MomentSvelteGanttDateAdapter(moment),
		enableCreateTask: true,
		onCreateTask: (data) => {
			const createdTask = {
				id: 1000,
				label: 'Pending',
				resourceId: data.resourceId,
				from: data.from,
				to: data.to
			};

			return createdTask;
		},
		rows: [],
		tasks: [],
		timeRanges: [],
		columnOffset: 15,
		magnetOffset: 15,
		rowHeight: 52,
		rowPadding: 6,
		headers: [
			{ unit: 'day', format: 'MMMM Do' },
			{ unit: 'hour', format: 'H:mm' }
		],
		fitWidth: true,
		minWidth: 800,
		tableWidth: 239,
		from: currentStart,
		to: currentEnd,
		tableHeaders: [{ title: 'Label', property: 'label', width: 140, type: 'tree' }],
		ganttTableModules: [SvelteGanttTable],

		highlightedDurations: { unit: 'hour', fractions: [0, 6] },
		taskElementHook: (node: any, task: any) => {
			return {};
		}
	};

	let gantt: SvelteGanttComponent | null = null;

	function init() {
		gantt?.$set({
			rows:
				$restaurantQuery.data?.restaurantTables?.map((x) => ({
					height: 52,
					id: x.id ?? 0,
					label: x.name ?? ''
				})) ?? [],
			tasks:
				$restaurantQuery.data?.reservations
					?.filter((x) => x.status === 'ACTIVE')
					.map((x) => ({
						id: x.id ?? 0,
						label: 'Reserved',
						resourceId: x.timeSlot?.table?.id ?? 0,
						to: Date.parse(x.timeSlot?.endDate ?? ''),
						from: Date.parse(x.timeSlot?.startDate ?? ''),
						classes: 'shadow-surface-300'
					})) ?? []
		});
	}

	onMount(() => {
		gantt = new SvelteGantt({
			target: document.getElementById('availability-display')!,
			props: options
		});

		init();

		gantt.api.tasks.on.select((task: { model: TaskModel }[]) => {
			currentTaskModel = task[0].model;
			createReservation.tableId = currentTaskModel.resourceId as number;
		});

		gantt.api.tasks.on.changed((wrapper: { task: { model: TaskModel } }[]) => {
			currentTaskModel = wrapper[0].task.model;
			createReservation.tableId = currentTaskModel.resourceId as number;
		});
	});
</script>

<div class="p-2">
	<h2 class="font-bold py-5 pl-4">Reservation Dashboard</h2>
	<div
		id="availability-display"
		class="shadow-lg shadow-surface-300 rounde-lg overflow-hidden custom-scroll-bar"
	></div>

	{#if currentTaskModel && $restaurantQuery.data?.restaurantTables}
		<div class="flex justify-center mt-5 mb-3">
			<h2 class="block font-bold py-5 pl-4">Make a reservation</h2>
		</div>
		<div class="flex justify-center">
			<div class="flex justify-center shadow-md p-5">
				<div class="flex flex-col gap-5">
					<div class="flex gap-8 items-center">
						<label class="block font-bold shrink-0 w-24" for="select-table">Table</label>
						<select
							class="select max-w-64 border-none"
							bind:value={createReservation.tableId}
							id="select-table"
						>
							{#each $restaurantQuery.data.restaurantTables as table}
								<option value={table.id}>{table.name} - Capacity {table.capacity} </option>
							{/each}
						</select>
					</div>

					<div class="flex gap-8 items-center">
						<label for="from-date" class="block font-bold shrink-0 w-24">From Date</label>
						<input
							type="datetime-local"
							class="input rounded-md border-none max-w-64"
							id="from-date"
							value={dateToString(new Date(currentTaskModel.from))}
						/>
					</div>

					<div class="flex gap-8 items-center">
						<label for="to-date" class="block font-bold shrink-0 w-24">To Date</label>
						<input
							type="datetime-local"
							class="input rounded-md border-none max-w-64"
							id="to-date"
							value={dateToString(new Date(currentTaskModel.to))}
						/>
					</div>

					{#if currentReservation != null}
						<div>
							<button
								class="btn bg-error-600 rounded-md text-white mt-5"
								on:click={() => {
									$deleteReservationMutation.mutateAsync(currentReservation?.id ?? 0);
								}}
							>
								Delete Reservation
							</button>
						</div>
					{:else}
						<div>
							<button
								class="btn bg-primary-600 rounded-md text-white mt-5"
								on:click={() => {
									$createReservationMutation.mutateAsync({
										userId: $userData?.id ?? '',
										tableId: createReservation.tableId,
										endDate: new Date(currentTaskModel?.to ?? '').toISOString(),
										startDate: new Date(currentTaskModel?.from ?? '').toISOString()
									});
								}}
							>
								Create Reservation
							</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
