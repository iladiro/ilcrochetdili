<script lang="ts">
    import whatsapp from '$icons/whatsapp.png';
    import Carousel from '../widgets/Carousel.svelte';
    import type { Product } from "./types/product.type";

    export let product: Product | Partial<Product>;
</script>

{#if product}
<div class="md:p-5">
    <div class="mb-4">
        <Carousel photoList={product.carousel}></Carousel>
    </div>    
    <div class="table">
        <div class="md:grid grid-cols-4 gap-4 mb-10">
            <div class="text-black font-bold">Nome</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">{product.details?.title}</div>
            <div class="text-black font-bold">Descrizione</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">{product.details?.description}</div>
            <div class="text-black font-bold">Misura</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">{product.details?.size}</div>
            <div class="text-black font-bold">Materiale</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">{product.details?.material}</div>
            <div class="text-black font-bold">Disponibilità</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">{product.details?.available}</div>
            <!-- <div class="text-black font-bold">Prezzo</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">&euro; {product.details?.price}</div>
            <div class="text-black font-bold">Spedizione</div>
            <div class="text-black col-span-3 mb-4 md:mb-0">&euro; 10 - 12 **</div> -->
        </div>
        <p class="mb-4 text-sm">
            * Tutte le scarpette sono lavorate a mano. Se non ci fosse più disponibilità della scarpetta che desiderate, potete contattarmi su tutti i canali social che ho indicato nel sito. Grazie mille!
        </p>
        <!-- <p class="mb-4 text-sm">
            ** La spedizione verrà effettuata con il corriere TNT o UPS al costo di 10&euro; sulla penisola e 12&euro; sulle isole
        </p> -->
    </div>
    <div class="flex text-center mt-10 gap-4 items-center justify-center">
        <a href={product.details?.href} class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Vai al negozio</a>
        <!-- <span class="uppercase">oppure</span>
        <a href="https://api.whatsapp.com/send?phone=3474977880&amp;text=Ciao%20Ilaria!" target="_blank" class="inline-block p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">
            Contattami su Whatsapp
        </a> -->
    </div>  
</div>
{/if}

<style>
    table, .table {
        font-family: initial;
    }
</style>