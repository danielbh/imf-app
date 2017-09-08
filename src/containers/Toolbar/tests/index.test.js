/**
 * Created by danielhollcraft on 9/8/17.
 */
import React from 'react';
import 'jest-styled-components'
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Toolbar, mapDispatchToProps } from '../index'
import {
  selectWeek,
  selectMonth,
  selectThreeMonth,
  selectYear,
  selectAll
} from '../actions'

const renderComponent = (props) => shallow(
  <Toolbar {...props} />
)

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

  describe('mapDispatchToProps', () => {
    describe('selectWeek', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectWeek).toBeDefined();
      });

      it('should dispatch selectWeek action when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.selectWeek();
        expect(dispatch).toHaveBeenCalledWith(selectWeek());
      });
    });

    describe('selectMonth', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectMonth).toBeDefined();
      });

      it('should dispatch selectMonth action when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.selectMonth();
        expect(dispatch).toHaveBeenCalledWith(selectMonth());
      });
    });

    describe('selectThreeMonth', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectThreeMonth).toBeDefined();
      });

      it('should dispatch selectThreeMonth action when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.selectThreeMonth();
        expect(dispatch).toHaveBeenCalledWith(selectThreeMonth());
      });
    });

    describe('selectYear', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectYear).toBeDefined();
      });

      it('should dispatch selectYear action when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.selectYear();
        expect(dispatch).toHaveBeenCalledWith(selectYear());
      });
    });

    describe('selectAll', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectAll).toBeDefined();
      });

      it('should dispatch selectAll action when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.selectAll();
        expect(dispatch).toHaveBeenCalledWith(selectAll());
      });
    });
  });
});