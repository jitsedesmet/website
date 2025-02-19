<script lang="ts">
  // https://docs.triply.cc/yasgui-api/#yasgui-api-reference
  // https://www.youtube.com/watch?v=Y5IiSdcqdeQ&themeRefresh=1
  import Yasqe from "@triply/yasqe";
  import {page} from "$app/state";
  import { goto} from "$app/navigation";

  const POD = {
    BY_CREATION: 'http://localhost:3000/pods/00000000000000000065/',
    BY_LOCATION: 'http://localhost:3000/pods/00000000000000000150/',
    SEPARATE: 'http://localhost:3000/pods/00000000000000000143/',
    TOGETHER: 'http://localhost:3000/pods/00000000000000000094/'
  }
  const POD_MAP = {
    ['http://localhost:3000/pods/00000000000000000065/']: 'pods/by-creation/',
    ['http://localhost:3000/pods/00000000000000000150/']: 'pods/by-location/',
    ['http://localhost:3000/pods/00000000000000000143/']: 'pods/separate/',
    ['http://localhost:3000/pods/00000000000000000094/']: 'pods/together/',
  }
  const demoQueries = {
    ['first demo']: `select * where {
?s ?p ?o
}`,
    ['second demo']: `select * where {
?s ?p ?o
} limit 10`,
  }

  interface YasgeContext {
    query: string | undefined;
  }
  function yasge(element: HTMLElement, { query: startQuery }: YasgeContext) {
    const yasqe = new Yasqe(element, {});
    if (startQuery !== undefined) yasqe.setValue(startQuery);
    return {
      update({ query: newQuery }: YasgeContext) {
        if (newQuery !== undefined) yasqe.setValue(newQuery);
        query = undefined;
      },
      destroy() {
        yasqe.destroy();
      }
    };
  }

  let query = $state<string | undefined>(undefined);
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
        let str = part;
        for (const [key, value] of Object.entries(POD_MAP)) {
            str = str.replace(key, value);
        }
        return { str, href };
      }
      return {str: part};
    }))
    return res as { str: string; href?: string }[][];
  });
</script>

<div class="demo-group">
    {#each Object.entries(demoQueries) as [name, demoQuery]}
        <button onclick={() => query = demoQuery}>{name}</button>
    {/each}
</div>

<select bind:value={pod} onchange={() => goto(`?source=${pod}`)}>
    <option value={POD.BY_CREATION}>By Creation Date</option>
    <option value={POD.BY_LOCATION}>By location</option>
    <option value={POD.SEPARATE}>Separately</option>
    <option value={POD.TOGETHER}>Together</option>
</select>

Corresponds to pod: <a href={pod}>{pod}</a>


<div use:yasge={{ query }} class="yasge"></div>
{query}
<br>
<a class="no-fancy" href={source}>open source</a>

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