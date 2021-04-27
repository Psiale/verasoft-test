import GET_ORDERS from "../constants/orders";


const getOrders = orders => ({
    type: GET_ORDERS,
    orders,
});


export default getOrders
