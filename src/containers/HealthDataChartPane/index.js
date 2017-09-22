/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { fromJS } from 'immutable'
import HealthDataChart from './chart';
import { getEntriesInRange } from "../App/selectors";
import { DURATION, WEIGHT, BODY_FAT } from "../ChartTabs/constants";

export const HealthDataChartPane = ({ tab = fromJS({ tab: DURATION }), data }) => {

  const selectedTab = (tab) => {
    const props = {
      DURATION: {
        title: 'Duration',
        color: 'green',
        chartData: data.duration
      },
      WEIGHT: {
        title: 'Weight (kg)',
        color: 'blue',
        chartData: data.weight
      },
      BODY_FAT: {
        title: 'Body Fat %',
        color: 'red',
        chartData: data.bodyFat
      }
    };

    return props[tab]
  };

  const { title, color,  chartData } = selectedTab(tab.get('tab'));

  return <HealthDataChart title={title} color={color} data={chartData} />

};

HealthDataChartPane.propTypes = {
  data: PropTypes.shape({
    duration: PropTypes.array,
    weight: PropTypes.array,
    bodyFat: PropTypes.array
  }).isRequired,
  // tab: PropTypes.oneOf([DURATION, WEIGHT, BODY_FAT]).isRequired
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
  data: mapDataToObject(getEntriesInRange(state.get('data'), state.get('dateRange'))),
  tab: state.get('tab')
});

export default connect(mapStateToProps)(HealthDataChartPane);
