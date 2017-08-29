import React from 'react';
import { shallow } from 'enzyme';

import HealthDataChartPane from '../index';
import HealthDataChart from '../chart';

const data = {
  duration: [{ date: 1, value: 1 }, { date: 2, value: 3 }],
  weight: [{ date: 1, value: 4 }, { date: 2, value: 6 }],
  bodyFat: [{ date: 1, value: 3 }, { date: 2, value: 8 }]
};

const renderComponent = (props = {}) => shallow(
  <HealthDataChartPane
    duration={data.duration}
    weight={data.weight}
    bodyFat={data.bodyFat}
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
        .toEqual([{ date: 1, value: 1 }, { date: 2, value: 3 }]);
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
      expect(renderComponent().childAt(1).props().data).toEqual([{ date: 1, value: 4 }, { date: 2, value: 6 }]);
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
      expect(renderComponent().childAt(2).props().data).toEqual([{ date: 1, value: 3 }, { date: 2, value: 8 }]);
    });
  });

});
