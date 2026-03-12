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
            <IconsSvg name="locationDot"/>
            <a href="https://www.google.com/maps/place/Ghent/" target="_blank">Ghent, Belgium</a>
        </li>
        <li>
            <IconsSvg name="building"/>
            <a href="https://www.ugent.be/en" target="_blank">Ghent University</a>
        </li>
        <li>
            <IconsSvg name="envelope"/>
            <a href="mailto:jitse.desmet@ugent.be" target="_blank">jitse.desmet@ugent.be</a>
        </li>
        <li>
            <IconsSvg name="github"/>
            <a href="https://github.com/jitsedesmet/" target="_blank">GitHub</a>
        </li>
        <li>
            <IconsSvg name="linkedIn"/>
            <a href="https://www.linkedin.com/in/jitse-de-smet-051031206/" target="_blank">LinkedIn</a>
        </li>
        <li>
            <IconsSvg name="orcid"/>
            <a href="https://orcid.org/0009-0002-6513-5013" target="_blank">ORCID</a>
        </li>
    </ul>
</div>

<style>
    .personal-image {
        overflow: clip;
        grid-area: image;
        place-self: start;
        border-radius: 50%;
        max-height: 60px;
        border: 2px solid var(--color-tertiary);
        box-shadow: 0 0 0 4px rgba(255, 106, 61, 0.15);
        transition: box-shadow var(--transition);
        @media (min-width: 500px /* screen-size-big */) {
            max-height: unset;
            max-width: 80%;
            border-width: 3px;
        }
    }
    .personal-image:hover {
        box-shadow: 0 0 0 7px rgba(255, 106, 61, 0.22);
    }
    .name {
        grid-area: name;

        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: var(--color-primary);
    }
    .bibliography-short {
        grid-area: bibliography;

        font-size: 0.72rem;
        color: var(--color-primary-light);
        opacity: 0.75;
        font-style: italic;
    }
    .info-list {
        grid-area: info-list;
        margin-top: 4px;
    }
    li {
        margin: 0.45rem 0;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 6px;
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
            gap: 0.3rem;
            grid-template-areas:
              "image"
              "name"
              "bibliography"
              "info-list";
        }
    }
    a {
        text-decoration: none;
        font-size: 0.85rem;
        color: var(--color-primary);
        border-bottom: 1px solid transparent;
        transition: border-color var(--transition-fast), color var(--transition-fast);
    }
    a:hover {
        color: var(--color-tertiary);
        border-bottom-color: var(--color-tertiary);
    }
</style>
