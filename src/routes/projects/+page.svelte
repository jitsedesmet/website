<script>
    import IconsSvg from "$lib/IconsSvg.svelte";
    import ProjectGrid from "$lib/ProjectGrid.svelte";
    import LinkProjectBox from "$lib/LinkProjectBox.svelte";
</script>

<svelte:head>
    <title>Projects | Jitse De Smet</title>
    <meta name="description" content="Blog of Jitse De Smet">
</svelte:head>

<ProjectGrid>
    <LinkProjectBox
            href="https://github.com/jitsedesmet/sparql-view-unfold"
            title="SPARQL View Unfold"
    >
        {#snippet info()}
            SPARQL View Unfold answers SPARQL 1.2 queries posed over views, by rewriting them into queries
            over the data those views are defined on. Views are SPARQL CONSTRUCT queries that get unfolded
            into the user query, after which a pipeline of optimisations produces a query any SPARQL engine can answer.
            This allows, for example, running SPARQL 1.2 queries over RDF 1.1 data.
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="laptopCode" height="30px"
                      href="https://2026-query-rewriting.demo.jitsedesmet.be"
                      arialLabel="Try the SPARQL View Unfold demo live"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="npm" height="30px"
                      href="https://www.npmjs.com/package/sparql-view-unfold"
                      arialLabel="SPARQL View Unfold on npm"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://comunica.github.io/traqula/"
            title="Traqula"
    >
        {#snippet img()}
            <img  alt="Traqula logo" src="/traqula-logo.svg">
        {/snippet}
        {#snippet info()}
            Traqula is a highly flexible TypeScript framework for parsing, transforming, and generating
            structured languages, with an initial focus on the SPARQL query language.
            It ships pre-built engines for SPARQL 1.1 and 1.2, and lets you customise parsers, transformers,
            and generators through a builder pattern.
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="github" height="30px"
                      href="https://github.com/comunica/traqula"
                      arialLabel="Explore the source code of Traqula"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://comunica.dev/"
            title="Comunica"
    >
        {#snippet img()}
            <img  alt="Comunica logo" src="/comunica-logo.svg">
        {/snippet}
        {#snippet info()}
            Comunica is a knowledge graph querying framework for JavaScript,
            enabling flexible SPARQL and GraphQL querying over decentralized RDF on the Web.
            Its modular architecture allows engines to be assembled from independent building blocks,
            making it a platform for research on query processing.
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="github" height="30px"
                      href="https://github.com/comunica/comunica"
                      arialLabel="Explore the source code of Comunica"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://github.com/jitsedesmet/ORset-RDF-store"
            title="OR-Set RDF Store"
    >
        {#snippet info()}
            OR-Set RDF Store is a proof-of-concept RDFjs-compliant triple store implementing an add-wins OR-Set CRDT.
            It lets multiple clients read and write the same RDF graph concurrently, even while offline,
            and later reconcile their changes over HTTP without conflicts.
            The CRDT metadata is stored inline using RDF 1.2 triple terms.
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="npm" height="30px"
                      href="https://www.npmjs.com/package/orset-rdf-store"
                      arialLabel="OR-Set RDF Store on npm"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://mush-id.jitsedesmet.be"
            title="Mush-ID"
    >
        {#snippet img()}
            <img  alt="Mush ID logo" src="https://mush-id.jitsedesmet.be/favicon.png">
        {/snippet}
        {#snippet info()}
            Mush ID is a progressive web app that allows you to identify mushrooms
            native to Belgium and the Netherlands.
            It takes the idea of a field guide and makes it digital.
            In this digitalisation, I saw the potential to handle the uncertainty that comes with identifying mushrooms.
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="github" height="30px"
                      href="https://github.com/jitsedesmet/mush-id"
                      arialLabel="Explore the source code of mush-id"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
        href="https://plan-a.app/"
        title="Plan-A"
    >
        {#snippet img()}
            <img  alt="Plan-A logo" src="https://plan-a.app/favicon.png">
        {/snippet}
        {#snippet info()}
            <p>
                Plan-A is a flutter based web app that allows parents to
                track day-to-day progress of their children with Autism Spectrum Disorder.
                For the children, it not only provides them with a visual schedule, but also empowers them throughout the day.
            </p>
            <p>
                In this project, I helped with the development and deployment of the Rust backend.
            </p>
        {/snippet}
    </LinkProjectBox>
</ProjectGrid>


<style>
    img {
        height: 100px;
        place-self: center;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
</style>
