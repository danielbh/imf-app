import {
  DURATION,
  WEIGHT,
  BODY_FAT,
} from './constants'

export const tab = (state = DURATION, action = {}) => {
  switch (action.type) {
    case WEIGHT:
    case BODY_FAT:
    case DURATION:
      return action.type;
    default:
      return state;
  }
};
