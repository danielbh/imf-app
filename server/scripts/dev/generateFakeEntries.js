import { random, date } from 'faker';
import { times } from 'ramda';

export function generateFakeEntries(length, from, to) {
  const randomLeftRight = (left, right) => (max, min) => random.boolean() ? left(max, min) : right(max, min);

  const generateInt = (max, min) => random.number({ max, min, precision: 1 });

  // Sometimes the result is rounded to a whole number because the 10ths place is 0.
  // This function ensures that the output's decimal place will always exist and be greater than 0.
  // This is done because visually it looks better.
  const generateFloat = (max, min) => {
    const float = Number((Math.random() * (max - min) + min).toFixed(1));
    return float % 1 === 0 ? generateFloat(max, min) : float;
  };
  const generateNumber = randomLeftRight(generateInt, generateFloat);

  const unsorted = times(() => ({
    id: random.uuid(),
    // We subtract one so that it
    date: date.between(from, to).getTime(),
    duration: generateNumber(24, 0),
    weight: generateNumber(50, 72),
    bodyFat: generateNumber(25, 5)
  }), length);

  return unsorted.sort((a, b) => a.date - b.date);
}

