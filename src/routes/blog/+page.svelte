<script>
import IconsSvg from "$lib/IconsSvg.svelte";
</script>

<svelte:head>
    <title>Blog | Jitse De Smet</title>
    <meta name="description" content="Blog of Jitse De Smet">
</svelte:head>


<a href="https://knows.idlab.ugent.be/news/eswc2025-trip-report/" class="entry" target="_blank">
    <h2>Jitse's trip report for ESWC 2025 <IconsSvg name="external"/></h2>
    <span class="published">2025-06-20</span>
</a>

<a href="https://knows.idlab.ugent.be/news/new-colleague-jitse-de-smet/" class="entry" target="_blank">
    <h2>Jitse De Smet joins KNoWS <IconsSvg name="external"/></h2>
    <span class="published">2024-10-17</span>
</a>


<style>
    .entry {
        display: block;
        background: var(--color-secondary);
        padding: 20px;
        border-radius: 25px;
        margin: 10px 0;
    }
    h2 {
        margin: 0 0 5px 0;
        font-weight: bold;
        font-size: 1.1rem;
    }
    .published {
        font-style: italic;
    }
    .published::before {
        content: 'Published: ';
    }
</style>