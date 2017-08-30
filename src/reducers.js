/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';
import { healthDataTableReducer } from './containers/HealthDataTable/reducer'

/**
 * Creates the main reducer
 */
export default function createReducer() {
  return combineReducers({
    data: healthDataTableReducer,
  });
}
