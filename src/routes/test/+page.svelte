<script lang="ts">
  // https://docs.triply.cc/yasgui-api/#yasgui-api-reference
  // https://www.youtube.com/watch?v=Y5IiSdcqdeQ&themeRefresh=1
  import Yasqe from "@triply/yasqe";
  import {page} from "$app/state";
  import { goto} from "$app/navigation";

  const POD = {
    BY_CREATION: 'http://localhost:3000/pods/by-creation/',
    BY_LOCATION: 'http://localhost:3000/pods/by-location/',
    SEPARATE: 'http://localhost:3000/pods/separate/',
    TOGETHER: 'http://localhost:3000/pods/together/'
  }

  function yasge(element: HTMLElement) {
    const yasqe = new Yasqe(element, {});
    yasqe.on("change", () => {
      query = yasqe.getValue();
    });
    return {
      update(newQuery: string) {
        yasqe.setValue(newQuery);
      },
      destroy() {
        yasqe.destroy();
      }
    };
  }

  let query = $state<string>('');
  let pod = $state<string>(POD.BY_CREATION);
  let source = $derived<string>(page.url.searchParams.get('source') ?? POD.BY_CREATION);

  const content = $derived.by(async () => {
    if (!source) return '';
    const result = await fetch(new URL(source!), {headers: {'Accept': 'application/n-triples'}});
    const text = await result.text();
    const triples: string[][] = text.split('\n').filter(line => line.length > 0)
      .map(line => line.match(/^([^ ]+) ([^ ]+) (.*) \./)?.slice(1, 4) ?? ['fail', 'fail', 'fail']);
    const res = triples.map(triple => triple.map(part => {
      if (part[0] === '<' && part[part.length - 1] === '>') {
        const href = '?source=' + encodeURIComponent(part.slice(1, -1));
        return {str: part, href };
      }
      return {str: part};
    }))
    return res as { str: string; href?: string }[][];
  });
</script>

<select bind:value={pod} onchange={() => goto(`?source=${pod}`)}>
    <option value={POD.BY_CREATION}>By Creation Date</option>
    <option value={POD.BY_LOCATION}>By location</option>
    <option value={POD.SEPARATE}>Separately</option>
    <option value={POD.TOGETHER}>Together</option>
</select>

<div use:yasge class="yasge"></div>
{query}

<br>
{pod}
<br>
{source}

<div class="browser">
    {#await content}
        <p>Loading...</p>
    {:then content}
        <div class="grid">
            {#each content as line}
                {#each line as item}
                    {#if 'href' in item}
                        <a class="no-fancy" href={item.href}>{item.str}</a>
                    {:else}
                        <div>{item.str}</div>
                    {/if}
                {/each}
            {/each}
        </div>

    {/await}
</div>


<style>
    :global {
        @import "@triply/yasgui/build/yasgui.min.css";
    }

    .browser {
        height: 500px;
        width: 1500px;
        border: black 2px solid;
        padding: 10px;
        margin: 10px;
        overflow: scroll;
    }

    .grid {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
    }
</style>