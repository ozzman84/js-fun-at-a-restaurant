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

module.exports = {
    createRestaurant,
    addMenuItem
}