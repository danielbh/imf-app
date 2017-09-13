import uuid from 'node-uuid';

import {
  ADD_ENTRY,
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

export const deleteEntries = ids => ({
  type: DELETE_ENTRY,
  ids
});
