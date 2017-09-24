import {
  ADD_ENTRY,
  DELETE_ENTRY
} from './constants';

export const healthDataTable = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, {
        id: action.id,
        date: action.date,
        duration: action.duration,
        weight: action.weight,
        bodyFat: action.bodyFat
      }];
    case DELETE_ENTRY:
      return state.filter(entry => !action.ids.find(id => id === entry.id));

    default:
      return state;
  }
};