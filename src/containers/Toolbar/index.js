import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  selectWeek,
  selectMonth,
  selectThreeMonth,
  selectYear,
  selectAll
} from './actions'

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
    selectWeek: () => dispatch(selectWeek()),
    selectMonth: () => dispatch(selectMonth()),
    selectThreeMonth: () => dispatch(selectThreeMonth()),
    selectYear: () => dispatch(selectYear()),
    selectAll: () => dispatch(selectAll())
  };
}

Toolbar.defaultProps = {};

export default connect(null, mapDispatchToProps)(Toolbar);