<script lang="ts">
    export let years: string;
    export let title: string;
    export let info: string;
    export let institute: string;
</script>

<div class="container">
    <div class="years">
        {years}
    </div>
    <div class="title">
        {title}
    </div>
    <div class="info">
        {@html info}
    </div>
    <div class="institute">
        {@html institute}
    </div>
</div>

<style>
    .years {
        grid-area: years;
    }
    .title {
        grid-area: title;

        font-size: 1em;
        font-weight: bold;
    }
    .info {
        grid-area: info;

        font-size: 1em;
        font-style: italic;
        color: var(--color-secondary);
    }
    .institute {
        grid-area: institute;
    }
    .container {
        display: grid;
        column-gap: 10px;
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
                "years title institute"
                "years info institute";
    }
</style>
