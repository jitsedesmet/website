<script lang="ts">
    export let href: undefined | string = undefined;
    export let title = '';
</script>

<a class="project" {href} target="_blank">
    <slot name="img"/>

    <div class="title">
        {title}
    </div>

    <div class="info">
        <slot name="info"/>
    </div>

    {#if $$slots["additional-links"]}
        <div class="additional-links">
            <slot name="additional-links"/>
        </div>
    {/if}
</a>

<style>
    .project {
        background: white;
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
        color: var(--color-secondary);
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
