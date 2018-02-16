import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import { selectTab } from "./actions";
import { connect } from 'react-redux';

export const ChartTabs = ({ handleSelect }) => {
  return (
      <Tabs defaultActiveKey={1} onSelect={ handleSelect } id="tab-id-required-for-accessibility" >
        <Tab eventKey={1} title="Duration" />
        <Tab eventKey={2} title="Weight (kg)" />
        <Tab eventKey={3} title="Body Fat %" />
      </Tabs>
  );
};

ChartTabs.propTypes = {
  handleSelect: PropTypes.func
};
ChartTabs.defaultProps = {};

export const mapDispatchToProps = (dispatch) => ({
  handleSelect: key => dispatch(selectTab(key))
});

export default connect(null, mapDispatchToProps)(ChartTabs);
