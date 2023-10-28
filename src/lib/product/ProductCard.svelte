<script lang="ts">
	import etsy from '$icons/etsy.png';
	import { createEventDispatcher } from 'svelte';
	import type { Product } from "./types/product.type";

	export let product: Product;

	const dispatch = createEventDispatcher();

	function openModal() {
		dispatch('openModal', product);
	}
</script>


<div class="product__card mb-5 h-full relative flex justify-between flex-col">
	<div class="my-3">
		<figure class="text-sm mb-3 font-light border-4 border-[#d0aeb0] bg-white p-2 shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
			<button on:click={openModal}>
				<img src="/photo/{product.details.imgsrc}" alt={product.details.title}>
			</button>
		</figure>
		<div>
			<a href={product.details.href} class="no-underline">{product.details.title}</a>
		</div>
	</div>
	<div class="flex items-center justify-between gap-2">
		<div class="flex gap-2">
			<button type="button" on:click={openModal} class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Dettagli</button>
			<!-- <a href={product.details.href} target="_blank" class="flex p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">
				<img src={etsy} title="Vai al negozio su Etsy shop" alt="Etsy shop" width="30">
			</a> -->
		</div>
		<div>
			<!-- <p class="product__card-price text-lg"><strong>&euro; {product.details.price}</strong></p> -->
		</div>
	</div>
</div>

<style>
	.product__card-price {
		font-family: initial;
	}
</style>