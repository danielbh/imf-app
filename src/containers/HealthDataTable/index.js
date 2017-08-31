/**
 *
 * Table
 *
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

import React from 'react';
import PropTypes from 'prop-types';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addEntry, deleteEntries } from './actions';

const Wrapper = styled.div``;

export const HealthDataTable = ({ data, addRow, deleteRows }) => (
  <Wrapper>
    <BootstrapTable
      data={data}
      exportCSV
      selectRow={{ mode: 'checkbox' }}
      deleteRow
      insertRow
      pagination
      options={{
        afterInsertRow: addRow,
        afterDeleteRow: deleteRows,
        handleConfirmDeleteRow: next => next()
      }}
    >
      <TableHeaderColumn dataField="id" isKey hidden export hiddenOnInsert >id</TableHeaderColumn>
      <TableHeaderColumn dataField="date">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="duration">Duration (hrs)</TableHeaderColumn>
      <TableHeaderColumn dataField="weight">Weight (kg)</TableHeaderColumn>
      <TableHeaderColumn dataField="bodyFat">Body Fat %</TableHeaderColumn>
    </BootstrapTable>
  </Wrapper>
);


HealthDataTable.propTypes = {
  data: PropTypes.array.isRequired,
  addRow: PropTypes.func.isRequired,
  deleteRows: PropTypes.func.isRequired
};

export function mapDispatchToProps(dispatch) {
  return {
    addRow: row => dispatch(addEntry(row)),
    deleteRows: ids => dispatch(deleteEntries(ids))
  };
}


const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, mapDispatchToProps)(HealthDataTable);
