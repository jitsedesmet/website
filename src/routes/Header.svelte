<div class="header-inner">
    <div class="brand">
        <a class="brand-initials" href="/" aria-label="Go to home page">JDS</a>
        <div class="brand-text">
            <a href="/">Jitse De Smet</a>
            <span class="brand-tagline">Researcher · Computer Scientist</span>
        </div>
    </div>
</div>

<style>
    .header-inner {
        margin: auto;
        padding: 14px 20px;
        width: 100%;
    }
    .brand {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    .brand-initials {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px;
        min-width: 46px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        border: 2px solid rgba(255, 255, 255, 0.35);
        color: white;
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        transition: background var(--transition), border-color var(--transition);
    }
    .header-inner:hover .brand-initials,
    .brand-initials:hover {
        background: rgba(255, 106, 61, 0.25);
        border-color: var(--color-tertiary);
        opacity: 1;
    }
    .brand-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    a {
        font-weight: 700;
        font-size: 1.4rem;
        color: white;
        text-decoration: none;
        letter-spacing: -0.01em;
        transition: opacity var(--transition-fast);
    }
    a:hover {
        opacity: 0.85;
    }
    .brand-tagline {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }
</style>

