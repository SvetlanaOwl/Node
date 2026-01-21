fetchUser()
    .then(user => fetchOrders(user.id))
    .then(orders => processOrders(orders))
    .catch(err => console.log(err));