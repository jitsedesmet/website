<script>
import IconsSvg from "$lib/IconsSvg.svelte";
import { blogPosts } from "$lib/blog-posts.js";

const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
</script>

<svelte:head>
    <title>Blog | Jitse De Smet</title>
    <meta name="description" content="Blog of Jitse De Smet">
    <link rel="alternate" type="application/rss+xml" title="Jitse De Smet" href="/blog/rss.xml">
</svelte:head>

{#each sorted as post}
<a href={post.url} class="entry" target="_blank" rel="noopener noreferrer">
    <h2>{post.title} <IconsSvg name="external"/></h2>
    <span class="published">{post.date}</span>
</a>
{/each}


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