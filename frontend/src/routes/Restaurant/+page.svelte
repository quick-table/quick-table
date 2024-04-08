<script>
    let startTime = '6:00 am';
    let endTime = '11:59 pm';

    function generateTimeIntervals(startTime, endTime) {
        const startAMPM = startTime.slice(-2);
        const endAMPM = endTime.slice(-2);

        startTime = convertTo24HourFormat(startTime);
        endTime = convertTo24HourFormat(endTime);

        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);

        const totalStartMinutes = startHour * 60 + startMinute;
        const totalEndMinutes = endHour * 60 + endMinute;

        const intervals = [];

        for (let i = totalStartMinutes; i <= totalEndMinutes; i += 15) {
            const intervalHour = Math.floor(i / 60) % 24;
            const intervalMinute = i % 60;

            const formattedHour = String(intervalHour === 0 ? 12 : intervalHour > 12 ? intervalHour - 12 : intervalHour).padStart(2, '0');
            const formattedMinute = String(intervalMinute).padStart(2, '0');
            
            const ampm = intervalHour < 12 || intervalHour === 0 ? startAMPM : endAMPM;

            intervals.push(`${formattedHour}:${formattedMinute} ${ampm}`);
        }

        return intervals;
    }

    function convertTo24HourFormat(time) {
        let [hour, minute, ampm] = time.split(/\s|:/);
        if (hour === '12' && ampm === 'am') {
            hour = '00';
        } else if (ampm === 'pm' && hour !== '12') {
            hour = String(parseInt(hour, 10) + 12);
        }
        return `${hour}:${minute}`;
    }

    const timeIntervals = generateTimeIntervals(startTime, endTime);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
</script>

<main style="background-color: #bae8cb;">
    <div class="min-h-screen bg-primary-300 p-8">
        <a href="/Search" class="btn variant-filled-secondary ml-5">Back to Search</a>
        <div class="flex items-center mt-8">
            <div class="badge bg-primary-400 w-36 h-36 mr-4">
                <img src="/favicon.png" alt="icon" class="w-full h-full">
            </div>
            <div>
                <h1 class="h1 font-bold text-gray-950">Restaurant Name</h1>
                <p class="text-gray-700">Description of the restaurant.</p>
            </div>
        </div>
        <div class="inline-block mt-8 border border-black" style="max-height: 400px; overflow-y: auto;">
            <div class="overflow-x-auto table-container">
                <table class="table-auto border border-black">
                    <thead class="border border-black">
                        <tr>
                            <th></th>
                            {#each daysOfWeek as day}
                                <th>{day}</th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody>
                        {#each timeIntervals as interval}
                            <tr>
                                <td>{interval}</td>
                                {#each daysOfWeek as day}
                                    <td class="text-gray-950 bg-primary-50">Open/Closed</td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="mt-8">
            <h2 class="text-xl font-semibold text-gray-950 mb-4"><u>Pick a Reservation</u></h2>
            <form>
                <div class="mb-4">
                    <label for="date" class="block text-gray-950">Date:</label>
                    <input type="date" id="date" name="date" class="form-input text-black">
                </div>
                <div class="mb-4">
                    <label for="startTime" class="block text-gray-950">Start Time:</label>
                    <select id="startTime" name="startTime" class="form-select text-black">
                        <option value="">Select Start Time</option>
                        {#each timeIntervals as interval}
                            <option value={interval}>{interval}</option>
                        {/each}
                    </select>
                </div>
                <div class="mb-4">
                    <label for="endTime" class="block text-gray-950">End Time:</label>
                    <select id="endTime" name="endTime" class="form-select text-black">
                        <option value="">Select End Time</option>
                        {#each timeIntervals as interval}
                            <option value={interval}>{interval}</option>
                        {/each}
                    </select>
                </div>
                <div class="mb-4">
                    <label for="numberOfPeople" class="block text-gray-950">Number of People:</label>
                    <input type="number" id="numberOfPeople" name="numberOfPeople" class="form-input text-black">
                </div>
                <button type="submit" class="btn variant-filled-secondary">Submit</button>
            </form>
        </div>
    </div>
</main>

<style>
    .table-auto {
        width: auto;
        border-collapse: collapse;
    }

    .table-auto th,
    .table-auto td {
        padding: 8px 16px;
        text-align: center;
        --tw-text-opacity: 1;
        color: rgb(3 7 18 / var(--tw-text-opacity));
        border: 1px solid black;
    }

    .table-auto th {
        background-color: #6b7280;
        color: #ffffff;
        border: 1px solid black;
    }

    .table-auto th:first-child {
        text-align: left;
    }

    .table-auto td {
        border: 1px solid black;
    }

</style>