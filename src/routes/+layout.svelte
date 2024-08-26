<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<nav>
    <ul>
        <li><a href="/demo1">Demo 1</a></li>
        <li><a href="/demo2">Demo 2</a></li>
        <li><a href="/demo3">Demo 3</a></li>
        <li><a href="/demo4">Demo 4</a></li>
        <li><a href="/demo5">Demo 5</a></li>
        <li><a href="/demo6">Demo 6</a></li>
    </ul>
</nav>

<slot />

<style>
    ul {
        display: flex;
        align-items: center;
    }
</style>
