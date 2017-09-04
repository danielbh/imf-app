import moment from 'moment';
import importedData from '../../data.json';
import {
  ADD_ENTRY,
  DELETE_ENTRY
} from './constants';


// TODO: Use immutableJS here?
export const healthDataTable = (state = importedData, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, {
        id: action.id,
        date: moment(action.date).format('D-MMM-YY'),
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
