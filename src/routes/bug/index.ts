import { getBug, bugsSorted, isNewBug, setBug, delBug } from "$lib/bugStore";
import type { RequestHandler } from "@sveltejs/kit"
import { get as getStore } from "svelte/store"

export const get : RequestHandler = async ({request, params}) => {
    try {
        const id = params.id || (new URLSearchParams(request.url)).get("id")
        console.log(new URLSearchParams(request.url))
        if (id) {
            const item = getBug(params.id);
        
            if (item) {
                return {
                    body: { item }
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

export const post : RequestHandler = async ({ request }) => {
    const newBug = await request.json()
    if (!isNewBug(newBug)) {
        return {
            status: 401,
            body: "This bug is not formatted properly"
        }
    }

    const bugID = setBug(newBug)
   
    // redirect to the newly created item
    return {
      status: 200,
      body: bugID
    };
}

export const del : RequestHandler = async ({request, params}) => {
    try {
        const id : string = params.id || (await request.json()).id
        console.log(id)
        if (id && delBug(id)) {
            return {
                status: 200,
                body: {
                    bugs: getStore(bugsSorted)
                }
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