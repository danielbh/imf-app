import React from 'react';
import { shallow } from 'enzyme';
import RangeButtons from '../index'

describe('<ButtonBar />', () => {
  it('matches snapshot', () => {
     expect(shallow(<RangeButtons />)).toMatchSnapshot();
  });
});