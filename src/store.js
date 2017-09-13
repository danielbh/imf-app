/**
 * Create the store with asynchronously loaded reducers
 */
import { createStore, compose } from 'redux';
import moment from 'moment'
import app from './containers/App/reducers';
import { generateFakeEntries } from './scripts/generateFakeEntries';

const data = generateFakeEntries(30,  moment().subtract(1, 'years'), moment());

export default function configureStore(initialState = { data }) {

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
