import { takeEvery, call, put } from 'redux-saga/effects'
import { LOAD_ORDERS } from '../redux/constants/orders'
import { getApi } from '../api/helper'
import { ORDERS } from '../api/constants'
import { getOrders } from '../redux/actions/orders'
import setError from '../redux/actions/errors'


function* handleOrdersLoad () {
    try {
        const orders = yield call(getApi(ORDERS))
        yield put(getOrders(orders))
    } catch (error) {
        console.log(error)
        setError(error)
    }
}

function* watchOrders () {
    yield takeEvery(LOAD_ORDERS, handleOrdersLoad)
}

export default watchOrders;