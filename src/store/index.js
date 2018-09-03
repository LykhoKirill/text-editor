import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from 'Store/root/reducer';
import rootSaga from 'Sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const middlewares = composeWithDevTools(
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        ),
    ),
);

const reducer = connectRouter(history)(rootReducer);

const store = createStore(reducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
