<svelte:head>
    <title>Jitse De Smet</title>
    <meta name="description" content="Personal Website of Jitse De Smet">
</svelte:head>

<div class="hero">
    <div class="hero-label">Welcome</div>
    <h1>Jitse De Smet</h1>
    <p>
        I am a <a href="publications">PhD researcher</a> at <a href="http://www.ugent.be/ea/idlab/en">IDLab</a> with the
        <a href="https://knows.idlab.ugent.be/">KNoWS</a> research group at Ghent University.
        My research focuses on writing abstractions for decentralized data ecosystems.
    </p>
    <p>
        These abstractions are brought to life using the <a href="https://comunica.dev/">Comunica</a> query engine.
        I have many years of developer experience in the Comunica project,
        dating back to many contributions made in the expression evaluator,
        previously known as <a href="https://github.com/comunica/sparqlee">sparqlee</a>.
    </p>
</div>

<style>
    .hero {
        padding: 10px 0 20px;
    }
    .hero-label {
        display: inline-block;
        font-family: var(--font-sans);
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--color-tertiary);
        margin-bottom: 8px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--color-secondary);
        width: 100%;
    }
    h1 {
        font-family: var(--font-serif);
        font-size: 2rem;
        font-weight: 600;
        color: var(--color-primary);
        margin: 0 0 16px;
        letter-spacing: 0;
        font-style: italic;
    }
</style>

