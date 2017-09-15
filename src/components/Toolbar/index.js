import React from 'react';
import styled from 'styled-components';
import RangeButton from '../../containers/RangeButton/index'
import ChartTabs from '../ChartTabs';

import {
  WEEK,
  MONTH,
  THREE_MONTHS,
  YEAR,
  ALL
} from "../../containers/App/constants";

const Wrapper = styled.div`
  margin: 0; 
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: flex-end;
`;

const Toolbar = () => (
  <Wrapper>
      <RangeButton dateRange={WEEK}>1W</RangeButton>
      <RangeButton dateRange={MONTH}>1M</RangeButton>
      <RangeButton dateRange={THREE_MONTHS}>3M</RangeButton>
      <RangeButton dateRange={YEAR}>1Y</RangeButton>
      <RangeButton dateRange={ALL}>ALL</RangeButton>
  </Wrapper>
);

export default Toolbar
