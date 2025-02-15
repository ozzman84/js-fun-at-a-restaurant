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

module.exports = {
    createRestaurant,
    addMenuItem,
    removeMenuItem
}