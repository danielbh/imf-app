import axios from 'axios';

import {
  RECEIVE_NEW_ENTRY,
  REQUEST_ADD_ENTRY,
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  INVALIDATE_ENTRIES,
  REQUEST_DELETE_ENTRIES,
  RECEIVE_DELETED_ENTRY_IDS
} from './constants';

export const addEntry = ({ date, duration, weight, bodyFat }) => dispatch => {
  const timeStamp = new Date(date).getTime();
  const newData = { date: timeStamp, duration, weight, bodyFat};

  // TODO: Implement later for optimistic rendering and offline storage
  dispatch(requestAddEntry());

  return axios.post('api/entries', newData)
    .then(({ data: { id } }) => dispatch(receiveNewEntry({ id, ...newData })))
    .catch((error) => error);
};

export const requestAddEntry = () => ({ type: REQUEST_ADD_ENTRY });

const receiveNewEntry = ({ id, date, duration, weight, bodyFat }) => ({
  type: RECEIVE_NEW_ENTRY,
  date: new Date(date).getTime(),
  duration,
  weight,
  bodyFat,
  id
});

export const deleteEntries = ids => dispatch =>  {
  // TODO: Implement later for optimistic rendering and offline storage
  dispatch(requestDeleteEntries());
  return axios.post('api/entries/delete', { ids })
    .then(({ data: { ids } }) => dispatch(receiveDeletedEntryIds({ ids })))
    .catch((error) => error);
};

export const requestDeleteEntries = () => ({ type: REQUEST_DELETE_ENTRIES });

export const receiveDeletedEntryIds = ({ ids }) => ({ type: RECEIVE_DELETED_ENTRY_IDS, ids });

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

