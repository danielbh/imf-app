import React from 'react';
import { shallow } from 'enzyme';
import FlexRowEnd from '../index'

describe('<FlexRowEnd />', () => {
  it('matches snapshot', () => {
    expect(shallow(<FlexRowEnd />)).toMatchSnapshot();
  });
});