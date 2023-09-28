<script>
    import products from '../../assets/data/products.json';
    import ProductCard from './ProductCard.svelte';
</script>

<section class="p-4" id="myProducts">
    <div class="grid grid-cols-5 gap-4 mb-10">
        {#each products as product, i}
            <ProductCard details={product.details}></ProductCard>
        {/each}
    </div>
    <div class="text-center">
        <a href="https://www.etsy.com/it/shop/IlCrochetDili" target="_blank" class="text-sm font-normal p-2 bg-[#f8e5e6] rounded-sm text-[#454545] no-underline">Vai al negozio</a>
    </div>
</section>