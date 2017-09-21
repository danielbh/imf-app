import {
  SELECT_DURATION,
  SELECT_WEIGHT,
  SELECT_BODY_FAT,
} from './constants'

export const tab = (state = SELECT_DURATION, action = {}) => {
  switch (action.type) {
    case SELECT_WEIGHT:
    case SELECT_BODY_FAT:
      return action.type;
    default:
      return state;
  }
};
