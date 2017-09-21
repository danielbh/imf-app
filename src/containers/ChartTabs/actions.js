import {
  SELECT_DURATION,
  SELECT_WEIGHT,
  SELECT_BODY_FAT,
} from './constants'

export const selectTab = (key) => {
  switch(key) {
    case 2:
      return {type: SELECT_WEIGHT };
    case 3:
      return { type: SELECT_BODY_FAT };
    default:
      return { type: SELECT_DURATION };
  }
};