<!-- Placeholder to occupy the space of the nav bar when the page is scrolled fully up -->
<div class=" h-16"></div>

<nav class="top-0 fixed w-full flex h-16 justify-between items-center shadow-md bg-surface-50-900-token dark:shadow-black/20 dark:bg-surface-900">
	<a href="/" class="">
		<img src="static\logo.svg" alt="icon" class="w-14 h-14" />
	</a>
	<div class="flex justify-between middle-section">
		<input class="input max-w-72 bg-surface-100  border-none" type="text" placeholder="Search restaurant" />
		<div class="flex items-center gap-4">
			<a href="/Login" type="button" class="btn variant-ringed-secondary">Login</a>
			<a href="/Signup" type="button" class="btn variant-filled-primary">SignUp</a>
		</div>
	</div>

	<div></div>
</nav>

<style>
	.middle-section {
		/* border: 4px red solid; */
		width: min(100%, 60rem);
	}
</style>
