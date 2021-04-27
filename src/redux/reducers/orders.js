import GET_ORDERS from "../constants/orders";

const initialState = {
    orders_A: [],
    orders_AA: [],
    orders_AAA: [],
    orders_B: [],
    orders_C: [],
}

const ordersReducer = (state = initialState, action) => {
    if (action.type === GET_ORDERS) {
        const { orders_A, orders_AA, orders_AAA, orders_B, orders_C } = action.orders
        return {
            ...state,
            orders_A,
            orders_AA,
            orders_AAA,
            orders_B,
            orders_C,
        }
    }
    return state;
};

export default ordersReducer;
