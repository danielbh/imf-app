import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from 'react-bootstrap';
import ChartTabs from '../index'

const ChartTabsComponent = handleSelect => shallow(<ChartTabs handleSelect = { handleSelect } />);

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

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {

  });
});