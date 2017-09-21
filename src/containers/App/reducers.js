/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';
import { dateRange } from '../RangeButton/reducer'
import { healthDataTable } from '../HealthDataTable/reducer'
import { tab } from "../ChartTabs/reducer";

/**
 * Creates the app reducer
 */
const app = combineReducers({
    data: healthDataTable,
    dateRange,
    tab
});

export default app;
