function nameMenuItem(item) {
    return 'Delicious ' + item;
}

function createMenuItem(itemName, price, type) {
    var menuItem = {
        name: itemName,
        price: price,
        type: type
    }
    return menuItem;
}

module.exports = { 
    nameMenuItem,
    createMenuItem,
    addIngredients,
    formatPrice
};