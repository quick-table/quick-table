
<script lang="ts">

import { UserStore } from '../../stores/user-store';

	let selectedRestaurant: { name: any; } | null = null;
	let selectedTime = '';
	let currentReservations: any[] = [];
	let reservationError = '';
  
	async function getCurrentReservations() {
  if (!selectedRestaurant || !selectedTime) {
    alert('Please select a restaurant and time to retrieve current reservations.');
    return;
  }

  try {
    // Send a GET request to your backend API endpoint to retrieve current reservations
    const response = await UserStore.api.getReservationsForRestaurant(selectedRestaurant.name);

    if (response.ok) {
      // If request is successful, update currentReservations with the retrieved data
      const data = await response.json();
      currentReservations = data;
      console.log('Current reservations:', currentReservations);
    } else {
      // If request fails, handle the error
      const data = await response.json();
      reservationError = data.message || 'Failed to retrieve current reservations.';
      console.error('Error retrieving current reservations:', reservationError);
      alert(reservationError);
    }
  } catch (error) {
    console.error('Error retrieving current reservations:', error);
    alert('Failed to retrieve current reservations. Please try again.');
  }
}


  </script>
  
  <div class="min-h-screen">
	<h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">
	  Get Current Reservations
	</h1>
	<h5 class="h5 align-middle origin-center text-center mt-5 mb-24">Select a Restaurant and Time</h5>
  
	<div class="flex justify-center">
	  <div class="w-80">
		<select bind:value={selectedRestaurant} class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring">
		  <option value="">Select a Restaurant</option>
		  <!-- Populate restaurant options here if needed -->
		</select>
  
		<input type="time" bind:value={selectedTime} class="block w-full mt-4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring" placeholder="Select Time"/>
  
		{#if reservationError}
		  <div class="text-red-500">{reservationError}</div>
		{/if}
  
		<button on:click={getCurrentReservations} class="block w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get Current Reservations</button>
	  </div>
	</div>
  
	<!-- Display current reservations -->
	<div class="mt-8">
	  {#if currentReservations.length > 0}
		<h2 class="text-lg font-bold">Current Reservations:</h2>
		<ul>
		  {#each currentReservations as reservation}
			<li>{reservation}</li>
		  {/each}
		</ul>
	  {/if}
	</div>
  </div>
  