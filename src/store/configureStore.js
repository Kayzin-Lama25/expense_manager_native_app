import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  //redux-saga

import Reducers from '../reducer';
import rootSaga from '../saga/rootSaga';

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(Reducers, {}, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return { store };
}
