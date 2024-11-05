<script lang="ts">
    import type {Snippet} from "svelte";

    interface Props {
        children?: Snippet;
    }
    let { children }: Props = $props();
</script>

<div class="grid">
    {@render children?.()}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
