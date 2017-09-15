import { date }  from 'faker';
import moment from 'moment'
import { random } from 'faker';
import { generateFakeEntries } from "../generateFakeEntries";

const generateDate = (amount = 1, unit = 'years', future = true) => {
  return future ? moment().add(amount, unit) : moment().subtract(amount, unit)
};

const generateFakeEntriesFactory = (length = 1) => generateFakeEntries(length, generateDate(), new Date());

// FIXME: Make tests more deterministic

describe('generateFakeEntries', () => {

  it('should define id in array object element ', () => {
    const actual = generateFakeEntriesFactory()[0].id;
    expect(actual).toBeDefined()
  });

  it('should return a valid timestamp on date property on array element ', () => {
    const actual = generateFakeEntriesFactory()[0].date;
    expect(actual).not.toEqual(NaN)
  });

  it('should return an array with the same length that is defined as an argument', () => {
    expect(generateFakeEntriesFactory(5)).toHaveLength(5);
  });

  it('should call date.between when creating an entry', () => {
    const threeSecondsAgo = generateDate(3, 'seconds', false);
    const now = new Date();
    const actual = generateFakeEntries(1, threeSecondsAgo, now)[0];
    expect(actual.date).toBeGreaterThanOrEqual(new Date(generateDate(3, 'seconds', false)).getTime());
    expect(actual.date).toBeLessThanOrEqual(now.getTime());
  });

  it('creates a duration between constraints', () => {
    const actual = generateFakeEntriesFactory()[0].duration;
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(24);
  });

  it('creates a weight between constraints', () => {
    const actual = generateFakeEntriesFactory()[0].weight;
    expect(actual).toBeGreaterThanOrEqual(50);
    expect(actual).toBeLessThanOrEqual(72);
  });

  it('creates a bodyFat between constraints', () => {
    const actual = generateFakeEntriesFactory()[0].bodyFat;
    expect(actual).toBeGreaterThanOrEqual(5);
    expect(actual).toBeLessThanOrEqual(25);
  });

  it('returns a sorted list', () => {
    const list = generateFakeEntries(2, generateDate(), new Date());
    expect(list[0].date).toBeLessThan(list[1].date)
  });

  it('randomly generates float for number properties', () => {
    random.boolean = jest.fn().mockReturnValue(false);
    const entry = generateFakeEntries(1, generateDate(), new Date())[0];
    expect(entry.duration % 1).not.toEqual(0);
    expect(entry.weight % 1).not.toEqual(0);
    expect(entry.bodyFat % 1).not.toEqual(0);
  });
});
