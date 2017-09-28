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
import { DURATION, WEIGHT, BODY_FAT } from "../ChartTabs/constants";

export const HealthDataChartPane = ({ tab = DURATION, entries }) => {

  const selectedTab = (tab) => {
    const props = {
      DURATION: {
        title: 'Duration',
        color: 'green',
        chartData: entries.duration
      },
      WEIGHT: {
        title: 'Weight (kg)',
        color: 'blue',
        chartData: entries.weight
      },
      BODY_FAT: {
        title: 'Body Fat %',
        color: 'red',
        chartData: entries.bodyFat
      }
    };

    return props[tab]
  };

  const { title, color,  chartData } = selectedTab(tab);
  // TODO: Add rendering of progress calculations Example: 10 kg lost etc...
  return <HealthDataChart title={title} color={color} entries={chartData} />

};

HealthDataChartPane.propTypes = {
  entries: PropTypes.shape({
    duration: PropTypes.array,
    weight: PropTypes.array,
    bodyFat: PropTypes.array
  }).isRequired,
  tab: PropTypes.oneOf([DURATION, WEIGHT, BODY_FAT]).isRequired
};

/**
 * Convert entries from array to object
 * @param entries
 */
function mapEntriesToObject(entries) {
  return entries.reduce((result, e) => {
    const date = moment(e.date).format('D-MMM-YY');
    result.duration.push({ date, value: e.duration });
    result.weight.push({ date, value: e.weight });
    result.bodyFat.push({ date, value: e.bodyFat });
    return result;
  }, { duration: [], weight: [], bodyFat: [] });
}

export const mapStateToProps = state => ({
  entries: mapEntriesToObject(getEntriesInRange(state.entries.items || [], state.dateRange)),
  tab: state.tab
});

export default connect(mapStateToProps)(HealthDataChartPane);
