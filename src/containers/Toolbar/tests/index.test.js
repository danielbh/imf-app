/**
 * Created by danielhollcraft on 9/8/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Toolbar } from '../index'
import 'jest-styled-components'

const renderComponent = (props) => shallow(
  <Toolbar {...props} />
);

describe('<Toolbar />', () => {
  it('has expected structure and styles', () => {
    const tree = create(<Toolbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Date range change buttons', () => {
    it('changes date range to today on click', () => {
      const selectWeek = jest.fn();
      const component = renderComponent({ selectWeek });
      component.find(Button).at(0).simulate('click');
      expect(selectWeek).toBeCalled();
    });

    it('changes date range to this month on click', () => {
      const selectMonth = jest.fn();
      const component = renderComponent({ selectMonth });
      component.find(Button).at(1).simulate('click');
      expect(selectMonth).toBeCalled();
    });

    it('changes date range to the last three months on click', () => {
      const selectThreeMonth = jest.fn();
      const component = renderComponent({ selectThreeMonth });
      component.find(Button).at(2).simulate('click');
      expect(selectThreeMonth).toBeCalled();
    });

    it('changes date range to the last year on click', () => {
      const selectYear = jest.fn();
      const component = renderComponent({ selectYear });
      component.find(Button).at(3).simulate('click');
      expect(selectYear).toBeCalled();
    });

    it('changes date range to "all time" on click', () => {
      const selectAll = jest.fn();
      const component = renderComponent({ selectAll });
      component.find(Button).at(4).simulate('click');
      expect(selectAll).toBeCalled();
    });
  });
});