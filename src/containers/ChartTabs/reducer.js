import {
  DURATION,
  WEIGHT,
  BODY_FAT,
} from './constants'
import { fromJS } from 'immutable';


export const tab = (state = fromJS({ tab: DURATION }), action = {}) => {
  switch (action.type) {
    case WEIGHT:
    case BODY_FAT:
    case DURATION:
      return state.set('tab', action.type);
    default:
      return state;
  }
};
