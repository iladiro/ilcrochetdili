<script lang="ts">
    import Carousel from '../widgets/Carousel.svelte';
    import type { Product } from "./types/product.type";

    export let product: Product | Partial<Product>;
</script>

{#if product}
<div class="p-5">
    <Carousel photoList={product.carousel}></Carousel>
    <table class="text-[#454545] text-lg border-collapse table-fixed w-full mt-5">
        <tbody class="bg-white dark:bg-slate-800">
            <tr>
                <td width="100" class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Nome:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.details?.title}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Descrizione:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.details?.description}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Misura:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.details?.size}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Materiale:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.details?.material}</td>
            </tr>
        </tbody>
    </table>  
    <div class="text-center mt-10">
        <a href={product.details?.href} class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Vai al negozio</a>
    </div>  
</div>
{/if}