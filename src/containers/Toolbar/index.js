import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  setDateRange
} from './actions'

import {
  WEEK,
    MONTH,
    THREE_MONTHS,
    YEAR,
    ALL
} from "./constants";

const Wrapper = styled.div`
  .toolbar {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
  }
`;

export const Toolbar = ({
  selectWeek,
  selectMonth,
  selectThreeMonth,
  selectYear,
  selectAll
}) => (
  <Wrapper>
    <ButtonToolbar className="toolbar">
      <ButtonGroup>
        <Button onClick={selectWeek}>1W</Button>
        <Button onClick={selectMonth}>1M</Button>
        <Button onClick={selectThreeMonth}>3M</Button>
        <Button onClick={selectYear}>1Y</Button>
        <Button onClick={selectAll}>All</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </Wrapper>
);

Toolbar.propTypes = {
  selectWeek: PropTypes.func,
  selectMonth: PropTypes.func,
  selectThreeMonth: PropTypes.func,
  selectYear: PropTypes.func,
  selectAll: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    selectWeek: () => dispatch(setDateRange(WEEK)),
    selectMonth: () => dispatch(setDateRange(MONTH)),
    selectThreeMonth: () => dispatch(setDateRange(THREE_MONTHS)),
    selectYear: () => dispatch(setDateRange(YEAR)),
    selectAll: () => dispatch(setDateRange(ALL))
  };
}

Toolbar.defaultProps = {};

export default connect(null, mapDispatchToProps)(Toolbar);
