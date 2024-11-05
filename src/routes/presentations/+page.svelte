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
        {#snippet img()}
            <img alt="Optimizing Write Performance in Decentralized Personal Data Ecosystems"
                 src="/presentations/thumbnail/FWO%20interview%202024.png" />
        {/snippet}
        {#snippet info()}
            FWO interview presentation for my proposal
            "Optimizing Write Performance in Decentralized Personal Data Ecosystems".
        {/snippet}
    </LinkProjectBox>
    <LinkProjectBox
        href="https://thesis.jitsedesmet.be/presentation/final-presentation.html"
        title="Storage Guidance Vocab"
    >
        {#snippet img()}
            <img alt="Final presentation of my masters thesis"
             src="/presentations/thumbnail/master%20thesis%20presentation.png"/>
        {/snippet}
        {#snippet info()}
            In my masters thesis I created the Storage Guidance Vocabulary (SGV).
            Using SGV automated clients are able to determine the intended storage location of data in a
            <a href="https://www.w3.org/TR/ldp/">LDP</a>
            interface.
        {/snippet}
        {#snippet additionalLinks()}
            <IconsSvg name="globe" height="30px"
                      href="https://thesis.jitsedesmet.be/"
                      arialLabel="Learn more about my thesis on my dedicated thesis website"
                      --color-hover="var(--color-quaternary)"
            />
            <IconsSvg name="github" height="30px"
                      href="https://github.com/jitsedesmet/thesis"
                      arialLabel="Explore source code of thesis website"
                      --color-hover="var(--color-quaternary)"
            />

            <IconsSvg name="filePDF" height="30px"
                      href="https://thesis.jitsedesmet.be/solution/report.pdf"
                      arialLabel="Read the thesis report"
                      --color-hover="var(--color-quaternary)"
            />
            <IconsSvg name="ts" height="30px"
                      arialLabel="Explore the source code of the SGV update engine"
                      alt="Typescript"
                      href="https://github.com/jitsedesmet/sgv-update-engine"
                      --color-hover="var(--color-quaternary)"
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
