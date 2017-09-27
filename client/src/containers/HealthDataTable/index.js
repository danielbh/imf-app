/**
 *
 * Table
 *
 */
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';
import { addEntry, deleteEntry } from './actions';
import { validateDate, validateBodyFat, validateWeight, validateDuration } from './insertValidation';
import { getEntriesInRange } from "../App/selectors";
import { fetchEntriesIfNeeded } from "./actions";

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

export class HealthDataTable extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
    addRow: PropTypes.func.isRequired,
    deleteRows: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatch(fetchEntriesIfNeeded());
  }

  render() {
    const { entries, addRow, deleteRows } = this.props;

    return (
      <Wrapper>
        <BootstrapTable
          data={entries}
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
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addRow: row => dispatch(addEntry(row)),
  deleteRows: ids => dispatch(deleteEntry(ids)),
  dispatch
});


const convertDatesToHR = entries => entries.map(e => ({
  ...e,
  date: moment(e.date).format('D-MMM-YY')
}));

export const mapStateToProps = state => {
  const { isFetching, lastUpdated, items: entries } = state.entries || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    lastUpdated,
    entries: convertDatesToHR(getEntriesInRange(entries, state.dateRange))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HealthDataTable);
