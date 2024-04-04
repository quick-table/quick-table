<script>
	import NavBar from "$lib/navBar.svelte";
	// Define the list of restaurants
	let restaurants = [
	  { name: "Tracks Lounge" },
	  { name: "Herbe Sainte" },
	  { name: "Primos Modern Mexican" },
	  { name: "First Watch" }
	];
  
	// Define the list of time slots
	let timeSlots = [
	  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
	  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
	  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
	  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", 
	  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", 
	  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", 
	  "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"
	];
  
	// Selected values
	let selectedRestaurant = "";
	let selectedTimeSlot = "";
  
	// Function to handle reservation submission
	function submitReservation() {
	  if (selectedRestaurant && selectedTimeSlot) {
		// Handle reservation submission, for example: send to server
		console.log("Reservation submitted for:", selectedRestaurant, "at", selectedTimeSlot);
	  } else {
		console.log("Please select a restaurant and a time slot.");
	  }
	}
  </script>
  
  <main>
	<NavBar />
	<br>
	<body class="p-10">
	  <h1 class="text-4xl font-bold mb-8">Make a Reservation</h1>
	  <div class="mb-4">
		<label for="restaurant" class="block text-lg font-semibold mb-2">Select a Restaurant:</label>
		<select id="restaurant" class="p-2 border border-gray-300 rounded-md text-black" bind:value={selectedRestaurant}>
		  <option value="">-- Select a Restaurant --</option>
		  {#each restaurants as restaurant}
			<option value={restaurant.name}>{restaurant.name}</option>
		  {/each}
		</select>
	  </div>
	  <div class="mb-4">
		<label for="timeSlot" class="block text-lg font-semibold mb-2">Select a Time Slot:</label>
		<select id="timeSlot" class="p-2 border border-gray-300 rounded-md text-black" bind:value={selectedTimeSlot}>
		  <option value="">-- Select a Time Slot --</option>
		  {#each timeSlots as timeSlot}
			<option value={timeSlot}>{timeSlot}</option>
		  {/each}
		</select>
	  </div>
	  <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" on:click={submitReservation}>Submit Reservation</button>
	</body>
  </main>