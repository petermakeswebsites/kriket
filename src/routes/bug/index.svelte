<script lang="ts">
import type { Bug } from "$lib/bugStore"
import { Icon, Table } from "sveltestrap"
import { isToday, format } from "date-fns"
import { submit } from "$lib/useSubmit"
import JSONTree from 'svelte-json-tree'
import { promiseModal } from "$lib/components/Modal.svelte"

export let bugs : Bug[]

const deleteBug = async (id : string) => {
    const deleted = await fetch("/bug", {
        method: "DELETE",
        headers: {
            "accept": "application/json"
        },
        body: JSON.stringify({
            id
        })
    })

    if (!deleted) {
        console.error(deleted)
        throw new Error("oops!")
    }

    const rtnBugs : Bug[] = (await deleted.json()).bugs
    if (rtnBugs) bugs = rtnBugs
    return true
}

</script>
<h1>Bug Report</h1>
Today's bugs: {bugs.filter(b => isToday(b.time)).length}
<Table class="bug-list">
    <thead>
        <tr>
            <th>Bug</th>
            <th>Version</th>
            <th>Date</th>
            <th>Domain</th>
        </tr>
    </thead>
    <tbody>
        {#each bugs as bug, i (bug.id)}
            <tr>
                <td class="bug-list-error" id={"bug_" + bug.id}>
                    <!-- <div class="bug-list-error-tree">
                        <JSONTree value={bug.error}  />
                    </div> -->
                    <div>{bug.error?.message}</div>
                    <a href="#" on:click|preventDefault={() => console.warn(bug.error)}>
                        <Icon name="braces" />
                    </a>
                </td>
                <td>{bug.custom?.version}</td>
                <td>{format(bug.time, "MMM do yyyy h:mm bbb")}</td>
                <td>{bug.domain}</td>
                <td>
                    <a href="#" on:click|preventDefault={() => promiseModal({title: "Are you sure?", desc: "This is irreversible", label: "Delete", buttonColor: "danger"}).then(() => deleteBug(bug.id)).catch(console.log)} class="link-danger">
                        <Icon name="x-circle-fill" />
                    </a>
                </td>
            </tr>
        {/each}
    </tbody>
</Table>
<style lang="sass" global>
    .bug-list
        width: 100%
        .bug-list-error
            display: flex
            justify-content: space-between
            .bug-list-error-tree
                width: 100%
</style>
