import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const ChartTabs = () => {
  return (
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1" />
        <Tab eventKey={2} title="Tab 2" />
        <Tab eventKey={3} title="Tab 3" />
      </Tabs>
  );
};

ChartTabs.propTypes = {};
ChartTabs.defaultProps = {};

export default ChartTabs;
