import importedData from '../../data.json';
import {
  ADD_ENTRY,
  DELETE_ENTRY
} from './constants';

// TODO: Use immutableJS here?
export const healthDataTableReducer = (state = importedData, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        id: action.id,
        date: action.date,
        duration: action.duration,
        weight: action.weight,
        bodyFat: action.bodyFat
      };

    case DELETE_ENTRY:
      return state.filter(e => e.id !== action.id);
    default:
      return state
  }
}