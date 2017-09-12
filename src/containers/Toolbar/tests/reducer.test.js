import { toolbar } from '../reducer';

const data = [
  { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"17-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"15-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"14-Feb-17", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"12-Jan-17", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"1-Nov-16", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"31-Oct-16", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"6-Mar-14", "duration": 15, "weight": 70, "bodyFat": 16 },
  { "id":"1", "date":"4-Mar-13", "duration": 15, "weight": 70, "bodyFat": 16 },
];


describe('Toolbar reducer', () => {
  beforeAll(() => {
    // Side-effects!! If you want to parallelize these test cases in the future
    // and tests elsewhere depend on the date, this will cause issues.
    const MARCH_27_2017_MIDNIGHT_GMT = 1490400000000;
    Date.now = jest.fn(() => MARCH_27_2017_MIDNIGHT_GMT);
  });

  it('returns default value', () => {
    expect(toolbar()).toEqual([]);
  });

  it('selects entries that happened in the past week', () => {
    expect(toolbar(data, 'SET_WEEK_RANGE')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 }
    ])
  });

  it('selects entries that happened in the last month', () => {
    expect(toolbar(data, 'SET_MONTH_RANGE')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"17-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"15-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 }
    ])
  });

  it('selects entries that happened in the last three months', () => {
    expect(toolbar(data, 'SET_THREE_MONTH_RANGE')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"17-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"15-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"14-Feb-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"12-Jan-17", "duration": 15, "weight": 70, "bodyFat": 16 },
    ])
  });

  it('selects entries that happened in the last year', () => {
    expect(toolbar(data, 'SET_YEAR_RANGE')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"17-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"15-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"14-Feb-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"12-Jan-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"1-Nov-16", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"31-Oct-16", "duration": 15, "weight": 70, "bodyFat": 16 },
    ])
  });

  it('selects all entries', () => {
    expect(toolbar(data, 'SET_ALL_RANGE')).toEqual(data)
  });
});