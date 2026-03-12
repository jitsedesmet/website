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
        padding: 4px 0 0 0;
    }
    li {
        position: relative;
    }
    a {
        display: inline-block;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.82);
        padding-bottom: 3px;
        position: relative;
        transition: color var(--transition-fast);
    }
    a::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 50%;
        right: 50%;
        height: 2px;
        background-color: var(--color-tertiary);
        border-radius: 2px;
        transition: left var(--transition), right var(--transition);
    }
    a:hover {
        color: white;
    }
    a:hover::after {
        left: 0;
        right: 0;
    }
    li.active > a {
        color: white;
        font-weight: 700;
    }
    li.active > a::after {
        left: 0;
        right: 0;
    }
    @media (min-width: 500px /* screen-size-big */) {
        ul {
            display: grid;
            gap: 0.5rem;
            grid-template-columns: repeat(5, 1fr);
            text-align: center;
        }
        li {
            display: flex;
            justify-content: center;
        }
    }
</style>

