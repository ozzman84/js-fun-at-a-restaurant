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

module.exports = {
    createRestaurant
}