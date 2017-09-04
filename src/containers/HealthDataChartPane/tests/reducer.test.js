import { mapDataToObject } from '../reducer';

it('maps data array to an object', () => {
  const testData = [
    { date: 1, duration: 1, weight: 4, bodyFat: 3 },
    { date: 2, duration: 3, weight: 6, bodyFat: 8 }
  ];

  const expected = {
    duration: [{ date: 1, value: 1 }, { date: 2, value: 3 }],
    weight: [{ date: 1, value: 4 }, { date: 2, value: 6 }],
    bodyFat: [{ date: 1, value: 3 }, { date: 2, value: 8 }]
  };

  expect(mapDataToObject(testData)).toEqual(expected);
});
