/**
 * Created by danielhollcraft on 9/8/17.
 */

import {
  SET_WEEK_RANGE,
  SET_MONTH_RANGE,
  SET_THREE_MONTH_RANGE,
  SET_YEAR_RANGE,
  SET_ALL_RANGE
} from './constants'

export const selectWeek = () => ({
  type: SET_WEEK_RANGE
});

export const selectMonth = () => ({
  type: SET_MONTH_RANGE
});

export const selectThreeMonth = () => ({
  type: SET_THREE_MONTH_RANGE
});

export const selectYear = () => ({
  type: SET_YEAR_RANGE
});

export const selectAll = () => ({
  type: SET_ALL_RANGE
});