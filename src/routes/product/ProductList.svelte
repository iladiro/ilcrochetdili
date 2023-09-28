<script lang="ts">
    import products from '../../assets/data/products.json';
    import ProductCard from './ProductCard.svelte';

    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Popup from '../widgets/Popup.svelte';

    const modal = writable(null);

    const openModal = (event: any) => {
        modal.set(bind(Popup, { content: event.detail }))
    };

</script>

<section class="p-4" id="myProducts">
    <div class="grid grid-cols-5 gap-4 mb-10">
        {#each products as product, i}
            <ProductCard details={product.details} on:openModal={openModal}></ProductCard>
        {/each}
    </div>
    <div class="text-center">
        <a href="https://www.etsy.com/it/shop/IlCrochetDili" target="_blank" class="text-sm font-normal p-2 bg-[#f8e5e6] rounded-sm text-[#454545] no-underline">Vai al negozio</a>
    </div>
    <Modal 
        show={$modal}
        classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-orange-100/[.9]"
        classWindowWrap="relative m-2 max-h-full"
        classWindow="relative w-40 max-w-full max-h-full my-2 mx-auto text-orange-200 rounded shadow-md bg-indigo-900"
        classContent="relative p-2 overflow-auto">
    </Modal>
</section>