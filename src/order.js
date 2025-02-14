function takeOrder(order, deliveryOrders) {
    if (deliveryOrders.length < 3) {
        deliveryOrders.push(order);
    }
    return deliveryOrders;
}

module.exports = {
    takeOrder
};