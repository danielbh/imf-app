/**
 * Created by danielhollcraft on 9/8/17.
 */
import React from 'react';
import 'jest-styled-components'
import { shallow } from 'enzyme';
import DateRangeToolbar from '../index'
import {
  selectWeek,
  selectMonth,
  selectThreeMonth,
  selectYear,
  selectAll
} from '../../../containers/RangeButton/actions'

const renderComponent = (props) => shallow(
  <DateRangeToolbar {...props} />
);

describe('<DateRangeToolbar />', () => {
  it('matches snapshot', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});