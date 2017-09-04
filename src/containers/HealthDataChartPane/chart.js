/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import H4 from '../../components/H4';

const Wrapper = styled.div`
  width: 90%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  
  .title {
     width: 20%;
  }
`;

const HealthDataChart = ({ data, color, title }) => {
  const { xValues, yValues } = data.reduce((acc, e) => {
    acc.xValues.push(e.date);
    acc.yValues.push(e.value);
    return acc;
  }, { xValues: [], yValues: [] });

  const xMaxMin = [Math.min.apply(0, xValues), Math.max.apply(0, xValues)];
  const yMaxMin = [Math.min.apply(0, yValues), Math.max.apply(0, yValues)];

  return (
    <Wrapper>
      <H4 className="title">{title}</H4>
      <ResponsiveContainer width="80%" aspect={3}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <XAxis domain={xMaxMin} dataKey="date" interval={5} />
          <YAxis domain={yMaxMin} padding={{ bottom: 5 }} />
          <CartesianGrid strokeDasharray="2 2" vertical={false} horizontal={false} />
          <Tooltip />
          <Line type="monotone" dataKey="value" dot={false} stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

HealthDataChart.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default HealthDataChart;
