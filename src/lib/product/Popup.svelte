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
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Nome:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">{product.details?.title}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Descrizione:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">{product.details?.description}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Misura:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">{product.details?.size}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Materiale:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">{product.details?.material}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Disponibilità:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">{product.details?.available} pezz{#if product.details?.available === 1}o {:else}i{/if} *</td>
            </tr>
            <!-- <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Prezzo:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">&euro; {product.details?.price}</td>
            </tr>
            <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black font-bold">Spedizione:</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-black">&euro; 10 - 12 **</td>
            </tr>
            <tr>
                <td colspan="2" class="py-4 text-sm">* Tutte le scarpette sono lavorate a mano. Se non ci fosse più disponibilità della scarpetta che desiderate, potete contattarmi su tutti i canali social che ho indicato nel sito. Grazie mille!</td>
            </tr>
            <tr>
                <td colspan="2" class="pb-4 text-sm">** La spedizione verrà effettuata con il corriere TNT o UPS al costo di 10&euro; sulla penisola e 12&euro; sulle isole</td>
            </tr> -->
        </tbody>
    </table>  
    <div class="text-center mt-10">
        <a href={product.details?.href} class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Vai al negozio</a>
    </div>  
</div>
{/if}

<style>
    table {
        font-family: initial;
    }
</style>