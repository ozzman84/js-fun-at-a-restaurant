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

function addIngredients(item, ingredients) {
    if (!ingredients.includes(item)) {
        ingredients.push(item);
    }
    return ingredients;
}

function formatPrice(initialPrice) {
    return '$' + initialPrice
}

module.exports = { 
    nameMenuItem,
    createMenuItem,
    addIngredients,
    formatPrice
};