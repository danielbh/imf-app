/**
 * Created by danielhollcraft on 9/8/17.
 */
import { fromJS } from 'immutable'
import {
  ALL,
  SET_DATE_RANGE
} from "./constants";

export const dateRange = (state = fromJS({ dateRange: ALL }), action = {}) => {
  switch (action.type) {
    case SET_DATE_RANGE:
      return action.range;
    default:
      return state;
  }
};