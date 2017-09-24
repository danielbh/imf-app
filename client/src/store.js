/**
 * Create the store with asynchronously loaded reducers
 */
import { createStore, compose } from 'redux';
import moment from 'moment'
import app from './containers/App/reducers';
import { generateFakeEntries } from './scripts/generateFakeEntries';

const data = [
    ...generateFakeEntries(5,  moment().subtract(1, 'weeks'), moment()),
    ...generateFakeEntries(5,  moment().subtract(1, 'months'), moment()),
    ...generateFakeEntries(5,  moment().subtract(3, 'months'), moment()),
    ...generateFakeEntries(5,  moment().subtract(1, 'years'), moment()),
    ...generateFakeEntries(5,  moment().subtract(2, 'years'), moment())
].sort((a, b) => a.date - b.date);


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
