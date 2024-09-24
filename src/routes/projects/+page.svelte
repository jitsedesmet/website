<svelte:head>
    <title>Projects | Jitse De Smet</title>
    <meta name="description" content="Blog of Jitse De Smet">
</svelte:head>

Have you seen <a href="https://mush-id.jitsedesmet.be">mush id</a>?

<style>
    a {
        color: inherit;
        text-decoration: none;
    }
    a {
        background:
                linear-gradient(
                        to right,
                        var(--color-primary),
                        var(--color-primary)
                ),
                linear-gradient(
                        to right,
                        var(--color-quaternary),
                        var(--color-quaternary)
                );
        background-size: 100% 3px, 0 3px;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 400ms;
    }
    a:hover {
        background-size: 0 3px, 100% 3px;
    }
</style>
