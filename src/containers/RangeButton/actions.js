/**
 * Created by danielhollcraft on 9/8/17.
 */
import { SET_DATE_RANGE } from '../App/constants'

export const setDateRange = (range = 'ALL') => ({
  type: SET_DATE_RANGE,
  range
});

