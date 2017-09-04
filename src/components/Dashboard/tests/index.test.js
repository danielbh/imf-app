/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../../Toolbar';
import CenteredSection from '../../CenteredSection';
import Section from '../../Section';
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

  it('has Sections', () => {
    expect(renderComponent().find(Section).length).toEqual(1);
  });

  it('has Centered Sections', () => {
    expect(renderComponent().find(CenteredSection).length).toEqual(2);
  });

  it('renders HealthDataChartPane', () => {
    expect(renderComponent().find(HealthDataChartPane).length).toEqual(1);
  });

  it('renders HealthDataTable', () => {
    expect(renderComponent().find(HealthDataTable).length).toEqual(1);
  });

  it('renders Toolbar', () => {
    expect(renderComponent().find(Toolbar).length).toEqual(1);
  });
});
