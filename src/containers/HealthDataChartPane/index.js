/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import HealthDataChart from './chart';
import { connect } from 'react-redux';
import { mapDataToObject } from "./selectors";

export const HealthDataChartPane = ({ data }) => (
  <div>
    <HealthDataChart title="Duration" color="green" data={data.duration} />
    <HealthDataChart title="Weight (kg)" color="blue" data={data.weight} />
    <HealthDataChart title="Body Fat %" color="red" data={data.bodyFat} />
  </div>
);

HealthDataChartPane.propTypes = {
  data: PropTypes.shape({
    duration: PropTypes.array,
    weight: PropTypes.array,
    bodyFat: PropTypes.array
  }),
};

const mapStateToProps = state => ({
  data: mapDataToObject(state.data, state.dateRange)
});

export default connect(mapStateToProps)(HealthDataChartPane);
