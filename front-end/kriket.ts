import type {NewBug} from "../src/lib/types/bugs"

type KriketOptions = {
    path: string
    custom: (e? : ErrorEvent) => Record<string, any>
}

function kriket({path, custom} : KriketOptions) {
    let open = false
    function spring(e : ErrorEvent) {
        if (open) return
        open = true
        const error = {
            colno: e.colno,
            error: e.error,
            filename: e.filename,
            lineno: e.lineno,
            message: e.message,
        }

        const template = `<div style="position:absolute;background-color:#0005;left:0px;top:0px;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;">
            <div style="background-color:white">
                <h2>Uh oh!</h2>
                <p>Looks like we've encountered an error. It would be really helpful to write down some steps you took before this happened.</p>
                <form id="kriketForm">
                    <textarea id="kriketMessage" style="min-height: 200px"></textarea>
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
    window.addEventListener("error", spring)
    console.log("🐛 Cricket Enabled !")
}

// @ts-ignore
window.kriket = kriket