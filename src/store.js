/**
 * Create the store with asynchronously loaded reducers
 */
import { createStore, compose } from 'redux';
import app from './reducers';
import importedData from './data.json';

export default function configureStore(initialState = { data: importedData }) {

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return createStore(
    app,
    initialState,
    composeEnhancers()
  );
}
