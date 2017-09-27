import uuid from 'node-uuid';
import axios from 'axios';

import {
  ADD_ENTRY,
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  INVALIDATE_ENTRIES,
  DELETE_ENTRY
} from './constants';

export const addEntry = ({ date, duration, weight, bodyFat }) => ({
  type: ADD_ENTRY,
  date: new Date(date).getTime(),
  duration,
  weight,
  bodyFat,
  id: uuid.v4() // TODO: Change to server generated id later
});

export const deleteEntry = id => ({
  type: DELETE_ENTRY,
  id
});

export const invalidateEntries = () => ({
  type: INVALIDATE_ENTRIES,
});

export const requestEntries = () => ({
  type: REQUEST_ENTRIES
});

export const receiveEntries = (entries, receivedAt = Date.now()) => ({
  type: RECEIVE_ENTRIES,
  entries,
  receivedAt
});

// Export for easy testing. Not meant to be used outside of HealthDataTable.
export const fetchEntries = () => dispatch => {
  dispatch(requestEntries());
  return axios.get('api/entries')
    .then(({ data }) => dispatch(receiveEntries(data)))
    // TODO: dispatch error message to display
    .catch((error) => error);
};

const shouldFetchEntries = (state) => {
  const entries = state.entries;
  if(!entries.items.length) return true;
  if(entries.isFetching) return false;
  return entries.didInvalidate;
};

export const fetchEntriesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchEntries(getState())) return dispatch(fetchEntries())
};

