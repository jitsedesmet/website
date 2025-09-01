<script>
import IconsSvg from "$lib/IconsSvg.svelte";
import LinkProjectBox from "$lib/LinkProjectBox.svelte";
import ProjectGrid from "$lib/ProjectGrid.svelte";
</script>

<svelte:head>
    <title>Presentations | Jitse De Smet</title>
    <meta name="description" content="Presentations of Jitse De Smet">
</svelte:head>


<ProjectGrid>
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
