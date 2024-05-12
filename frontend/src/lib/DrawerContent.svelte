
<script lang="ts">
	import type { Restaurant } from '$lib/api-request';
	import AvailabilityDisplay from '$lib/blocks/AvailabilityDisplay.svelte';
	import type { DisplayConfig } from './utils';

	export let config: DisplayConfig;

	console.log(config);
</script>

{#if config.meta?.RestaurantAvailability}
	<AvailabilityDisplay restaurant={config.meta.RestaurantAvailability} />
{/if}
