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
        background: var(--color-bg-subtle);
        border: 1px solid var(--color-secondary);
        padding: 20px;
        border-radius: var(--radius-lg);
        display: flex;
        flex-direction: column;
        text-decoration: none;
        transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .project:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-primary);
    }
    .title{
        justify-self: center;
        text-align: center;
        font-size: 1.15em;
        font-weight: 700;
        color: var(--color-primary);
        margin: 8px 0;
        line-height: 1.4;
    }
    .info {
        color: var(--color-primary);
        opacity: 0.8;
        font-style: italic;
        text-justify: auto;
        text-align: justify;
        font-size: 0.9em;
        line-height: 1.5;
    }
    .additional-links {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 10px;
        padding-top: 14px;
        border-top: 1px solid var(--color-secondary);
        margin-top: 12px;
    }
</style>
