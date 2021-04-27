import { combineReducers } from 'redux'

import errorReducer from './errors'
import fetchingReducer from './fetching'
import ordersReducer from './orders'

const rootReducer = combineReducers({
    errors: errorReducer,
    fetching: fetchingReducer,
    orders: ordersReducer,
})

export default rootReducer;
