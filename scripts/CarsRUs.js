
import { CarInteriors } from "./CarInteriors.js"
import { CarPaints } from "./CarPaints.js"
import { CarTechnologies } from "./CarTechnologies.js"
import { CarWheels } from "./CarWheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
          addCustomOrder()  
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${CarPaints()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${CarWheels()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior Packages</h2>
                ${CarInteriors()}
            </section>
            <section class="choices__technologies options">
            <h2>Technology Packages</h2>
            ${CarTechnologies()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
