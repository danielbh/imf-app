import React from 'react';
import { shallow, mount } from 'enzyme';

import { HealthDataChartPane, mapStateToProps } from '../index';
import  HealthDataChartPaneContainer from '../index';
import HealthDataChart from '../chart';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { YEAR } from "../../../constants";

const data = {
  duration: [{ date: '1-Jan-70', value: 1 }, { date: 2, value: 3 }],
  weight: [{ date: '1-Jan-70', value: 4 }, { date: 2, value: 6 }],
  bodyFat: [{ date: '1-Jan-70', value: 3 }, { date: 2, value: 8 }]
};

const renderComponent = (props = {}) => shallow(
  <HealthDataChartPane
    data={data}
    {...props}
  />
);

describe('<HealthDataChartPane />', () => {

  it('should have 3 charts', () => {
    expect(renderComponent().find(HealthDataChart).length).toEqual(3);
  });

  describe('Duration chart', () => {
    it('should have the correct title', () => {
      expect(renderComponent().childAt(0).props().title).toEqual('Duration');
    });

    it('should have the correct color', () => {
      expect(renderComponent().childAt(0).props().color).toEqual('green');
    });

    it('should have the correct data', () => {
      expect(renderComponent().childAt(0).props().data)
        .toEqual([{ date: '1-Jan-70', value: 1 }, { date: 2, value: 3 }]);
    });
  });

  describe('Weight chart', () => {
    it('should have the correct title', () => {
      expect(renderComponent().childAt(1).props().title).toEqual('Weight (kg)');
    });

    it('should have the correct color', () => {
      expect(renderComponent().childAt(1).props().color).toEqual('blue');
    });

    it('should have the correct data', () => {
      expect(renderComponent().childAt(1).props().data).toEqual([{ date: '1-Jan-70', value: 4 }, { date: 2, value: 6 }]);
    });
  });

  describe('Body Fat chart', () => {
    it('should have the correct title', () => {
      expect(renderComponent().childAt(2).props().title).toEqual('Body Fat %');
    });

    it('should have the correct color', () => {
      expect(renderComponent().childAt(2).props().color).toEqual('red');
    });

    it('should have the correct data', () => {
      expect(renderComponent().childAt(2).props().data).toEqual([{ date: '1-Jan-70', value: 3 }, { date: 2, value: 8 }]);
    });
  });

  describe('mapStateToProps', () => {
    it('passes dateRange getEntriesInRange into mapDataToObject', () => {

      // Set dates to first epoch time, and set date range so they won't appear when passed through selector
      const state = {
        data: [
          { date: 1, duration: 1, weight: 4, bodyFat: 3 },
          { date: 1, duration: 3, weight: 6, bodyFat: 8 }
        ],
        dateRange: YEAR
      };

      expect(mapStateToProps(state)).toEqual({ data: {"bodyFat": [], "duration": [], "weight": [] } });

    });
  });

  describe('test connect', () => {

    it('should pass the data from connect', () => {
      const mockStore = configureMockStore();

      const store = mockStore({
        data: [
          { date: 1505345773000, duration: 1, weight: 4, bodyFat: 3 },
          { date: 1505323763000, duration: 3, weight: 6, bodyFat: 8 }
        ],
      });

      const wrapper = mount(
        <Provider store={store}>
          <HealthDataChartPaneContainer />
        </Provider>
      );

      const node = wrapper.find(HealthDataChart);

      expect(node.at(0).node.props.data).toEqual([{ date: '14-Sep-17', value: 1 }, { date: '13-Sep-17', value: 3 }]);
      expect(node.at(1).node.props.data).toEqual([{ date: '14-Sep-17', value: 4 }, { date: '13-Sep-17', value: 6 }]);
      expect(node.at(2).node.props.data).toEqual([{ date: '14-Sep-17', value: 3 }, { date: '13-Sep-17', value: 8 }]);
    });
  });
});
