function takeOrder(order, deliveryOrders) {
    if (deliveryOrders.length < 3) {
        deliveryOrders.push(order);
    }
}

function refundOrder(orderNumber, deliveryOrder) {
    const index = deliveryOrder.findIndex((order) => order.orderNumber === orderNumber);
    
    if (index !== -1) {
        return deliveryOrder.splice(index, 1);
    }
}

function listItems(deliveryOrders) {
    return deliveryOrders.map(order => order.item).join(", ");
}

function searchOrder(deliveryOrders, itemName) {
    return deliveryOrders.some(order => order.item === itemName);
}

module.exports = {
    takeOrder,
    refundOrder,
    listItems,
    searchOrder
};