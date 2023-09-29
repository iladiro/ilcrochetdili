<script lang="ts">
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
    import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte'

    export let photoList: string[] | undefined;
  
    let carousel: any; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext()
    }
  </script>

{#if browser && photoList}
<Carousel>    
    <button let:showPrevPage slot="prev" on:click={showPrevPage} class="custom-arrow custom-arrow-prev w-5 mr-5 text-[#a9a9a9]">
        <IoIosArrowBack />
    </button>
    {#each photoList as photo, i}
    <figure><img src="./src/assets/photo/{photo}" alt="Scare uncinetto"></figure>
    {/each}
    <button let:showNextPage slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next w-5 ml-5 text-[#a9a9a9]">
        <IoIosArrowForward />
    </button>
</Carousel>
{/if}