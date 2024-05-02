<script>

import { useQuery } from '@sveltestack/svelte-query';
import { UserStore } from '../../stores/user-store';

$: isLoggedIn = UserStore.isLoggedIn;
$: userData = UserStore.userData;

var reservation = useQuery(['reservations', $userData?.id], async () => {
	if (!$isLoggedIn || !$userData) {
		console.log('User is not logged in');
		return;
	}

	var response = await UserStore.api.getReservation($userData.id);

	if (response) {
		response.data = await response.json();
		return response.data.data;
	} else {
		console.log('Failed to fetch reservations: $userData is null');
	}
});

    $: console.log($reservation);
	$: console.log($isLoggedIn);
</script>

<main style="background-color: #bae8cb">
	<br>
	<body>
		<div class="min-h-screen bg-primary-300">
			<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">Your Reservations</h1>

			<div class="flex justify-center">
				<nav class="list-nav max-w-fit mt-24">
					<ul class="border-solid border-secondary-200">
						<li class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400">
							<span class="badge bg-primary-400 w-16 h-16 mr-4 sm:w-20 sm:h-20 relative md:right-1/2 lg:right-3/4">
								<img src="favicon.png" alt="icon" class="w-full h-full">
							</span>
							<span class="text-lg sm:text-xl">{reservation}</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</body>

</main>

