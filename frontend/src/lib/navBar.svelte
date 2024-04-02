<main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <nav class="flex justify-between bg-gray-900 sm:px-1 sm:py-2 md:px-2 lg:px-3 xl:px-4">
        <a href="/" class="btn variant-filled-secondary custom-button md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3">Home</a>
        <a href="/Search" class="btn variant-filled-secondary custom-button md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3">Search</a>
        <a href="Reservations" class="btn variant-filled-secondary custom-button md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3">Reservations</a>
        <a href="/Login" class="btn variant-filled-secondary custom-button md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3">Log in</a>
        <a href = "/Signup" class="btn variant-filled-secondary custom-button md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3">Sign up</a>
      </nav>
</main>

<style>
    nav{
        position:fixed;
        width: 100%;
        z-index: 10;
    }
    .custom-button {
      /* Base styles */
      padding: 0.5rem 0.75rem;
      border: 2px solid;
      border-color: rgb(203, 203, 126);
      width: 20%;
      text-align: center;
      font-weight: 700;
      display: flex;
      justify-content: space-evenly;
      z-index: 10;
    }
  </style>