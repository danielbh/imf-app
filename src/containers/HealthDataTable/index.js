/**
 *
 * Table
 *
 */
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import React from 'react';
import PropTypes from 'prop-types';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addEntry, deleteEntries } from './actions';
import { validateDate, validateBodyFat, validateWeight, validateDuration } from './insertValidation';

// IMPORTANT: Default css behavior is overridden to hide toastr notification which appears on invalid insert
// submits. The recommended solution does not work. See documentation here:
// http://allenfang.github.io/react-bootstrap-table/docs.html#beforeShowError
// At the moment this is also not supported in the unit testing framework. Please see the following link
// for more information: https://github.com/styled-components/jest-styled-components/issues/64
const Wrapper = styled.div`
  .s-alert-wrapper {
     display: none;
  }
`;

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
        handleConfirmDeleteRow: next => next() // Overrides default behavior which triggers an alert.
      }}
    >
      <TableHeaderColumn
        dataField="id"
        isKey
        hidden
        export
        hiddenOnInsert
        autoValue
      >id</TableHeaderColumn>

      <TableHeaderColumn
        dataField="date"
        editable={{ type: 'date', validator: validateDate }}
      >Date</TableHeaderColumn>

      <TableHeaderColumn
        dataField="duration"
        editable={{ type: 'number', validator: validateDuration }}
      >Duration (hrs)</TableHeaderColumn>

      <TableHeaderColumn
        dataField="weight"
        editable={{ type: 'number', validator: validateWeight }}
      >Weight (kg)</TableHeaderColumn>

      <TableHeaderColumn
        dataField="bodyFat"
        editable={{ type: 'number', validator: validateBodyFat }}
      >Body Fat %</TableHeaderColumn>

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
