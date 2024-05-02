<script lang="ts">
	export let loading; 
</script>

<div>
	{#if loading}
		<div>Loading ....</div>
	{:else}
		<slot />
	{/if}
</div>
