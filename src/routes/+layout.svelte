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
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
        border-bottom: 3px solid rgba(255, 106, 61, 0.5);
    }
    nav {
        grid-area: nav;
        border-radius: 0 0 10px 10px;
        padding: 8px 16px 12px;
        background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    aside {
        grid-area: sidebar;

        padding: 16px 14px 20px;
        color: var(--color-opposite-text);
        background-color: var(--color-bg-subtle);
        @media (min-width: 500px /* screen-size-big */) {
            border-right: 1px solid var(--color-secondary);
        }
    }
    .main {
        grid-area: main;
        background-color: var(--color-bg);
        padding: 20px;
        min-width: 0;
    }
    footer {
        grid-area: footer;
        padding: 16px 20px;
        background-color: var(--color-bg);
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
            grid-template-columns: 220px 1fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas:
              "header  header"
              "nav     nav"
              "sidebar main"
              "footer  footer";
        }
    }
</style>
