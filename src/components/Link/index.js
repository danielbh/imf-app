import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = styled.a`
   text-decoration: none;
   display: block;
   margin: 2px;
`;

const SPAN = styled.span`
   text-decoration: underlined;
   display: block;
   margin: 2px;
`;

const Link = ({ active, children, onClick }) => {

  if (active) {
    return <SPAN className="btn btn-primary">{children}</SPAN>;
  }

  return (
    <A
      className="btn btn-default"
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </A>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;