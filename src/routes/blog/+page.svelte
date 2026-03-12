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
        padding: 20px 24px;
        border-radius: var(--radius-lg);
        margin: 10px 0;
        border-left: 4px solid var(--color-secondary);
        transition: transform var(--transition), box-shadow var(--transition), border-left-color var(--transition);
        text-decoration: none;
    }
    .entry:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
        border-left-color: var(--color-tertiary);
    }
    h2 {
        margin: 0 0 6px 0;
        font-weight: 700;
        font-size: 1.05rem;
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--color-primary);
    }
    .published {
        font-style: italic;
        font-size: 0.8rem;
        opacity: 0.65;
    }
    .published::before {
        content: 'Published: ';
    }
</style>