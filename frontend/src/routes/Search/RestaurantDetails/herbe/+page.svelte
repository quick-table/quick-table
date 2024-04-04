<script>
    import NavBar from "$lib/navBar.svelte";
  </script>
  
  <main style="background-image: url('/path/to/your/background-image.jpg'); background-size: cover; background-position: center;">
    <NavBar />
    <br>
    <body> 
      <div class="min-h-screen bg-opacity-50 bg-gray-900 p-10 text-white">
        <h1 class="text-4xl font-bold mb-8">Herbe Sainte</h1>
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-2">Contact</h2>
          <p>Phone: (402)-913-2396</p>
          <p>Email: <a class="underline" href="mailto:justin@herbesainteomaha.com">justin@herbesainteomaha.com</a></p>
        </div>
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-2">Location</h2>
          <p>1934 South 67th Street</p>
          <p>Omaha, NE 68106</p>
        </div>
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-2">Hours</h2>
          <ul>
            <li>Mon-Thur: 4pm-10pm</li>
            <li>Fri: 11am-11pm</li>
            <li>Sat: 10am-11pm (Brunch 10am-2pm)</li>
            <li>Sun: 10am-9pm (Brunch 10am-2pm)</li>
          </ul>
        </div>
      </div>
    </body>
  </main>
  