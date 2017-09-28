import axios from 'axios';

import {
  RECEIVE_NEW_ENTRY,
  REQUEST_ADD_ENTRY,
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  INVALIDATE_ENTRIES,
  DELETE_ENTRY
} from './constants';

const receiveNewEntry = ({ id, date, duration, weight, bodyFat }) => ({
  type: RECEIVE_NEW_ENTRY,
  date: new Date(date).getTime(),
  duration,
  weight,
  bodyFat,
  id
});

export const addEntry = ({ date, duration, weight, bodyFat }) => dispatch => {
  const timeStamp = new Date(date).getTime();
  const newData = { date: timeStamp, duration, weight, bodyFat};

  dispatch(requestAddEntry());

  return axios.post('api/entries', newData)
    .then(({ id }) => dispatch(receiveNewEntry({ id, ...newData })))
    .catch((error) => error);
};

export const requestAddEntry = () => ({ type: REQUEST_ADD_ENTRY });

export const deleteEntry = id => ({ type: DELETE_ENTRY, id });

export const invalidateEntries = () => ({ type: INVALIDATE_ENTRIES });

export const requestEntries = () => ({ type: REQUEST_ENTRIES });

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

const shouldFetchEntries = ({ entries }) => {
  if(!entries.items.length) return true;
  if(entries.isFetching) return false;
  return entries.didInvalidate;
};

export const fetchEntriesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchEntries(getState())) return dispatch(fetchEntries())
  // TODO: Add fail fetch
};

