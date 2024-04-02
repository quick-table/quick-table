<script>
	import NavBar from "$lib/navBar.svelte";

</script>

<main style="background-color: #bae8cb">
	<NavBar />
	<br>
	<div>
		<h3 class="h3 font-bold mb-5 mt-16 p-15 text-gray-950 align-middle origin-center text-center">Welcome to</h3>
		<h1 class="h1 font-bold mb-20 mt-5 p-15 text-gray-950 align-middle origin-center text-center">QuickTable</h1>
	</div>
	<div class="flex min-h-screen flex-col items-center">
		<form class="mb-2 mt-5">
			<label for="searchName" class="text-gray-950 align-middle origin-center text-center mb-1">Search by Name</label>
			<div class="flex-col items-center">
				<input type="text" name="searchName" id="searchNameHome" placeholder="Search..." class="w-64 py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 align-middle origin-center relative text-gray-950 mb-2">
				<button type="submit" value="searchName" class="py-2 px-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
					<img src="img/mag.svg" alt="Submit" style="width: 20px; height: 20px;">
				</button>
			</div>
		</form>
	
		<h5 class="h5 font-bold text-gray-950 align-middle origin-center text-center p-5">or</h5>
	
		<form class="mt-2">
			<label for="searchTime" class="text-gray-950 mb-1 align-middle origin-center text-center">Search by Time</label>
			<div class="flex flex-col items-center">
				<div class="flex flex-col md:flex-row">
					<input type="date" class="w-40 py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950 mb-2 md:mb-0">
					<div class="flex bg-white rounded-full">
						<select class="w-20 py-2 px-4 rounded-full border border-white bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
							<option value="" disabled selected class="text-secondary-400">hr</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
						<span class="mx-1 mt-2 font-bold text-gray-950">:</span>
						<select class="w-20 py-2 px-4 rounded-full border border-white bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
							<option value="" disabled selected class="text-secondary-400">min</option>
							<option value="00">00</option>
							<option value="15">15</option>
							<option value="30">30</option>
							<option value="45">45</option>
						</select>
					</div>
					<span class="mx-1 mt-2 font-bold text-gray-950">-</span>
					<div class="flex bg-white rounded-full ml-2 md:ml-1">
						<select class="w-20 py-2 px-4 rounded-full border border-white bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
							<option value="" disabled selected class="text-secondary-400">hr</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
						<span class="mx-1 mt-2 font-bold text-gray-950">:</span>
						<select class="w-20 py-2 px-4 rounded-full border border-white bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
							<option value="" disabled selected class="text-secondary-400">min</option>
							<option value="00">00</option>
							<option value="15">15</option>
							<option value="30">30</option>
							<option value="45">45</option>
						</select>
					</div>
					<button type="submit" value="searchTime" class="py-2 px-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950 m-1">
						<img src="img/mag.svg" alt="Submit" style="width: 20px; height: 20px;">
					</button>
				</div>
			</div>
		</form>
	</div>
	
</main>

