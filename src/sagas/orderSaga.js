import { takeEvery, call, put } from 'redux-saga/effects'
import { LOAD_ORDERS } from '../redux/constants/orders'
import { getApi } from '../api/helper'
import { ORDERS } from '../api/constants'
import { getOrders } from '../redux/actions/orders'
import setError from '../redux/actions/errors'
import setFetching from '../redux/actions/fetching'


function* handleOrdersLoad () {
    yield put(setFetching(true))
    try {
        const orders = yield call(getApi,ORDERS)
        yield put(getOrders(orders))
    } catch (error) {
        yield put(setError(error))
    }
    yield put(setFetching(false))
}

function* watchOrders () {
    yield takeEvery(LOAD_ORDERS, handleOrdersLoad)
}

export default watchOrders;