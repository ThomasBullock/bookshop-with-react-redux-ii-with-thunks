import rootReducer from '../ducks';
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
	const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();

    // connect redux dev tools
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers
  )

  const store = createStore(
  	rootReducer, 
  	initialState, 
    applyMiddleware(sagaMiddleware),
		composedEnhancers
  )

  return store;
}