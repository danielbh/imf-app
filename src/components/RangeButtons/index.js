import React from 'react';
import RangeButton from '../../containers/RangeButton';
import FlexRowEnd from '../../components/FlexRowEnd';
import {
  WEEK,
  MONTH,
  THREE_MONTHS,
  YEAR,
  ALL
} from "../../containers/App/constants";

const RangeButtons = () => (
  <FlexRowEnd>
    <RangeButton dateRange={WEEK}>1W</RangeButton>
    <RangeButton dateRange={MONTH}>1M</RangeButton>
    <RangeButton dateRange={THREE_MONTHS}>3M</RangeButton>
    <RangeButton dateRange={YEAR}>1Y</RangeButton>
    <RangeButton dateRange={ALL}>ALL</RangeButton>
  </FlexRowEnd>
)

export default RangeButtons;