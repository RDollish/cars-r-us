import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const CarTechnologies = () => {
    let html = `<ul><select id="technology"><option value ="0">Select Technology Package`

    // Use .map() for converting objects to <li> elements
    const listItems = technologies.map(technology => {
        return `<li>
            <option value="${technology.id}"/> ${technology.technology}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</select></ul>`
    return html
}

