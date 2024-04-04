<script>
    import NavBar from "$lib/navBar.svelte";
  </script>
  
  <main style="background-color: #bae8cb">
    <NavBar />
    <br>
    <body> 
      <div class="min-h-screen bg-primary-300">
        <h1 class="h1 font-bold mt-20 p-15 text-gray-950 align-middle origin-center text-center">Restaurants</h1>
        <div class="flex justify-center">
          <nav class="list-nav max-w-fit">
            <ul class="border-solid border-secondary-200">
              <li class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400">
                <a href="/Search/RestaurantDetails/tracks">
                  <span class="text-lg sm:text-xl">Tracks Lounge</span>
                </a>
              </li>
              <li class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400">
                <a href="/Search/RestaurantDetails/primos">                  <span class="text-lg sm:text-xl">Primos Modern Mexican Restaurant</span>
                </a>
              </li>
              <li class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400">
                <a href="/Search/RestaurantDetails/herbe">                  <span class="text-lg sm:text-xl">Herbe Sainte</span>
                </a>
              </li>
              <li class="m-1 py-8 sm:px-24 md:px-32 lg:px-48 border-4 border-solid border-secondary-300 flex items-center hover:bg-primary-400">
                <a href="/Search/RestaurantDetails/first">                  <span class="text-lg sm:text-xl">First Watch</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </body>
  </main>
  