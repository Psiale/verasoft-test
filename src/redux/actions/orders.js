
import { GET_ORDERS, LOAD_ORDERS } from "../constants/orders";


export const getOrders = orders => ({
    type: GET_ORDERS,
    orders,
});

export const loadOrders = loading => ({
    type: LOAD_ORDERS,
    loading,
})

