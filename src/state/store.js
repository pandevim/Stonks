import { compose, applyMiddleware, createStore } from 'redux';
import sagas from './sagas';

import reducer from './reducer';
import sagaMiddleware from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
