<script>
    import Nav from "./Nav.svelte";
    import InformationSideBar from "./InformaticSideBar.svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<!-- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids -->
<div class="layout">
    <header><Header/></header>
    <nav>
        <Nav/>
    </nav>
    <aside>
        <InformationSideBar/>
    </aside>
    <div class="main">
        <slot></slot>
    </div>
    <footer><Footer/></footer>
</div>

<style>
    header {
        grid-area: header;

        display: flex;
        flex-direction: row;
        justify-content: center;

        color: white;
        background-color: var(--color-primary);
    }
    nav {
        grid-area: nav;
        border-radius: 0 0 10px 10px;
        padding: 0 0 10px 10px;
        background-color: var(--color-primary);
    }
    aside {
        grid-area: sidebar;

        display: flex;
        flex-direction: column;
        padding: 5px 0 0 10px;

        color: var(--color-opposite-text);
    }
    .main {
        grid-area: main;
        background-color: var(--color-bg);
        padding: 10px 0 0 0;
    }
    footer {
        grid-area: footer;
        padding: 10px;
        background-color: var(--color-bg);
    }
    .layout {
        width: min(1080px, 100svw);
        min-height: 100svh;
        margin: auto;
        display: grid;
        grid-template-rows: auto auto auto 1fr auto;
        grid-template-areas:
            "header"
            "nav"
            "sidebar"
            "main"
            "footer";
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 1fr 3fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas:
              "header  header"
              "nav     nav"
              "sidebar main"
              "footer  footer";
        }
    }
</style>
