import React from 'react';
import RangeButton from '../../containers/RangeButton';
import Flexbox from '../../components/Flexbox';
import {
  WEEK,
  MONTH,
  THREE_MONTHS,
  YEAR,
  ALL
} from "../../constants";

const RangeButtons = () => (
  <Flexbox>
    <RangeButton dateRange={WEEK}>1W</RangeButton>
    <RangeButton dateRange={MONTH}>1M</RangeButton>
    <RangeButton dateRange={THREE_MONTHS}>3M</RangeButton>
    <RangeButton dateRange={YEAR}>1Y</RangeButton>
    <RangeButton dateRange={ALL}>ALL</RangeButton>
  </Flexbox>
)

export default RangeButtons