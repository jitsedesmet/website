<script>
    import IconsSvg from "$lib/IconsSvg.svelte";
</script>

<svelte:head>
    <title>Projects | Jitse De Smet</title>
    <meta name="description" content="Blog of Jitse De Smet">
</svelte:head>

<div class="grid">
    <a class="project" href="https://mush-id.jitsedesmet.be" target="_blank">
        <img alt="Mush ID logo" src="https://mush-id.jitsedesmet.be/favicon.png">
        <div class="title">
            Mush-ID
        </div>
        <div class="info">
            Mush ID is a progressive web app that allows you to identify mushrooms
            native to Belgium and the Netherlands.
            It takes the idea of a field guide and makes it digital.
            In this digitalisation, I saw the potential to handle the uncertainty that comes with identifying mushrooms.
        </div>
        <IconsSvg name="github" height="50px" width="50px"/>
    </a>
    <a class="project" href="https://parent-dev-asd.jitsedesmet.be" target="_blank">
        <img alt="Plan-A logo" src="https://parent-dev-asd.jitsedesmet.be/assets/assets/graphics/logo.png">
        <div class="title">
            Plan-A
        </div>
        <div class="info">
            <p>
                Plan-A is a flutter based web app that allows parents to
                track day-to-day progress of their children with Autism Spectrum Disorder.
                For the children, it not only provides them with a visual schedule, but also empowers them throughout the day.
            </p>
            <p>
                In this project, I helped with the development and deployment of the Rust backend.
            </p>
        </div>
        <IconsSvg name="github" height="50px" width="50px"/>
    </a>
</div>


<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .project {
        background: white;
        padding: 20px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    .project:hover {
        box-shadow: 5px 5px 5px 5px var(--color-primary);
    }
    img {
        height: 60%;
        width: 60%;
        place-self: center;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
    .info {
        color: var(--color-secondary);
        font-style: italic;
    }
    .title {
        justify-self: center;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
    }
</style>
