<script lang="ts">
    import tutorials from '../../assets/data/tutorials.json';
    import TutorialCard from './TutorialCard.svelte';
</script>

<div class="p-4">
    <div class="md:grid grid-cols-5 gap-5 mb-10 items-stretch">
        {#each tutorials as tutorial, i}
            <TutorialCard tutorial={tutorial}></TutorialCard>
        {/each}
    </div>
</div>