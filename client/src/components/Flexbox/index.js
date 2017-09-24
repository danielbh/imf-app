/**
 * Created by danielhollcraft on 9/15/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Flexbox = ({
   margin = 0,
   flexFlow ='row wrap',
   justifyContent = 'flex-end',
   children
}) => (
  <div
    style={{
      margin,
      display: 'flex',
      flexFlow,
      justifyContent
    }}
  >
    {children}
  </div>
);

Flexbox.propTypes = {
  margin: PropTypes.number,
  display: PropTypes.string,
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string
};
Flexbox.defaultProps = {};

export default Flexbox;