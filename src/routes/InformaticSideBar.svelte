<script lang="ts">
    import IconsSvg from "$lib/IconsSvg.svelte";
</script>

<!-- TODO: Just Shrink the sidebar to short info in mobile -->

<div class="info-window">
    <img class="personal-image" alt="Jitse De Smet" src="/favicon.png">
    <div class="name">
        Jitse De Smet
    </div>
    <div class="bibliography-short">
        Fresh PhD student at Ghent University.
    </div>
    <!--Icons from -->
    <ul class="info-list">
        <li>
            <IconsSvg name="locationDot" color="var(--color-primary)"/>
            <a href="https://www.google.com/maps/place/Ghent/">Ghent, Belgium</a>
        </li>
        <li>
            <IconsSvg name="building" color="var(--color-primary)"/>
            <a href="https://www.ugent.be/en">Ghent University</a>
        </li>
        <li>
            <IconsSvg name="envelope" color="var(--color-primary)"/>
            <a href="mailto:jitse.desmet@ugent.be">jitse.desmet@ugent.be</a>
        </li>
        <li>
            <IconsSvg name="github" color="var(--color-primary)"/>
            <a href="https://github.com/jitsedesmet/">GitHub</a>
        </li>
        <li>
            <IconsSvg name="linkedIn" color="var(--color-primary)"/>
            <a href="https://www.linkedin.com/in/jitse-de-smet-051031206/">LinkedIn</a>
        </li>
    </ul>
</div>

<style>
    .personal-image {
        overflow: clip;
        grid-area: image;
        place-self: start;
        border-radius: 50%;
        max-height: 144px;
        @media (min-width: 500px /* screen-size-big */) {
            max-height: unset;
            max-width: 75%;
        }
    }
    .name {
        grid-area: name;

        font-size: 1.5rem;
        font-weight: bold;
    }
    .bibliography-short {
        grid-area: bibliography;

        font-size: 0.75rem;
        color: var(--color-secondary);
    }
    .info-list {
        grid-area: info-list;
    }
    li {
        margin: 0.2rem 0;
    }

    .info-window {
        display: grid;
        grid-template-columns: min-content max-content;
        column-gap: 10px;
        grid-template-areas:
            "image name"
            "image bibliography"
            "image info-list";
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 1fr;
            gap: 0.2rem;
            grid-template-areas:
              "image"
              "name"
              "bibliography"
              "info-list";
        }
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
