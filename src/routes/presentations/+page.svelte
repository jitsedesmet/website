<svelte:head>
    <title>Presentations | Jitse De Smet</title>
    <meta name="description" content="Presentations of Jitse De Smet">
</svelte:head>

<script>
    import ProjectGrid from "$lib/ProjectGrid.svelte";
    import LinkProjectBox from "$lib/LinkProjectBox.svelte";
    import IconsSvg from "$lib/IconsSvg.svelte";
</script>

<ProjectGrid>
    <LinkProjectBox
            href="/presentations/FWO%20interview%202024.pdf"
            title="FWO interview 2024"
    >
        <img alt="Optimizing Write Performance in Decentralized Personal Data Ecosystems"
             src="/presentations/thumbnail/FWO%20interview%202024.png"
             slot="img"
        />
        <svelte:fragment slot="info">
            FWO interview presentation for my proposal
            "Optimizing Write Performance in Decentralized Personal Data Ecosystems".
        </svelte:fragment>

    </LinkProjectBox>
    <LinkProjectBox
        href="https://thesis.jitsedesmet.be/presentation/final-presentation.html"
        title="Storage Guidance Vocab"
    >
        <iframe title="Final presentation of my masters thesis"
                src="https://thesis.jitsedesmet.be/presentation/final-presentation.html"
                slot="img"
        />
        <svelte:fragment slot="info">
            In my masters thesis I created the Storage Guidance Vocabulary (SGV).
            Using SGV automated clients are able to determine the intended storage location of data in a
            <a href="https://www.w3.org/TR/ldp/">LDP</a>
            interface.
        </svelte:fragment>
        <svelte:fragment slot="additional-links">
            <IconsSvg name="globe" height="30px"
                      href="https://thesis.jitsedesmet.be/"
                      --color-hover="var(--color-quaternary)"
            />
            <IconsSvg name="github" height="30px"
                      href="https://github.com/jitsedesmet/thesis"
                      --color-hover="var(--color-quaternary)"
            />

            <IconsSvg name="filePDF" height="30px"
                      href="https://thesis.jitsedesmet.be/solution/report.pdf"
                      --color-hover="var(--color-quaternary)"
            />
            <IconsSvg name="ts" height="30px"
                      href="https://github.com/jitsedesmet/sgv-update-engine"
                      --color-hover="var(--color-quaternary)"
            />
        </svelte:fragment>
    </LinkProjectBox>

</ProjectGrid>

<style>
    iframe {
        border: 0px none;
        overflow: hidden;
        pointer-events: none;
    }
    img, iframe {
        height: 200px;
        place-self: center;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
</style>
