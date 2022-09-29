import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const CarWheels = () => {
    let html = `<ul><select id="wheel"><option value ="0">Select Wheels`

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<li>
        <option value="${wheel.id}"/> ${wheel.wheel}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</select></ul>`
    return html
}

