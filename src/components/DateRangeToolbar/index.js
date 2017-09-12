import React from 'react';
import styled from 'styled-components';
import RangeButton from '../../containers/RangeButton/index'

import {
  WEEK,
    MONTH,
    THREE_MONTHS,
    YEAR,
    ALL
} from "../../containers/App/constants";

const Wrapper = styled.div`
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
`;

const DateRangeToolbar = () => (
  <Wrapper>
        <RangeButton dateRange={WEEK}>1W</RangeButton>
        <RangeButton dateRange={MONTH}>1M</RangeButton>
        <RangeButton dateRange={THREE_MONTHS}>3M</RangeButton>
        <RangeButton dateRange={YEAR}>1Y</RangeButton>
        <RangeButton dateRange={ALL}>ALL</RangeButton>
  </Wrapper>
);

DateRangeToolbar.propTypes = {};

DateRangeToolbar.defaultProps = {};

export default DateRangeToolbar
