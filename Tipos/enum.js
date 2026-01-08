(() => {
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["pending"] = 1] = "pending";
        OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
        OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
        OrderStatus[OrderStatus["Cancelled"] = 4] = "Cancelled";
    })(OrderStatus || (OrderStatus = {}));
    ;
    const currentStatus = OrderStatus.Shipped;
    console.log(currentStatus);
    console.log(OrderStatus);
})();
export {};
