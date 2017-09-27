import {
  ADD_ENTRY,
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  INVALIDATE_ENTRIES,
  DELETE_ENTRY
} from './constants';

export const entries = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action = {}) => {
  switch (action.type) {
    case REQUEST_ENTRIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_ENTRIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.entries,
        lastUpdated: action.receivedAt
      };
    case INVALIDATE_ENTRIES:
      return {
        ...state,
        didInvalidate: true
      };
    case ADD_ENTRY:
      return {
        ...state,
        items: state.items.concat({
          id: action.id,
          date: action.date,
          duration: action.duration,
          weight: action.weight,
          bodyFat: action.bodyFat
        })};
    case DELETE_ENTRY:
      return state.filter(entry => !action.ids.find(id => id === entry.id));

    default:
      return state;
  }
};
