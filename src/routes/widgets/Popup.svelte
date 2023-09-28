<script lang="ts">
    import type { Product } from "../product/types/product.type";

    export let content: Product | Partial<Product>;
</script>

{#if content}
<div class="flex gap-4">
    <div class="w-40">
        <img src="./src/assets/photo/{content.imgsrc}" class="rounded-sm" alt={content.title}>
    </div>
    <div>
        <table class="text-[#454545] text-sm">
            <tr>
                <td>Nome:</td>
                <td>{content.title}</td>
            </tr>
            <tr>
                <td>Descrizione:</td>
                <td>{content.description}</td>
            </tr>
            <tr>
                <td>Misura:</td>
                <td>{content.size}</td>
            </tr>
            <tr>
                <td>Materiale:</td>
                <td>{content.material}</td>
            </tr>
        </table>
        <a href={content.href}>Vai al negozio</a>
    </div>
</div>
{/if}