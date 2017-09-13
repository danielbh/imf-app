/**
 * Created by danielhollcraft on 9/8/17.
 */
import moment from 'moment'

import {
  WEEK,
  MONTH,
  THREE_MONTHS,
  YEAR
} from "../App/constants";

export const getEntriesInRange = (state, range) => {

  const returnEntriesInRange =
    (units, thresh = 1) => state.filter(e => moment(moment()).diff(e.date, units) < thresh);

  switch(range) {
    case WEEK:
      return returnEntriesInRange('weeks');
    case MONTH:
      return returnEntriesInRange('months');
    case THREE_MONTHS:
      return returnEntriesInRange('months', 3);
    case YEAR:
      return returnEntriesInRange('years');
    default:
      return state;
  }
};