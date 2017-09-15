import { random, date } from 'faker';
import { times } from 'ramda';

export function generateFakeEntries(length, from, to) {
  const randomLeftRight = (left, right) => (max, min) => random.boolean() ? left(max, min) : right(max, min);
  const generateInt = (max, min) => random.number({ max, min, precision: 1 });

  // Recursive for determinism. Sometimes result is rounded to a whole number due to how rounding in
  // JavaScript works. It will rarely run twice. Not ideal, but this script is for development purposes
  // so it's not a big deal.
  const generateFloat = (max, min) => {
    const float = Number((Math.random() * (max - min) + min).toFixed(1));
    return float % 1 === 0 ? generateFloat(max, min) : float;
  };
  const generateNumber = randomLeftRight(generateInt, generateFloat);

  const unsorted = times(() => ({
    id: random.uuid(),
    date: date.between(from, to).getTime(),
    duration: generateNumber(24, 0),
    weight: generateNumber(50, 72),
    bodyFat: generateNumber(25, 5)
  }), length);

  return unsorted.sort((a, b) => a.date - b.date);
}

