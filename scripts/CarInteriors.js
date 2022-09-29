import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const CarInteriors = () => {
    let html = `<ul><select id="interior"><option value ="0">Select Interior Package`

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interior => {
        return `<li>
            <option value="${interior.id}"/>${interior.interior}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</select></ul>`
    return html
}

