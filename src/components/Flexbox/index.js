/**
 * Created by danielhollcraft on 9/15/17.
 */
import React from 'react';
import styled from 'styled-components';

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

const Flexbox = ({children}) => (
  <Wrapper>{children}</Wrapper>
);

Flexbox.propTypes = {};
Flexbox.defaultProps = {};

export default Flexbox;