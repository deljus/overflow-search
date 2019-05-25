import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_DATA } from './constants';
import { fetchStart, fetchEnd, fetchError, setData } from './actions';
import { request } from 'helpers';

export function* startFetch({ id, url }) {
    try {
        yield put(fetchStart(id));
        const response = yield call(request, url);
        yield put(setData(id, response));
    } catch (error) {
        yield put(fetchError(id))
    } finally {
        yield put(fetchEnd(id));
    }
}

export function* sagas() {
    yield takeLatest(GET_DATA, startFetch);
}
