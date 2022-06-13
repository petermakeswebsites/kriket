<script lang="ts">
import type { Bug } from "$lib/bugStore";
import { format } from "date-fns"
import JSONTree from 'svelte-json-tree'
import { Icon } from "sveltestrap";
export let bug : Bug
</script>
{#if bug}
<h1>{bug.domain}</h1>

<td class="bug-list-error"><div class="bug-list-error-tree"><JSONTree value={bug.error}  /></div><a href="#" on:click|preventDefault={() => console.warn(bug.error)}><Icon name="braces" /></a></td>
<td>{bug.custom?.version}</td>
<td>{format(bug.time, "MMM do yyyy h:mm bbb")}</td>
<td>{bug.domain}</td>

{:else}
whoops! an error happened
{/if}