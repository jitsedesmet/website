<script lang="ts">
    import Nav from "./Nav.svelte";
    import InformationSideBar from "./InformaticSideBar.svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import type {Snippet} from "svelte";

    interface Props {
        children?: Snippet;
    }
    let { children }: Props = $props();
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
        {@render children?.()}
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
        background: linear-gradient(160deg, #1e2d4a 0%, var(--color-primary) 100%);
        border-bottom: 2px solid rgba(224, 92, 42, 0.35);
    }
    nav {
        grid-area: nav;
        padding: 0 16px;
        background: #16213a;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    aside {
        grid-area: sidebar;

        padding: 20px 16px 24px;
        color: var(--color-text);
        background-color: var(--color-bg-subtle);
        @media (min-width: 500px /* screen-size-big */) {
            border-right: 1px solid var(--color-secondary);
        }
    }
    .main {
        grid-area: main;
        background-color: var(--color-bg);
        padding: 24px 28px;
        min-width: 0;
    }
    footer {
        grid-area: footer;
        padding: 14px 24px;
        background-color: var(--color-bg-subtle);
        border-top: 1px solid var(--color-secondary);
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
        box-shadow: var(--shadow-lg);
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 210px 1fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas:
              "header  header"
              "nav     nav"
              "sidebar main"
              "footer  footer";
        }
    }
</style>
