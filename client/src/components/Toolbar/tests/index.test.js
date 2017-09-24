/**
 * Created by danielhollcraft on 9/8/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../index'

describe('<Toolbar />', () => {
  it('matches snapshot', () => {
    expect(shallow(<Toolbar />)).toMatchSnapshot();
  });
});