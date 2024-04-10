<main style="">
	<div class="my-20">
		<h3 class="h3 font-bold mb-5 p-15 align-middle origin-center text-center">Welcome to</h3>
		<h1 class="h1 font-bold mb-20 mt-5 p-15 align-middle origin-center text-center">QuickTable</h1>
	</div>
	<div class="flex min-h-screen flex-col items-center">
		<form class="mb-2 mt-5">
			<label for="searchName" class="align-middle origin-center text-center mb-1"
				>Search by Name</label
			>
			<div class="flex-col items-center">
				<input
					type="text"
					name="searchName"
					id="searchNameHome"
					placeholder="Search..."
					class="input w-64 py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 align-middle origin-center relative mb-2"
				/>
				<button
					type="submit"
					value="searchName"
					class="py-2 px-2 rounded-full dark:bg-surface-500 focus:outline-none focus:ring focus:border-blue-300"
				>
					<img src="img/mag.svg" alt="Submit" style="width: 20px; height: 20px;" />
				</button>
			</div>
		</form>

		<h5 class="h5 font-bold align-middle origin-center text-center p-5">or</h5>

		<form class="mt-2">
			<label for="searchTime" class="mb-4  align-middle origin-center text-center"
				>Search by Time</label
			>
			<div class="flex flex-col items-center">
				<div class="flex gap-3  flex-col md:flex-row">
					<input
						type="date"
						class="input w-40 py-2 px-4 rounded-full border"
					/>


					<input
						type="time"
						class="input w-40 py-2 px-4 rounded-full border"
					/>


					<input
						type="time"
						class="input w-40 py-2 px-4 rounded-full border"
					/>
				</div>
			</div>
		</form>
	</div>
</main>
