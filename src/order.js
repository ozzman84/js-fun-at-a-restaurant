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

function searchOrder(deliveryOrders, item) {
    const index = deliveryOrders.findIndex(order => order.item === item);

    return index !== -1
}

module.exports = {
    takeOrder,
    refundOrder,
    listItems,
    searchOrder
};