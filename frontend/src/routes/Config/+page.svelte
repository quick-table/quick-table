<script>
    let startTime = '7:30';
    let endTime = '9:15';
    let numPeople = 4
</script>

<main style="background-color: #bae8cb;">
    <div class="min-h-screen bg-primary-300 p-8">
        <a href="/Search" class="btn variant-filled-secondary">Back to Reservations</a>
        <div class="flex items-center mt-8">
            <div class="badge bg-primary-400 w-36 h-36 mr-4">
                <img src="/favicon.png" alt="icon" class="w-full h-full">
            </div>
            <div>
                <h1 class="h1 font-bold text-gray-950">Restaurant Name</h1>
                <p class="text-gray-700">Description of the restaurant.</p>
            </div>
        </div>
        <div class="bg-primary-300 p-8 m-12">
            <h3 class="h3 font-bold text-gray-950">You have a reservation for {numPeople} booked from {startTime} to {endTime}</h3>
            <button class="btn variant-filled-warning mt-5">Cancel This Reservation</button>
        </div>
    </div>
</main>