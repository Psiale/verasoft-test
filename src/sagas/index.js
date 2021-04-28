import { all } from 'redux-saga/effects'

import orderSaga from './orderSaga'
import userSaga from './userSaga'

export default function* rootSaga () {
    yield all([orderSaga(), userSaga()])
}