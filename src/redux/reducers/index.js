import { combineReducers } from 'redux'

import errorReducer from './errors'
import fetchingReducer from './fetching'
import ordersReducer from './orders'
import userReducer from './user'

const rootReducer = combineReducers({
    user: userReducer,
    errors: errorReducer,
    fetching: fetchingReducer,
    orders: ordersReducer,
})

export default rootReducer;
