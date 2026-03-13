<script lang="ts">
    import { page } from '$app/state';

    const navLinks = [
        { href: '/about', label: 'About Me' },
        { href: '/blog', label: 'Blog' },
        { href: '/projects', label: 'Projects' },
        { href: '/publications', label: 'Publications' },
        { href: '/presentations', label: 'Presentations' },
    ];
</script>

<ul>
    {#each navLinks as link}
        <li class:active={page.url.pathname === link.href || page.url.pathname.startsWith(link.href + '/')}>
            <a href={link.href}>{link.label}</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        max-width: 100%;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0;
    }
    li {
        position: relative;
    }
    a {
        display: inline-block;
        font-family: var(--font-sans);
        font-weight: 500;
        font-size: 0.82rem;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.65);
        padding: 10px 16px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        position: relative;
        transition: color var(--transition-fast), background var(--transition-fast);
        border-bottom: 2px solid transparent;
    }
    a:hover {
        color: rgba(255, 255, 255, 0.95);
        background: rgba(255, 255, 255, 0.06);
        border-bottom-color: rgba(224, 92, 42, 0.5);
    }
    li.active > a {
        color: white;
        border-bottom-color: var(--color-tertiary);
        background: rgba(255, 255, 255, 0.08);
    }
    @media (min-width: 500px /* screen-size-big */) {
        ul {
            flex-direction: row;
        }
    }
</style>

