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
        margin: auto;
    }
    nav {
        grid-area: nav;
    }
    aside {
        grid-area: sidebar;
        display: flex;
        flex-direction: column;
        /*background-color: var(--color-main-subsubtext);*/
    }
    .main {
        grid-area: main;
    }
    footer {
        grid-area: footer;
    }
    .layout {
        background-color: var(--color-main-bg);
        width: min(1080px, 100svw);
        min-height: calc(100svh - 20px);
        margin: auto;
        padding: 10px 20px;
        display: grid;
        gap: 10px;
        grid-template-areas:
            "header"
            "nav"
            "sidebar"
            "main"
            "footer";
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 1fr 4fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas:
              "header  header"
              "nav     nav"
              "sidebar main"
              "footer  footer";
        }
    }
</style>
