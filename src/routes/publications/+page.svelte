<script>
import IconsSvg from "$lib/IconsSvg.svelte";
import LinkProjectBox from "$lib/LinkProjectBox.svelte";
import ProjectGrid from "$lib/ProjectGrid.svelte";
</script>

<svelte:head>
    <title>Publications | Jitse De Smet</title>
    <meta name="description" content="Publications of Jitse De Smet">
</svelte:head>


<ProjectGrid>
    <LinkProjectBox
            href="https://2026-icwe-poster.jitsedesmet.be/"
            title="Client-Driven Offline-First RDF 1.2 using OR-Sets"
    >
        {#snippet info()}
            In reply of
            <a href="https://icwe2026.webengineering.org/">ICWE 2026</a>
            <a href="https://icwe2026.webengineering.org/index.php/poster-and-demo-track/">
                Poster and Demo track call for papers
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="npm" height="30px"
                      href="https://www.npmjs.com/package/orset-rdf-store"
                      arialLabel="npm"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="github" height="30px"
                      arialLabel="Explore the source code of the ORset RDF store"
                      href="https://github.com/jitsedesmet/add-wins-OR-set-RDF-datastore"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="fileA0" height="30px"
                      arialLabel="look at the poster for the ORset RDF Store"
                      href="https://orset-rdf.poster.jitsedesmet.be/"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://rubensworks.github.io/article-eswc2026-demo-comunica-mcp/"
            title="Comunica MCP SPARQL: Improving the Accuracy of AI Agents using SPARQL-based Access to Decentralized Knowledge Graphs"
    >
        {#snippet info()}
            In reply of
            <a href="https://2026.eswc-conferences.org/">ESWC 2026</a>
            <a href="https://2026.eswc-conferences.org/calls/poster-demo/">
                call for Poser and Demos
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="npm" height="30px"
                      arialLabel="npm"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="github" height="30px"
                      arialLabel="Explore the source code of Comunica MCP"
                      href="https://github.com/comunica/comunica-feature-mcp"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://2026-eswc-demo.jitsedesmet.be/"
            title="Demonstration of Composable SPARQL Parsing and Query Execution with Traqula and Comunica"
    >
        {#snippet info()}
            In reply of
            <a href="https://2026.eswc-conferences.org/">ESWC 2026</a>
            <a href="https://2026.eswc-conferences.org/calls/poster-demo/">
                call for Poser and Demos
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="laptopCode" height="30px"
                      href="https://compose-parser-engine.demo.jitsedesmet.be/"
                      arialLabel="Try the demo live"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="youtube" height="30px"
                      arialLabel="look at the SGF demo on YouTube"
                      href="https://youtu.be/7VFJGvxbRsI"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="github" height="30px"
                      arialLabel="Explore the source code of the demo"
                      href="https://github.com/jitsedesmet/demo-mixed-composability"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://traqula-resource.jitsedesmet.be/"
            title="Traqula: Providing a Foundation for The Evolving SPARQL Ecosystem Through Modular Query Parsing, Transformation, and Generation"
    >
        {#snippet info()}
            In reply of
            <a href="https://2026.eswc-conferences.org/">ESWC 2026</a>
            <a href="https://2026.eswc-conferences.org/calls/papers-resource-track/">
                Resources Track call for papers
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="npm" height="30px"
                      href="https://www.npmjs.com/package/@traqula/parser-sparql-1-2"
                      arialLabel="npm"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="github" height="30px"
                      arialLabel="Explore the source code of Traqula"
                      href="https://github.com/comunica/traqula"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://interface-data-description-hyperagents-2025.jitsedesmet.be/"
            title="A Vision on Algebraic Flows for Declarative Resource Descriptions"
    >
        {#snippet info()}
            In reply of
            <a href="https://ecai2025.org/">ECAI-2025</a>
            <a href="https://ecai2025.hyperagents.org/">
                HyperAgents Workshop call for papers/ Short paper
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="slideshow" height="30px"
                      arialLabel="slides used at the workshop"
                      href="https://idd-vision.slides.jitsedesmet.be/"
                      --color-hover="var(--color-tertiary)"
                      target="_blank"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://ceur-ws.org/Vol-4172/paper10.pdf"
            title="A Semantic Framework for Evaluating Post-hoc Explanations in Link Prediction"
    >
        {#snippet info()}
            In reply of
            <a href="https://ecai2025.org/">ECAI-2025</a>
            <a href="https://sites.google.com/unical.it/xai-krkgecai/home-page">
                XAI-KRKG Workshop call for papers/ Short paper
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="slideshow" height="30px"
                      arialLabel="slides used at the workshop"
                      href="https://docs.google.com/presentation/d/e/2PACX-1vT1d3kEO0ymWCk-nemnkUO38CyIZCqD2ZNYSxieBBTY8yr2eyoAR2lkTnr_RsIvW14c6IUUWNhDet1O/pub?start=false&loop=false&delayms=3000"
                      --color-hover="var(--color-tertiary)"
                      target="_blank"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://traqula-demo-semantics-2025.jitsedesmet.be/"
            title="Towards tackling SPARQL heterogeneity through modular parsing"
    >
        {#snippet info()}
            In reply of
            <a href="https://2025-eu.semantics.cc/">SEMANTiCS'25</a>
            <a href="https://semantics2025.semdev.org/">
                Developers Workshop call for papers/ Software talk
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="slideshow" height="30px"
                      arialLabel="slides used at the workshop"
                      href="https://modular-parsing.demo.jitsedesmet.be/"
                      --color-hover="var(--color-tertiary)"
                      target="_blank"
            />
            <IconsSvg name="github" height="30px"
                      arialLabel="Explore the source code of the parsers constructed during the demo"
                      href="https://github.com/jitsedesmet/2025-semdev-demo"
                      --color-hover="var(--color-tertiary)"
                      target="_blank"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://phd-symposium-eswc-2025.jitsedesmet.be/"
            title="Optimizing Write Performance in Decentralized Data Ecosystems"
    >
        {#snippet info()}
            In reply of ESWC 2025's
            <a href="https://2025.eswc-conferences.org/call-for-ph-d-symposium/">
                call for Ph.D. Symposium
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="slideshow" height="30px"
                      arialLabel="slides used at ESWC 2025"
                      href="https://phd-symposium-2025.slides.jitsedesmet.be/"
                      --color-hover="var(--color-tertiary)"
                      target="_blank"
            />
            <IconsSvg name="fileA0" height="30px"
                      arialLabel="look at the poster for the SGF demo"
                      href="/posters/2025-phd-symp.pdf"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
            href="https://sgf-demo-eswc-2025.jitsedesmet.be/"
            title="SGF: SPARQL Updates over Decentralized Knowledge Graphs without Access Path Dependencies"
    >
        {#snippet info()}
            In reply of ESWC 2025's
            <a href="https://2025.eswc-conferences.org/call-for-posters-and-demos/">
                call for Poser and Demos
            </a>
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="laptopCode" height="30px"
                      href="https://sgf.demo.jitsedesmet.be/"
                      arialLabel="Try the demo live"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="youtube" height="30px"
                      arialLabel="look at the SGF demo on YouTube"
                      href="https://youtu.be/4xJFaYyCSIg"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="github" height="30px"
                      arialLabel="Explore the source code of the SGF update engine"
                      href="https://github.com/jitsedesmet/sgv-update-engine"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
            <IconsSvg name="fileA0" height="30px"
                      arialLabel="look at the poster for the SGF demo"
                      href="/posters/2025-demo-sgf.pdf"
                      target="_blank"
                      --color-hover="var(--color-tertiary)"
            />
        {/snippet}
    </LinkProjectBox>

</ProjectGrid>

<style>
    img {
        height: 200px;
        place-self: center;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
</style>
