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

export const dateRange = (data = [], dateRange) => {

  const returnEntriesInRange =
    (units, thresh = 1) => data.filter(e => moment(moment()).diff(e.date, units) < thresh);

  switch(dateRange) {
    case WEEK:
      return returnEntriesInRange('weeks');
    case MONTH:
      return returnEntriesInRange('months');
    case THREE_MONTHS:
      return returnEntriesInRange('months', 3);
    case YEAR:
      return returnEntriesInRange('years');
    default:
      return data;
  }
};