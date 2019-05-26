import { combineReducers } from 'redux';
import * as CONST from './constants';

import { get } from 'lodash';

const defaultFetchData = {
    loading: false,
    error: ''
};

const fetch = (state = {}, action) => {
    switch (action.type) {
        case CONST.FETCH_START:
            return {
                ...state,
                [action.id]: {
                    ...defaultFetchData,
                    loading: true,
                },
            };

        case CONST.FETCH_END:
            return {
                ...state,
                [action.id]: {
                    ...get(state, [action.id]),
                    loading: false,
                },
            };

        case CONST.FETCH_ERROR:
            return {
                ...state,
                [action.id]: {
                    ...get(state, [action.id]),
                    error: action.error,
                },
            };

        case CONST.FETCH_CLEAN:
            const newState = { ...state };
            delete newState[action.id];
            return newState;

        default:
            return state;
    }
};

const data = (state = {}, action) => {
    switch (action.type) {
        case CONST.SET_DATA:
            return {
                ...state,
                [action.id]: action.data
            };

        case CONST.CLEAR_DATA:
            const newState = { ...state };
            delete newState[action.id];
            return newState;

        case CONST.CLEAR_ALL_DATA:
            return {};

        default:
            return state;
    }
};

export default combineReducers({
    fetch,
    data
});
