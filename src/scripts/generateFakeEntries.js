import { random, date, finance } from 'faker';
import { times, sort } from 'ramda';

export function generateFakeEntries(length, from, to) {
  const randomLeftRight = (left, right)=> (max, min) => random.boolean ? left(max, min) : right(max, min);
  const generateInt = (max, min) => random.number({ max, min, precision: 1 });
  // Finance is the easiest way to make a float variable.
  const generateFloat = (max, min) => finance.amount(min, max, 1);
  const generateNumber = randomLeftRight(generateInt, generateFloat);

  const unsorted = times(() => ({
    id: random.uuid(),
    date: date.between(from, to).getTime(),
    duration: generateNumber(24, 0),
    weight: generateNumber(50, 72),
    bodyFat: generateNumber(25, 5)
  }), length);

  return sort((a, b) => a.date - b.date, unsorted);
}

