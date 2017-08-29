/**
 * Convert data from array to object
 * @param data
 */
export function mapDataToObject(data) {
  return data.reduce((result, e) => {
    result.duration.push({date: e.date, value: e.duration});
    result.weight.push({date: e.date, value: e.weight});
    result.bodyFat.push({date: e.date, value: e.bodyFat});
    return result;
  }, {duration: [], weight: [], bodyFat: []})
}