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
import { addEntry, deleteEntries } from './actions';
import { validateDate, validateBodyFat, validateWeight, validateDuration } from './insertValidation';
import { getEntriesInRange } from "../App/selectors";
import { fetchEntriesIfNeeded } from "./actions";

// IMPORTANT: Default css behavior is overridden to hide toastr notification which appears on invalid insert
// submits. The recommended solution does not work. See documentation here:
// http://allenfang.github.io/react-bootstrap-table/docs.html#beforeShowError
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
    fetchEntriesIfNeeded: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
  };

  componentDidMount() {
    this.props.fetchEntriesIfNeeded();
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
            // Please see https://github.com/AllenFang/react-bootstrap-table/issues/1455 on why it is necessary to
            // wrap onAddRow in a callback.
            onAddRow: row => { addRow(row) },
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
  deleteRows: ids => dispatch(deleteEntries(ids)),
  fetchEntriesIfNeeded: () => dispatch(fetchEntriesIfNeeded())
});


const makeDatesReadable = entries => entries.map(e => ({
  ...e,
  date: moment(e.date).format('D-MMM-YY')
}));

export const mapStateToProps = state => {
  // isFetching is for controlling loading component which will be added later.
  // We set a default value so that when the component first loads its in a loading state until data fetch is terminated
  const { isFetching, lastUpdated, items: entries } = state.entries || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    lastUpdated,
    entries: makeDatesReadable(getEntriesInRange(entries, state.dateRange))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HealthDataTable);
