/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import HealthDataChart from './chart';
import { getEntriesInRange } from "../App/selectors";

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

/**
 * Convert data from array to object
 * @param data
 */
function mapDataToObject(data) {
  return data.reduce((result, e) => {
    const date = moment(e.date).format('D-MMM-YY');
    result.duration.push({ date, value: e.duration });
    result.weight.push({ date, value: e.weight });
    result.bodyFat.push({ date, value: e.bodyFat });
    return result;
  }, { duration: [], weight: [], bodyFat: [] });
}

export const mapStateToProps = state => ({
  data: mapDataToObject(getEntriesInRange(state.data, state.dateRange))
});

export default connect(mapStateToProps)(HealthDataChartPane);
