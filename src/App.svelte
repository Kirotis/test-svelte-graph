<script>
    import ToDoList from "./components/ToDoList.svelte";
    import { getAllNote } from "./api";
    import Modal from "./components/Modal.svelte";
    import { modal } from "./stores/store";
    import Dialog from "./components/Dialog.svelte";
    import { bind } from "./components/Modal.svelte";

    let notePromise;
    const getNotes = () => (notePromise = getAllNote());
    const onCancel = (message) => console.log("onCancel", message);
    const onOkay = (message) => console.log("onOkay", message);

    const showPopup = () =>
        modal.set(
            bind(
                Dialog,
                {
                    message: "What is your name?",
                    hasForm: true,
                    onCancel,
                    onOkay,
                },
                {
                    closeButton: false,
                    closeOnEsc: false,
                    closeOnOuterClick: false,
                }
            )
        );

    getNotes();
</script>

<Modal show={$modal} />

<section class="main">
    <h1 class="main-title">Hello Svelte</h1>
    {#await notePromise}
        <p>...waiting</p>
    {:then notes}
        <ToDoList {notes} />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    <button on:click={showPopup}>showPopup</button>
</section>

<style>
    .main-title {
        text-align: center;
        color: rgb(109 183 183);
    }
</style>
