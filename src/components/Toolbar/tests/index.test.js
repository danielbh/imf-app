/**
 * Created by danielhollcraft on 9/8/17.
 */
import React from 'react';
import 'jest-styled-components'
import { shallow } from 'enzyme';
import Toolbar from '../index'
import {
  selectWeek,
  selectMonth,
  selectThreeMonth,
  selectYear,
  selectAll
} from '../../../containers/RangeButton/actions'

const renderComponent = (props) => shallow(
  <Toolbar {...props} />
);

describe('<Toolbar />', () => {
  it('matches snapshot', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});