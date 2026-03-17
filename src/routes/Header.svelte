<div class="header-inner">
    <div class="brand">
        <a class="brand-initials" href="/" aria-label="Go to home page">JDS</a>
        <div class="brand-text">
            <a href="/">Jitse De Smet</a>
            <span class="brand-tagline">PhD Researcher · Computer Scientist · Ghent University</span>
        </div>
    </div>
</div>

<style>
    .header-inner {
        margin: auto;
        padding: 16px 24px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .brand {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .brand-initials {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        min-width: 50px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.28);
        color: white;
        font-family: var(--font-serif);
        font-weight: 500;
        font-style: italic;
        font-size: 1.1rem;
        letter-spacing: 0.04em;
        transition: background var(--transition), border-color var(--transition);
        text-decoration: none;
    }
    .header-inner:hover .brand-initials,
    .brand-initials:hover {
        background: rgba(224, 92, 42, 0.2);
        border-color: rgba(224, 92, 42, 0.6);
        opacity: 1;
    }
    .brand-text {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    a {
        font-family: var(--font-serif);
        font-weight: 600;
        font-style: normal;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
        letter-spacing: 0;
        transition: opacity var(--transition-fast);
    }
    a:hover {
        opacity: 0.85;
    }
    .brand-tagline {
        color: rgba(255, 255, 255, 0.55);
        font-family: var(--font-sans);
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.09em;
        text-transform: uppercase;
    }
</style>

