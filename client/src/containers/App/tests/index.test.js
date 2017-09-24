import React from 'react';
import { shallow, mount } from 'enzyme';

import Footer from '../../../components/Footer';
import Dashboard from '../../../components/Dashboard';
import { App } from '../';

const renderedComponent = () => shallow(
  <App />
);

describe('<App />', () => {
  it('should render with a Dashboard', () => {
    expect(renderedComponent().find(Dashboard).length).toBe(1);
  });

  it('should render the footer', () => {

    expect(renderedComponent().find(Footer).length).toBe(1);
  });
});
