<script>
	import NavBar from "$lib/navBar.svelte";
	let results = ['Reservation 1', 'Reservation 2']
</script>

<main style="background-color: #bae8cb">
	<NavBar />
	<br>
	<body>
		<div class="min-h-screen bg-primary-300">
			<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">Your Reservations</h1>

			<div class="flex justify-center">
				<nav class="list-nav max-w-fit mt-24">
					<ul class="border-solid border-secondary-200">
						{#each results as result}
						<li class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400">
							<span class="badge bg-primary-400 w-16 h-16 mr-4 sm:w-20 sm:h-20 relative md:right-1/2 lg:right-3/4">
								<img src="static\favicon.png" alt="icon" class="w-full h-full">
							</span>
							<span class="text-lg sm:text-xl">{result}</span>
						</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</body>
</main>