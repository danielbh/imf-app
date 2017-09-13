import {date}  from 'faker';
import {generateFakeEntries} from "../generateFakeEntries";

const generateFrom = () => {
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);
  return from
};

const generateFakeEntriesFactory = (length = 1) => generateFakeEntries(length, generateFrom(), new Date());

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
    const between = jest.spyOn(date, 'between');
    const getTime = jest.spyOn(Date.prototype, 'getTime');
    generateFakeEntries(1, 1, 2);
    expect(between).toHaveBeenCalledWith(1,2);
    expect(getTime).toHaveBeenCalled();
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
    const list = generateFakeEntries(2, generateFrom(), new Date());
    expect(list[0].date).toBeLessThan(list[1].date)
  });
});
