import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import redusers from './reducers';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    redusers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
