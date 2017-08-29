/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import HealthDataChart from './chart';

const HealthDataChartPane = ({ duration, weight, bodyFat }) => (
  <div>
    <HealthDataChart title="Duration" color="green" data={duration} />
    <HealthDataChart title="Weight (kg)" color="blue" data={weight} />
    <HealthDataChart title="Body Fat %" color="red" data={bodyFat} />
  </div>
);

HealthDataChartPane.propTypes = {
  duration: PropTypes.array.isRequired,
  weight: PropTypes.array.isRequired,
  bodyFat: PropTypes.array.isRequired
};

export default HealthDataChartPane;

// TODO: Add as selector
//   dataAsObject: () => (require('../../data.json').reduce((result, e) => {
//     result.duration.push({ date: e.date, value: e.duration });
//     result.weight.push({ date: e.date, value: e.weight });
//     result.bodyFat.push({ date: e.date, value: e.bodyFat });
//     return result;
//   }, { duration: [], weight: [], bodyFat: [] })
// )
