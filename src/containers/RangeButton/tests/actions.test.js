/**
 * Created by danielhollcraft on 9/8/17.
 */
import {
  setDateRange
} from '../actions'

import {
  WEEK,
  MONTH,
  THREE_MONTHS,
  YEAR
} from "../../../constants";

describe('Toolbar actions', () => {
  it('selects week', () => {
    expect(setDateRange(WEEK)).toEqual({ type: 'SET_DATE_RANGE', range: 'WEEK' })
  });

  it('selects one month', () => {
    expect(setDateRange(MONTH)).toEqual({ type: 'SET_DATE_RANGE', range: 'MONTH' })
  });

  it('selects three months', () => {
    expect(setDateRange(THREE_MONTHS)).toEqual({ type: 'SET_DATE_RANGE', range: 'THREE_MONTHS' })
  });

  it('selects one year', () => {
    expect(setDateRange(YEAR)).toEqual({ type: 'SET_DATE_RANGE' , range: 'YEAR' })
  });

  it('selects "all time"', () => {
    expect(setDateRange()).toEqual({ type: 'SET_DATE_RANGE', range: 'ALL' })
  });
});