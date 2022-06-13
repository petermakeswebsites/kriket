import { derived, writable, get as getStore } from "svelte/store"
import { generate } from "randomstring"
import { db } from "./db"

export type Bug = {
    id: string
    error: any
    domain: string
    custom?: Record<string, any>
    time: number
}

export type NewBug = Omit<Bug, "id" | "time">

// Database
if (!db.data) throw new Error("database has no data")

// Init if empty

export const isBug = (obj : object) : obj is Bug => isNewBug(obj) && "id" in obj && "time" in obj
export const isNewBug = (obj : object) : obj is NewBug => (obj && 'error' in obj && 'domain' in obj)

export const bugs = writable<Bug[]>(db.data.bugs)
export const bugsSorted = derived(bugs, bugs => bugs.sort((a,b) => a.time - b.time))
export const getBug = (id : string) : Bug | undefined => getStore(bugs).find(bug => bug.id == id)
export const setBug = (newBug : NewBug) => {
    const id = generate(10)
    const time = Date.now()
    const bug = {...newBug, id, time}
    bugs.update(bugs => {
        bugs.push(bug)
        return bugs
    })
    console.log("Bugs:", getStore(bugs))
    db.write()
    return id
}
export const delBug = (id : string) => {
    const index = getStore(bugs).findIndex(bug => bug.id == id)
    if (index != -1) {
        bugs.update(bugs => {
            bugs = bugs.filter(bug => bug.id != id)
            return bugs
        }) 
        db.write()
        return true
    } else {
        return false
    }
}

export const getBugList = getStore(bugsSorted)