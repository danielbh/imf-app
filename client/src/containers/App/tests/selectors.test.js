import { getEntriesInRange } from '../selectors';

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


describe('dateRange reducer', () => {
  beforeAll(() => {
    // Side-effects!! If you want to parallelize these test cases in the future
    // and tests elsewhere depend on the date, this will cause issues.
    const MARCH_27_2017_MIDNIGHT_GMT = 1490400000000;
    Date.now = jest.fn(() => MARCH_27_2017_MIDNIGHT_GMT);
  });

  it('returns default value', () => {
    expect(getEntriesInRange()).toEqual(undefined);
  });

  it('selects entries that happened in the past week', () => {
    expect(getEntriesInRange(data, 'WEEK')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 }
    ])
  });

  it('selects entries that happened in the last month', () => {
    expect(getEntriesInRange(data, 'MONTH')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"17-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"15-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 }
    ])
  });

  it('selects entries that happened in the last three months', () => {
    expect(getEntriesInRange(data, 'THREE_MONTHS')).toEqual([
      { "id":"1", "date":"22-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"21-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"17-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"15-Mar-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"14-Feb-17", "duration": 15, "weight": 70, "bodyFat": 16 },
      { "id":"1", "date":"12-Jan-17", "duration": 15, "weight": 70, "bodyFat": 16 },
    ])
  });

  it('selects entries that happened in the last year', () => {
    expect(getEntriesInRange(data, 'YEAR')).toEqual([
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
    expect(getEntriesInRange(data, 'ALL')).toEqual(data)
  });
});