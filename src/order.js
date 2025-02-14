function takeOrder(order, deliveryOrders) {
    if (deliveryOrders.length < 3) {
        deliveryOrders.push(order);
    }
    return deliveryOrders;
}

function refundOrder(orderNumber, deliveryOrder) {
    const index = deliveryOrder.findIndex((order) => order.orderNumber === orderNumber);
    
    if (index !== -1) {
        return deliveryOrder.splice(index, 1)
    }
}

module.exports = {
    takeOrder,
    refundOrder
};