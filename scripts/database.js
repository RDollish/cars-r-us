const database = {
    paints: [
        { id: 1, paint: "Silver", price: 350 },
        { id: 2, paint: "Midnight Blue", price: 400 },
        { id: 3, paint: "Firebrick Red", price: 550 },
        { id: 4, paint: "Spring Green", price: 600 },
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 300 },
        { id: 2, interior: "Charcoal Fabric", price: 375 },
        { id: 3, interior: "White Leather", price: 850 },
        { id: 4, interior: "Black Leather", price: 750 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 155 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 199 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 255 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 299 }
    ],
    technologies: [
        { id: 1, technology: "Basic Package", price: 855 },
        { id: 2, technology: "Navigation Package", price: 1350 },
        { id: 3, technology: "Visibility Package", price: 1550 },
        { id: 4, technology: "Ultra Package", price: 2800 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            wheelId: 3,
            technologyId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder : {}
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}