<script>
	import NavBar from "$lib/navBar.svelte";

</script>

<main style="background-color: #bae8cb">
	<NavBar />
	<br>
	<div>
		<h3 class="h3 font-bold mb-5 mt-16 p-15 text-gray-950 align-middle origin-center text-center">Welcome to</h3>
		<h1 class="h1 font-bold mb-10 mt-5 p-15 text-gray-950 align-middle origin-center text-center">QuickTable</h1>
	</div>
	<div class="p-5 flex justify-center h-screen">
		<form class="flex flex-col items-center">
			<label for="searchName" class="text-gray-950 align-middle origin-center text-center mb-1">Search by Name</label>
			<div class="flex">
				<input type="text" name="searchName" id="searchNameHome" placeholder="Search..." class="w-64 py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 align-middle origin-center relative text-gray-950">
				<button type="submit" value="searchName" class="py-1 px-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
					<img src="img/mag.svg" alt="Submit" style="width: 20px; height: 20px;">
				</button>
			</div>
			<h5 class="h5 font-bold text-gray-950 align-middle origin-center text-center p-5">or</h5>
			<label for="searchTime" class="text-gray-950 mb-1 align-middle origin-center text-center">Search by Time</label>
			<div class="flex justify-center">
				<div class="mr-2 flex">
					<select class="w-24 py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
						<option value="" disabled selected class="text-secondary-400">Month</option>
						<option value="1">Jan</option>
						<option value="2">Feb</option>
						<option value="3">Mar</option>
						<option value="4">Apr</option>
						<option value="5">May</option>
						<option value="6">Jun</option>
						<option value="7">Jul</option>
						<option value="8">Aug</option>
						<option value="9">Sep</option>
						<option value="10">Oct</option>
						<option value="11">Nov</option>
						<option value="12">Dec</option>
					</select>
					<select class="w-20 py-2 px-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
						<option value="" disabled selected class="text-secondary-400">Day</option>
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
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="24">24</option>
						<option value="25">25</option>
						<option value="26">26</option>
						<option value="27">27</option>
						<option value="28">28</option>
						<option value="29">29</option>
						<option value="30">30</option>
						<option value="31">31</option>
					</select>
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
					
					<button type="submit" value="searchTime" class="py-1 px-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-gray-950">
						<img src="img/mag.svg" alt="Submit" style="width: 20px; height: 20px;">
					</button>

				</div>
			</div>
		</form>
	</div>
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</main>

