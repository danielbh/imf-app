import React from 'react';
import { shallow } from 'enzyme';
import RangeButtons from '../index'

describe('<RangeButtons />', () => {
  it('matches snapshot', () => {
    expect(shallow(<RangeButtons />)).toMatchSnapshot();
  });
});