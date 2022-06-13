import type { RequestHandler } from "@sveltejs/kit";
import { getBug, bugsSorted, bugs, delBug } from "$lib/bugStore";
import { get as getStore} from "svelte/store"


export const get : RequestHandler = async ({request, params}) => {
    console.log("test2!?")
    try {
        const id = params.id || (new URLSearchParams(request.url)).get("id")
        console.log(id)
        console.log(getStore(bugs))
        if (id) {
            const item = getBug(params.id)
            console.log("item", item)
            if (item) {
                return {
                    body: { bug: item }
                }
            }
        } else {
            return {
                body: { 
                    bugs: getStore(bugsSorted)
                }
            }
        }
    
        return {
            status: 404
        }
    } catch(e) {
        return {
            status: 503
        }
    }
}

export const del : RequestHandler = async ({request, params}) => {
    try {
        const id = params.id
        if (id && delBug(id)) {
            return {
                status: 200
            }
        } else {
            return {
                status: 404
            }
        }
    } catch(e) {
        return {
            status: 503
        }
    }
}