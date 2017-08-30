/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import styled from 'styled-components';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

const Wrapper = styled.div``;

export const HealthDataTable = ({ data }) => (
  <Wrapper>
    <BootstrapTable
      data={data}
      exportCSV
      selectRow={{ mode: 'checkbox' }}
      deleteRow
      insertRow
      pagination
      //options={{  }}
    >
      <TableHeaderColumn dataField="id" isKey hidden export>id</TableHeaderColumn>
      <TableHeaderColumn dataField="date">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="duration">Duration (hrs)</TableHeaderColumn>
      <TableHeaderColumn dataField="weight">Weight (kg)</TableHeaderColumn>
      <TableHeaderColumn dataField="bodyFat">Body Fat %</TableHeaderColumn>
    </BootstrapTable>
  </Wrapper>
);


HealthDataTable.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(HealthDataTable);
