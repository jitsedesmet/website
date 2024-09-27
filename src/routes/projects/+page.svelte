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
            href="https://mush-id.jitsedesmet.be"
            title="Mush-ID"
    >
        <img slot="img" alt="Mush ID logo" src="https://mush-id.jitsedesmet.be/favicon.png">
        <svelte:fragment slot="info">
            Mush ID is a progressive web app that allows you to identify mushrooms
            native to Belgium and the Netherlands.
            It takes the idea of a field guide and makes it digital.
            In this digitalisation, I saw the potential to handle the uncertainty that comes with identifying mushrooms.
        </svelte:fragment>
        <svelte:fragment slot="additional-links">
            <IconsSvg name="github" height="30px"
                      href="https://github.com/jitsedesmet/mush-id"
                      arialLabel="Explore the source code of mush-id"
                      --color-hover="var(--color-quaternary)"
            />
        </svelte:fragment>
    </LinkProjectBox>
    <LinkProjectBox
            href="https://parent-dev-asd.jitsedesmet.be"
            title="Plan-A"
    >
        <img slot="img" alt="Plan-A logo" src="https://parent-dev-asd.jitsedesmet.be/assets/assets/graphics/logo.png">
        <svelte:fragment slot="info">
            <p>
                Plan-A is a flutter based web app that allows parents to
                track day-to-day progress of their children with Autism Spectrum Disorder.
                For the children, it not only provides them with a visual schedule, but also empowers them throughout the day.
            </p>
            <p>
                In this project, I helped with the development and deployment of the Rust backend.
            </p>
        </svelte:fragment>

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
