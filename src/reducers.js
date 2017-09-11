/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';
import { healthDataTable } from './containers/HealthDataTable/reducer'

/**
 * Creates the main reducer
 */
export default function rootReducer() {
  return combineReducers({
    data: healthDataTable
  });
}
