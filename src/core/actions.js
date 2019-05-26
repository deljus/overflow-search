import * as CONST from './constants';

export const fetchStart = (id) => ({
    type: CONST.FETCH_START,
    id
});

export const fetchEnd = (id) => ({
    type: CONST.FETCH_END,
    id
});

export const fetchError = (id, error) => ({
    type: CONST.FETCH_ERROR,
    id,
    error
});

export const fetchClean = (id, error) => ({
    type: CONST.FETCH_CLEAN,
    id
});

export const getData = (id, url, params) => ({
    type: CONST.GET_DATA,
    id,
    url,
    params
});

export const setData = (id, data) => ({
    type: CONST.SET_DATA,
    id,
    data
});

export const clearData = (id) => ({
    type: CONST.CLEAR_DATA,
    id
});

export const clearAllData = () => ({
    type: CONST.CLEAR_ALL_DATA
});

