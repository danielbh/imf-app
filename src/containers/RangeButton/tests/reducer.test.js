import { dateRange } from '../reducer'

describe('dataRange', () => {
  it('returns a default state of ALL', () => {
    expect(dateRange()).toEqual('ALL')
  });

  it('returns inputed action.range', () => {
    expect(dateRange('ALL', {type:'SET_DATE_RANGE', range: 'WEEK'})).toEqual('WEEK')
  });
});