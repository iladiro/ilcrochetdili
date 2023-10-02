<script lang="ts">
    import products from '../../assets/data/products.json';
    import ProductCard from './ProductCard.svelte';

    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './Popup.svelte';

    const modal = writable(null);

    const openModal = (event: any) => {
        console.log(event)
        modal.set(bind(Popup, { product: event.detail }))
    };

</script>

<div class="p-4">
    <div class="md:grid grid-cols-5 gap-4 mb-10 items-stretch">
        {#each products as product, i}
            <ProductCard product={product} on:openModal={openModal}></ProductCard>
        {/each}
    </div>
    <div class="text-center">
        <a href="https://www.etsy.com/it/shop/IlCrochetDili" target="_blank" class="text-xl font-normal p-4 px-8 transition-all ease-in-out hover:shadow-md duration-300 shadow-sm bg-[#ce8b8b] rounded-sm text-[#454545] no-underline">Vai al negozio</a>
    </div>
    <Modal 
        show={$modal}
        classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-orange-100/[.9]"
        classWindowWrap="relative m-2 max-h-full"
        classWindow="relative w-40 max-w-full max-h-full my-2 mx-auto text-orange-200 rounded shadow-md bg-indigo-900"
        classContent="relative p-2 overflow-auto">
    </Modal>
</div>