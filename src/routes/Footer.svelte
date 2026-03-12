<script>
    import IconsSvg from "$lib/IconsSvg.svelte";
</script>

<div class="footer">
    <div class="follow">
        <span>Follow:</span>
        <a href="https://github.com/jitsedesmet/">
            <IconsSvg name="github" height="0.8rem"/>
            GitHub
        </a>
        <a href="/blog/rss.xml">
            <IconsSvg name="rss" height="0.8rem" class="rss" --color="#fa9b39"/>
            RSS Feed
        </a>
    </div>
    <div class="licence">
        ©2024-2025 Jitse De Smet
        <br>
        Contents of this website are licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> except otherwise noted.
    </div>
</div>

<style>
    .footer {
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 8px;
        @media (min-width: 500px /* screen-size-big */) {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
    }
    .follow {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }
    .follow > span {
        font-weight: 700;
        font-size: 0.7rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-primary);
        opacity: 0.5;
    }
    .follow > a {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        color: var(--color-primary);
        text-decoration: none;
        padding: 4px 10px;
        border: 1px solid var(--color-secondary);
        border-radius: var(--radius-sm);
        transition: background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
    }
    .follow > a:hover {
        background: var(--color-secondary);
        border-color: var(--color-primary);
    }
    .licence {
        color: var(--color-primary);
        opacity: 0.65;
        line-height: 1.5;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
