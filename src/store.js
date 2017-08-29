/**
 * Create the store with asynchronously loaded reducers
 */
import { createStore } from 'redux';
import createReducer from './reducers'

export default function configureStore(initialState = {}) {
  return createStore(createReducer());
}
