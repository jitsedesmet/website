<script>
    import IconsSvg from "$lib/IconsSvg.svelte";
</script>

<div class="footer">
    <div class="follow">
        FOLLOW:
        <a href="https://github.com/jitsedesmet/">
            <IconsSvg name="github" height="0.8rem"/>
            GITHUB
        </a>
        <a href="/blog/rss.xml">
            <IconsSvg name="rss" height="0.8rem" class="rss" color="#fa9b39"/>
            RSS FEED
        </a>
    </div>
    <div class="licence">
        ©2024-2024 Jitse De Smet
        <br>
        Contents of this website are licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> exept otherwise noted.
    </div>
</div>

<style>
    .footer {
        font-size: 0.8rem;
    }
    .follow, .follow > * {
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
