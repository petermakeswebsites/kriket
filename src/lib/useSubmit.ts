export function submit(node : Element) {

    function click(e : Event) {
        e.preventDefault()
        const form = node.closest("form")
        if (!form) {
            throw new Error("no form attached")
        }
        form.submit()
    }
    node.addEventListener("click", click)

    return {
        destroy: () => {
            node.removeEventListener("click", click)
        }
    }
}