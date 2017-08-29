/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import H4 from '../../components/H4';
import styled from 'styled-components';

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

const HealthDataChart = ({ data, color, title }) => (
  <Wrapper>
    <H4 className="title">{title}</H4>
    <ResponsiveContainer width="80%" aspect={3}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="date" interval={5} />
        <YAxis domain={['dataMin', 'dataMax']} padding={{ bottom: 30, top: 30 }} />
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  </Wrapper>
);

HealthDataChart.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default HealthDataChart;
