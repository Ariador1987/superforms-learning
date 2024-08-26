<script lang="ts">
    import type { ActionData, PageData } from "./$types";
    import { superForm } from "sveltekit-superforms/client";
    import SuperDebug from "sveltekit-superforms";

    export let data: PageData;

    let dialogEl: HTMLDialogElement;
    let hasBeenClosed = false;

    const { form, message, enhance } = superForm(data.form);

    $: if (dialogEl && $message && !hasBeenClosed) {
        dialogEl.showModal();
    }

    const closeDialog = () => {
        dialogEl.close();
        hasBeenClosed = true;
    };
</script>

<SuperDebug data={$form} />

<h2>{$message}</h2>

<dialog bind:this={dialogEl}>
    <h2>Stuff heading</h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quam
        consectetur eveniet quas iusto sit?
    </p>
    <button on:click={closeDialog}>close dialog</button>
</dialog>

<form
    method="POST"
    use:enhance
>
    <label for="username">Username</label><input
        type="text"
        id="userName"
        name="userName"
        bind:value={$form.userName}
    /><label for="password">Password</label><input
        type="password"
        id="password"
        name="password"
        bind:value={$form.password}
    />
    <label for="email">Email</label><input
        type="email"
        id="email"
        name="email"
        bind:value={$form.email}
    />
    <button type="submit">Submit</button>
</form>
