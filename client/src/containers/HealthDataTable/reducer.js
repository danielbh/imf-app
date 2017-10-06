import {
  RECEIVE_NEW_ENTRY,
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  INVALIDATE_ENTRIES,
  RECEIVE_DELETED_ENTRY_IDS
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
    case RECEIVE_NEW_ENTRY:
      return {
        ...state,
        items: state.items.concat({
          id: action.id,
          date: action.date,
          duration: action.duration,
          weight: action.weight,
          bodyFat: action.bodyFat
        })};
    case RECEIVE_DELETED_ENTRY_IDS:
      return {
        ...state,
        items: state.items.filter(entry => !action.ids.find(id => id === entry.id))
      };
    default:
      return state;
  }
};
