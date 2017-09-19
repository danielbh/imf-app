import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const ChartTabs = ({handleSelect}) => {
  return (
      <Tabs defaultActiveKey={1} onSelect={ handleSelect } >
        <Tab eventKey={1} title="Duration" />
        <Tab eventKey={2} title="Weight (kg)" />
        <Tab eventKey={3} title="Body Fat %" />
      </Tabs>
  );
};

ChartTabs.propTypes = {};
ChartTabs.defaultProps = {};

export default ChartTabs;
