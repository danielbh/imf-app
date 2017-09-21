import {
  DURATION,
  WEIGHT,
  BODY_FAT,
} from './constants'

export const selectTab = (key) => {
  switch(key) {
    case 2:
      return {type: WEIGHT };
    case 3:
      return { type: BODY_FAT };
    default:
      return { type: DURATION };
  }
};