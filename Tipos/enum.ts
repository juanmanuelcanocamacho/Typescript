(()=> {


    enum OrderStatus {
        pending = 1,
        Shipped,
        Delivered,
        Cancelled
    };


    const currentStatus: OrderStatus = OrderStatus.Shipped;

    console.log(currentStatus);

    console.log(OrderStatus);




})()