<script lang="ts">
    import type {Snippet} from "svelte";
    import IconsSvg from "$lib/IconsSvg.svelte";

    interface Props {
        additionalLinks?: Snippet;
        info?: Snippet;
        img?: Snippet;
        href?: string;
        title?: string;
    }
    let { additionalLinks, info, img, href, title = '' }: Props = $props();
</script>

<a class="project" {href} target="_blank">
    {@render img?.()}

    <div class="title">
        {title} <IconsSvg name="external"/>
    </div>

    <div class="info">
        {@render info?.()}
    </div>

    {#if additionalLinks}
        <div class="additional-links">
            {@render additionalLinks()}
        </div>
    {/if}
</a>

<style>
    .project {
        background: var(--color-secondary);
        padding: 20px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    .project:hover {
        box-shadow: 5px 5px 5px 5px var(--color-primary);
    }
    .title{
        justify-self: center;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
    }
    .info {
        color: var(--color-primary);
        font-style: italic;
        text-justify: auto;
        text-align: justify;
    }
    .additional-links {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 10px;
        padding-top: 10px;
    }
</style>
