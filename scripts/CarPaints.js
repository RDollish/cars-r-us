import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const CarPaints = () => {
    let html = `<ul><select id="paint"><option value ="0">Select Paint`

    // Use .map() for converting objects to <li> elements
    const listItems = paints.map(paint => {
        return `<li>
        <option value="${paint.id}"/> ${paint.paint}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</select></ul>`
    return html
}

