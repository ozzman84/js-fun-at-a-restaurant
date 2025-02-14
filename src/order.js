function takeOrder(order, deliveryOrders) {
    if (deliveryOrders.length < 3) {
        deliveryOrders.push(order);
    }
    return deliveryOrders;
}

function refundOrder(orderNumber, deliveryOrder) {
    const index = deliveryOrder.findIndex((order) => order.orderNumber === orderNumber);
    
    if (index !== -1) {
        return deliveryOrder.splice(index, 1);
    }
}

function listItems(deliveryOrders) {
    var names = '';

    deliveryOrders.forEach((order) => names += `${order.item}, `);

    return names.slice(0, -2);
}

module.exports = {
    takeOrder,
    refundOrder,
    listItems
};