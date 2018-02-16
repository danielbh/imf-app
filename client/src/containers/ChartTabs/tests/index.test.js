import React from 'react';
import { shallow } from 'enzyme';
import { ChartTabs, mapDispatchToProps } from '../index'
import { selectTab } from "../actions";

const ChartTabsComponent =
  handleSelect => shallow(<ChartTabs handleSelect={handleSelect} />);

describe('<ChartTabs />', () => {
  it('matches snapshot', () => {
    expect(shallow(<ChartTabs />)).toMatchSnapshot();
  });

  it('passes down handleSelect eventHandler', () => {
    const handleSelect = jest.fn();
    const wrapper = ChartTabsComponent(handleSelect);
    wrapper.props().onSelect(1);
    expect(handleSelect).toHaveBeenCalledWith(1)
  });


  describe('mapDispatchToProps', () => {
    describe('handleSelect', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleSelect).toBeDefined();
      });

      it('should dispatch handleSelect when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.handleSelect(1);
        expect(dispatch).toHaveBeenCalledWith(selectTab(1));
      });
    });
  });
});
