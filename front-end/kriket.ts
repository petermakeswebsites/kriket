// import type {NewBug} from "../src/lib/types/bugs"

type NewBug = {
    custom?: Record<string, any> | undefined;
    error: any;
    message?: string | undefined;
    domain: string;
}

type KriketOptions = {
    path: string
    custom: (e? : ErrorEvent) => Record<string, any>
}

function kriket({path, custom} : KriketOptions) {
    let open = false
    function spring(message : string | Event, filename : string | undefined, lineno : number | undefined, colno : number | undefined, err : Error | undefined) {
        // if(e.defaultPrevented) return // Temporary workaround for chrome bug
        console.log("🐛 Kriket found an error")
        if (open) {
            console.log("🐛 Dialogue already open, aborting")
            return
        }
        open = true
        const error = {
            colno: colno,
            error: err,
            filename: filename,
            lineno: lineno,
            message: message,
        }
        console.error(err)

        const template = `<div style="position:absolute;padding: 1rem;z-index:999999;background-color:#0005;left:0px;top:0px;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;">
            <div style="background-color:white; padding: 1rem;">
                <h2>Uh oh!</h2>
                <p>Looks like we've encountered an error. It would be really helpful to write down some steps you took before this happened.</p>
                <form id="kriketForm">
                    <textarea id="kriketMessage" style="min-height: 200px; width: 100%"></textarea><br />
                    <button id="kriketSubmit" type="submit">Submit</button>
                </form>
            </div>
        </div>        
        `
        const d = document.createElement('div')
        d.innerHTML = template;
        const element = d.firstChild as Node;
        document.body.appendChild(element)
        const form = document.getElementById("kriketForm") as HTMLFormElement
        form.addEventListener("submit", (e : SubmitEvent) => {
            e.preventDefault()
            let newBug : NewBug = {
                error,
                domain: window.location.hostname,
            }
            const message = document.getElementById("kriketMessage")?.textContent
            if (message) newBug.message = message
            if (custom) newBug = {...newBug, custom: custom()};

            (document.getElementById("kriketSubmit") as HTMLButtonElement).disabled = true

            fetch(path, {
                mode: "no-cors",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "post",
                body: JSON.stringify(newBug)
            }).then(() => {
                form.innerHTML = "<p>Thank you for submitting. Please close this webpage or app and restart it.</p>"
            }).catch(e => {
                console.error(e)
                form.innerHTML = "<p>Well, this is embarassing. There was an error submitting the error message.</p>"
            })
        })
    }
    const old = window.onerror
    window.onerror = function(...e) {
        if (old) old(...e)
        spring(...e)
    }
    console.log("🐛 Kriket Enabled !")
}

// @ts-ignore
window.kriket = kriket