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

function decreasePrice(price) {
    return price * .9;
}

function createRecipe(title, ingredients, type) {
    var recipe = {
        title: title,
        ingredients: ingredients,
        type: type
    }

    return recipe;
}

module.exports = { 
    nameMenuItem,
    createMenuItem,
    addIngredients,
    formatPrice,
    decreasePrice,
    createRecipe
};