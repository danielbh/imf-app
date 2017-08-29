import React from 'react';
import { shallow } from 'enzyme';
import { HealthDataTable } from '../index';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';

const renderComponent = (props = {}) => shallow(
  <HealthDataTable data={['data']} />
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
});
