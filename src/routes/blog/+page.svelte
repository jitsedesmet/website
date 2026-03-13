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
        background: var(--color-bg-subtle);
        border: 1px solid var(--color-secondary);
        border-left: 3px solid var(--color-secondary);
        padding: 16px 20px;
        border-radius: var(--radius-md);
        margin: 8px 0;
        transition: transform var(--transition), box-shadow var(--transition), border-left-color var(--transition);
        text-decoration: none;
    }
    .entry:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
        border-left-color: var(--color-tertiary);
    }
    h2 {
        font-family: var(--font-serif);
        margin: 0 0 5px 0;
        font-weight: 500;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--color-primary);
    }
    .published {
        font-style: italic;
        font-family: var(--font-serif);
        font-size: 0.85rem;
        opacity: 0.6;
    }
    .published::before {
        content: 'Published: ';
    }
</style>