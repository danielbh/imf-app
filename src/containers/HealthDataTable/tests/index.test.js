import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';

import configureMockStore from 'redux-mock-store';
import uuid from 'node-uuid';
import { Provider } from 'react-redux';

import HealthDataTableContainer, { HealthDataTable, mapDispatchToProps } from '../index';
import { addEntry, deleteEntries } from '../actions';

const renderComponent = () => shallow(
  <HealthDataTable
    data={['data']}
    addRow={() => 'addRow'}
    deleteRows={() => 'deleteRows'}
  />
);

// We use a function to decouple tests.
const renderBootstrapTable = () => renderComponent().childAt(0);
const idColumn = () => renderBootstrapTable().childAt(0);
const dateColumn = () => renderBootstrapTable().childAt(1);
const durationColumn = () => renderBootstrapTable().childAt(2);
const weightColumn = () => renderBootstrapTable().childAt(3);
const bodyFatColumn = () => renderBootstrapTable().childAt(4);

describe('<HealthDataTable />', () => {
  describe('<BootstrapTable/>', () => {
    it('contains <BootstrapTable/>', () => {
      expect(renderBootstrapTable().type()).toEqual(BootstrapTable);
    });

    it('has a data prop with the correct value ', () => {
      expect(renderBootstrapTable().props().data).toEqual(['data']);
    });

    it('has pagination', () => {
      expect(renderBootstrapTable().props().pagination).toEqual(true);
    });

    it('has an exportCSV button', () => {
      expect(renderBootstrapTable().props().exportCSV).toEqual(true);
    });

    it('has deleteRow button', () => {
      expect(renderBootstrapTable().props().deleteRow).toEqual(true);
    });

    it('has an insertRow button', () => {
      expect(renderBootstrapTable().props().insertRow).toEqual(true);
    });

    it('uses selectRow in checkbox mode', () => {
      expect(renderBootstrapTable().props().selectRow).toEqual({mode: 'checkbox'});
    });

    it('should pass add row to BootstrapTable', () => {
      expect(renderBootstrapTable().props().options.afterInsertRow()).toEqual('addRow');
    });

    it('should pass delete rows to BootstrapTable', () => {
      expect(renderBootstrapTable().props().options.afterDeleteRow()).toEqual('deleteRows');
    });

    it('should pass handleConfirmDeleteRow to BootstrapTable', () => {
      const next = jest.fn();
      renderBootstrapTable().props().options.handleConfirmDeleteRow(next);
      expect(next).toHaveBeenCalled();
    });

    describe('Columns', () => {
      it('has 5 columns', () => {
        expect(renderComponent().find(TableHeaderColumn).length).toEqual(5);
      });

      describe('id column', () => {
        it('has correct dataField', () => {
          expect(idColumn().props().dataField).toEqual('id');
        });

        it('has isKey prop', () => {
          expect(idColumn().props().isKey).toEqual(true);
        });

        it('is hidden', () => {
          expect(idColumn().props().hidden).toEqual(true);
        });

        it('is exported', () => {
          expect(idColumn().props().export).toEqual(true);
        });

        it('has correct text value', () => {
          expect(idColumn().childAt(0).text()).toEqual('id');
        });

        it('is hidden on import', () => {
          expect(idColumn().props().hiddenOnInsert).toEqual(true);
        });
      });

      describe('date column', () => {
        it('has correct dataField', () => {
          expect(dateColumn().props().dataField).toEqual('date');
        });

        it('has correct text value', () => {
          expect(dateColumn().childAt(0).text()).toEqual('Date');
        });
      });

      describe('weight column', () => {
        it('has correct dataField', () => {
          expect(weightColumn().props().dataField).toEqual('weight');
        });

        it('has correct text value', () => {
          expect(weightColumn().childAt(0).text()).toEqual('Weight (kg)');
        });
      });

      describe('duration column', () => {
        it('has correct dataField', () => {
          expect(durationColumn().props().dataField).toEqual('duration');
        });

        it('has correct text value', () => {
          expect(durationColumn().childAt(0).text()).toEqual('Duration (hrs)');
        });
      });

      describe('body fat column', () => {
        it('has correct dataField', () => {
          expect(bodyFatColumn().props().dataField).toEqual('bodyFat');
        });

        it('has correct text value', () => {
          expect(bodyFatColumn().childAt(0).text()).toEqual('Body Fat %');
        });
      });
    });
  });

  describe('test connect', () => {

    it('should pass the data from connect', () => {
      const mockStore = configureMockStore();

      const store = mockStore({
        data: [
          { date: 1, duration: 1, weight: 4, bodyFat: 3 },
          { date: 2, duration: 3, weight: 6, bodyFat: 8 }
        ],
      });

      const expected = [
        { date: 1, duration: 1, weight: 4, bodyFat: 3 },
        { date: 2, duration: 3, weight: 6, bodyFat: 8 }
      ]
      const wrapper = mount(
        <Provider store={store}>
          <HealthDataTableContainer />
        </Provider>
      );

      expect(wrapper.find(BootstrapTable).at(0).node.props.data).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    describe('addRow', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.addRow).toBeDefined();
      });

      it('should dispatch addRow when called', () => {
        // fake uuid for action creator
        uuid.v4 = jest.fn().mockReturnValue('fake-id');
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const newEntry = {
          date: '1-May-17',
          duration: '11',
          weight: '69',
          bodyFat: '14'
        };
        result.addRow(newEntry);
        expect(dispatch).toHaveBeenCalledWith(addEntry(newEntry));
      });
    });

    describe('deleteRows', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.deleteRows).toBeDefined();
      });

      it('should dispatch deletRows when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.deleteRows(['id']);
        expect(dispatch).toHaveBeenCalledWith(deleteEntries(['id']));
      });
    });
  });
});
