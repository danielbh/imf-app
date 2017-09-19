/**
 * Created by danielhollcraft on 9/8/17.
 */

import {
  ALL,
  SET_DATE_RANGE
} from "../../constants";

export const dateRange = (state = ALL, action = {}) => {
  switch (action.type) {
    case SET_DATE_RANGE:
      return action.range;
    default:
      return state;
  }
};