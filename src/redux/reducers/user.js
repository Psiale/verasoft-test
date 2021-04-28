import { GET_ORDERS } from "../constants/orders";

const initialState = {
    id: 12345678,
    first_name: '',
    last_name: '',
    gender: '',
    birth_date: '',
    home_phone: '',
    mobile_phone: '',
    work_phone: '',
    email: '',
    activity: {
      sms: 6,
      email: 4,
      orders: 1
    },
    carrier_status: {
      since: '',
      status:''
    }
}

const ordersReducer = (state = initialState, action) => {
    if (action.type === GET_USER) {
        const {
            id, first_name, gender,
            last_name, birth_date, home_phone,
            mobile_phone, work_phone, email,
            activity, carrier_status,
        } = action.user
        return {
            ...state,
            id, first_name, gender,
            last_name, birth_date, home_phone,
            mobile_phone, work_phone,
            email, activity, carrier_status
        }
    }
    return state;
};

export default ordersReducer;
