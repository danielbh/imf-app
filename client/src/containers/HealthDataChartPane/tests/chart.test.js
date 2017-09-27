import React from 'react';
import { shallow } from 'enzyme';

import HealthDataChart from '../chart';
const entries = [
  { date: 1, value: 1 },
  { date: 2, value: 3 },
  { date: 3, value: 7 },
  { date: 4, value: 3 },
  { date: 5, value: 2 },
  { date: 6, value: 1 },
  { date: 100, value: 9 }
];

const renderComponent = (props = {}) => shallow(
  <HealthDataChart color="#FFFFFF" title="title" id="id" entries={entries} {...props} />
);

describe('<HealthDataChart />', () => {
    it('matches snapshot', () => {
      expect(renderComponent()).toMatchSnapshot();
    });
});
