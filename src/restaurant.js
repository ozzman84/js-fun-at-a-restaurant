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
    restaurant.menus[menuName].splice(itemName, 1);
    return `No one is eating our ${itemName} - it has been removed from the ${menuName} menu!`
}

module.exports = {
    createRestaurant,
    addMenuItem,
    removeMenuItem
}