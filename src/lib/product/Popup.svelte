<script lang="ts">
    import type { Product } from "./types/product.type";

    export let content: Product | Partial<Product>;
</script>

{#if content}
<div class="flex gap-4 p-5">
    <div class="w-40">
        <img src="./src/assets/photo/{content.imgsrc}" class="rounded-sm" alt={content.title}>
    </div>
    <div class="flex-1">
        <table class="text-[#454545] text-sm border-collapse table-fixed w-full">
            <tbody class="bg-white dark:bg-slate-800">
                <tr>
                    <td width="100" class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Nome:</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{content.title}</td>
                </tr>
                <tr>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Descrizione:</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{content.description}</td>
                </tr>
                <tr>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Misura:</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{content.size}</td>
                </tr>
                <tr>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold">Materiale:</td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{content.material}</td>
                </tr>
            </tbody>
        </table>  
        <div class="text-right mt-5">
            <a href={content.href} class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">Vai al negozio</a>
        </div>      
    </div>
</div>
{/if}