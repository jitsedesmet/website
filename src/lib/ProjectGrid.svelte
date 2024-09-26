<div class="grid">
    <slot/>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        @media (min-width: 500px /* screen-size-big */) {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
