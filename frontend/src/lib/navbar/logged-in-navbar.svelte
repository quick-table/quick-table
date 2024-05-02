<script lang="ts">
	import { UserStore } from '../../stores/user-store';
	import { onMount } from 'svelte';
	import { Avatar, getToastStore } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();
	$: userData = UserStore.userData;

	const popupFeatured: PopupSettings = {
		event: 'click',
		placement: 'bottom',
		target: 'popupFeatured'
	};

	async function logOut(): Promise<void> {
		await UserStore.singOut();
		toastStore.trigger({
			message: "I see that's the way it is ...",
		});
	}
</script>

<!-- Placeholder to occupy the space of the nav bar when the page is scrolled fully up -->
<div class=" h-16"></div>

<nav
	class="top-0 fixed w-full flex h-16 justify-center shadow-md bg-surface-50-900-token dark:shadow-black/20 dark:bg-surface-900"
>
	<div class="flex justify-between w-full max-w-screen-lg">
		<a href="/" class="block">
			<img src="/logo.svg" alt="icon" class="w-14 h-14" />
		</a>

		<button class="flex items-center scale-75" use:popup={popupFeatured}>
			<Avatar initials={$userData?.user.email?.slice(0, 2)} />
		</button>

		<div class="card p-4 shadow-xl" data-popup="popupFeatured">
			<button on:click={logOut} type="button" class="btn rounded-md bg-error-900 variant-filled">
				Logout 😭
			</button>
		</div>
	</div>

	<div></div>
</nav>
