/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';
import { healthDataTable } from './containers/HealthDataTable/reducer'
import { toolbar } from './containers/Toolbar/reducer'

/**
 * Creates the app reducer
 */
const app = combineReducers({
    healthDataTable,
    toolbar
});

export default app;
