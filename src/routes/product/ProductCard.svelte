<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Product } from "./types/product.type";

	export let details: Product;

	const dispatch = createEventDispatcher();

	function openModal() {
		dispatch('openModal', details);
	}
</script>


<div class="product__card mb-5">
	<figure class="text-sm font-light border-4 border-[#d0aeb0] bg-white p-4">
		<img src="./src/assets/photo/{details.imgsrc}" alt={details.title}>		
	</figure>
	<div class="my-3">
		<a href={details.href} class="no-underline">{details.title}</a>
	</div>
	<div class="flex items-stretch gap-2">
		<button type="button" on:click={openModal} class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Dettagli</button>
		<a href={details.href} target="_blank" class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Etsy shop</a>
	</div>
</div>