/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';
import importedData from './data.json';


// TODO: Use immutableJS here?
function dataReducer(state = importedData, action) {
  return state;
}

/**
 * Creates the main reducer
 */
export default function createReducer() {
  return combineReducers({
    data: dataReducer,
  });
}
