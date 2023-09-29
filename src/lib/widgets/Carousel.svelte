<script lang="ts">
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    export let photoList: string[] | undefined;
  
    let carousel: any; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext()
    }
  </script>

{#if browser && photoList}
<Carousel>
    {#each photoList as photo, i}
    <figure><img src="./src/assets/photo/{photo}"></figure>
    {/each}
    <!-- <div let:showPage let:pagesCount slot="dots">
        {#each Array(pagesCount) as _, pageIndex (pageIndex)}
            <button on:click={() => showPage(pageIndex)}>{pageIndex}</button>
        {/each}
    </div> -->
</Carousel>
{/if}