<script>
    import ToDo from "./ToDo.svelte"

    export let notes = [];
</script>

<div class="main-list">
    {#each notes as note}
        <ToDo {note}/>
    {/each}
</div>

<style>
    .main-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>