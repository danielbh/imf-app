/**
 *
 * LinearRegressionChart
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Wrapper = styled.div`
  width: 90%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
`;

// TODO: Will use title later so leaving it for now
const HealthDataChart = ({ data, color, title }) => {
  const { xValues, yValues } = data.reduce((acc, e) => {
    acc.xValues.push(e.date);
    acc.yValues.push(e.value);
    return acc;
  }, { xValues: [], yValues: [] });

  const xDomain = [Math.min.apply(0, xValues.reverse()), Math.max.apply(0, xValues.reverse())];
  const yDomain = [Math.min.apply(0, yValues), Math.max.apply(0, yValues)];

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis domain={xDomain} dataKey="date" interval="preserveStartEnd" />
          <YAxis domain={yDomain} padding={{ bottom: 5 }} interval={2} />
          <CartesianGrid strokeDasharray="2 2" vertical={false} horizontal={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            isAnimationActive={false}
            fillOpacity={1}
            fill="url(#colorValue)"
            stroke={color}
          />
        </AreaChart>
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
