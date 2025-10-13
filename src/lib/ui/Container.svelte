<div class="container {$$props.class}" {...$$restProps}>
	<slot />
</div>

<style>
	.container {
		display: flex;
		max-width: 1650px;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
