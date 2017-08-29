/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import HealthDataChartPane from '../../../containers/HealthDataChartPane';
import HealthDataTable from '../../../containers/HealthDataTable';
import Dashboard from '../index';

const renderComponent = () => shallow(
  <Dashboard />
);

describe('<Dashboard />', () => {
  it('has an article as the root element', () => {
    expect(renderComponent().type()).toEqual('article');
  });

  describe('<HealthChartDataPane />', () => {
    it('renders HealthDataChartPane', () => {
      expect(renderComponent().find(HealthDataChartPane).length).toEqual(1);
    });
  });

  describe('<HealthDataTable />', () => {
    it('renders HealthDataTable', () => {
      expect(renderComponent().find(HealthDataTable).length).toEqual(1);
    });
  });
});
