<ul>
    <li><a href="">About Me</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Publications</a></li>
    <li><a href="">Presentations</a></li>
</ul>

<style>
    ul {
        max-width: 100%;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        font-weight: bold;
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
