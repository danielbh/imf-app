import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.h1`
  .toolbar {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
  }
`;
const Toolbar = () => (
  <Wrapper>
    <ButtonToolbar className="toolbar">
      <ButtonGroup>
        <Button>Day</Button>
        <Button>Mon</Button>
        <Button>Year</Button>
        <Button>All</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </Wrapper>
);

Toolbar.propTypes = {};
Toolbar.defaultProps = {};

export default Toolbar;
