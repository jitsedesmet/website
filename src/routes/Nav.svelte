<ul>
    <li><a href="about">About Me</a></li>
    <li><a href="blog">Blog</a></li>
    <li><a href="projects">Projects</a></li>
    <li><a href="publications">Publications</a></li>
    <li><a href="presentations">Presentations</a></li>
</ul>

<style>
    ul {
        max-width: 100%;
    }
    a {
        font-weight: bold;
        font-size: 1.1rem;
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: underline;
    }
    @media (min-width: 500px /* screen-size-big */) {
        ul {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(5, 1fr);
            text-align: center;
        }
    }
</style>
