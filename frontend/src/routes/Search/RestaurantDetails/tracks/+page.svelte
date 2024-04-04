<script>
    import NavBar from "$lib/navBar.svelte";
  </script>
  
  <main> 
    <NavBar />
    <br>
    <body> 
      <div class="min-h-screen bg-opacity-50 bg-gray-900 p-10 text-white">
        <h1 class="text-4xl font-bold mb-8">Tracks Lounge</h1>
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-2">Contact</h2>
          <p>Phone: 402.905.0102</p>
          <p>Email: <a class="underline" href="mailto:mp.trackslounge@gmail.com">mp.trackslounge@gmail.com</a></p>
        </div>
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-2">Location</h2>
          <p>1506 S. 60th St.</p>
          <p>Omaha, NE 68106</p>
        </div>
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-2">Hours</h2>
          <p><strong>Bar:</strong> Mon-Sun, 12:00-Close</p>
          <p><strong>Kitchen:</strong></p>
          <ul class="list-disc ml-6">
            <li>Sun-Thurs, 12:00-10:00 pm</li>
            <li>Fri-Sat, 12:00 pm-11:00 pm</li>
          </ul>
        </div>
      </div>
    </body>
  </main>
  