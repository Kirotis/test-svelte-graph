<script>
    export let note 
    console.log(`note`, note)
</script>

<div class="to-do">
    <h2>{note.title}</h2>
    <span>{note.description}</span>
</div>

<style>
    .to-do {
        display: flex;
        flex-direction: column;
        width: 25em;
        height: 15em;
        border-radius: 4px;
        background-color: #c6f3f3;
        padding: 1em;
        margin: 1em;
    }
</style>
