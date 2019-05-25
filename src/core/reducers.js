import { combineReducers } from 'redux';
import * as CONST from './constants';

const defaultFetchData = {
    loading: false,
    error: ''
};

const fetch = (state = {}, action) => {
    switch (action.type) {
        case CONST.FETCH_START:
            return {
                [action.id]: {
                    ...defaultFetchData,
                    loading: true,
                },
            };

        case CONST.FETCH_END:
            return {
                [action.id]: {
                    ...defaultFetchData,
                },
            };

        case CONST.FETCH_ERROR:
            return {
                [action.id]: {
                    ...defaultFetchData,
                    error: action.error,
                },
            };

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
            delete newState[action.key];
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
