function createRestaurant(name) {
    var restaurant = {
        name: name,
        menus: {
            breakfast: [],
            lunch: [],
            dinner: []
        }
    }
    return restaurant
}

function addMenuItem(restaurant, menuItem) {
    const isInMenu = restaurant.menus[menuItem.type].some(item => item === menuItem)

    if (!isInMenu) {
        restaurant.menus[menuItem.type].push(menuItem);
    }
}

function removeMenuItem(restaurant, itemName, menuName) {
    const isInMenu = restaurant.menus[menuName].some(item => item.name === itemName)

    if (isInMenu) {
        restaurant.menus[menuName].splice(itemName, 1);
        return `No one is eating our ${itemName} - it has been removed from the ${menuName} menu!`
    }
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

function checkForFood(restaurant, foodItem) {
    const isInMenu = restaurant.menus[foodItem.type].some(item => item === foodItem);

    if (isInMenu) {
        return `Yes, we're serving ${foodItem.name} today!`
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
}

module.exports = {
    createRestaurant,
    addMenuItem,
    removeMenuItem,
    checkForFood
}