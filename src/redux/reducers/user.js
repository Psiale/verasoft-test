import { GET_USER } from "../constants/user";

const initialState = {
    id: 0,
    first_name: '',
    last_name: '',
    gender: '',
    birth_date: '',
    home_phone: '',
    mobile_phone: '',
    work_phone: '',
    email: '',
    activity: {
      sms: 0,
      email: 0,
      orders: 0
    },
    carrier_status: {
      since: '',
      status:''
    }
}

const userReducer = (state = initialState, action) => {
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

export default userReducer;
