/**
 * Created by danielhollcraft on 9/8/17.
 */
import {
  selectWeek,
  selectMonth,
  selectThreeMonth,
  selectYear,
  selectAll
} from '../actions'

describe('Toolbar actions', () => {
  it('selects week', () => {
    expect(selectWeek()).toEqual({type: 'SET_WEEK_RANGE'})
  });

  it('selects one month', () => {
    expect(selectMonth()).toEqual({type: 'SET_MONTH_RANGE'})
  });

  it('selects three months', () => {
    expect(selectThreeMonth()).toEqual({type: 'SET_THREE_MONTH_RANGE'})
  });

  it('selects one year', () => {
    expect(selectYear()).toEqual({type: 'SET_YEAR_RANGE'})
  });

  it('selects "all time"', () => {
    expect(selectAll()).toEqual({type: 'SET_ALL_RANGE'})
  });
});