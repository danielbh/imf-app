import {
  ADD_ENTRY,
  DELETE_ENTRY,
} from './constants';

import uuid from 'node-uuid'

export const addEntry = ({ date, duration, weight, bodyFat }) => ({
  type: ADD_ENTRY,
  date,
  duration,
  weight,
  bodyFat,
  id: uuid.v4() // TODO: Change to server generated id later
});

export const deleteEntries = (ids) => ({
  type: DELETE_ENTRY,
  ids
});
