import { put, call, takeEvery } from 'redux-saga/effects'
import { HEADERS } from '../api/constants'
import { getApi } from '../api/helper'
import setError from '../redux/actions/errors'
import setFetching from '../redux/actions/fetching'
import { getUser } from '../redux/actions/user'
import { LOAD_USER } from '../redux/constants/user'

function* handleUserLoad() {
    yield put(setFetching(true))
    try {
       const user = yield call(getApi,HEADERS)
       yield put(getUser(user))
    } catch (error) {
        yield put(setError(error))
    }
    yield put(setFetching(false))
}

function* watchUser () {
    yield takeEvery(LOAD_USER, handleUserLoad)
}

export default watchUser;