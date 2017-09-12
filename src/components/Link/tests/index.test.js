/**
 * Created by danielhollcraft on 9/8/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Link from '../index'

const renderComponent = (props) => shallow(
  <Link {...props} />
);

describe('<Link />', () => {
  it('matches snapshot', () => {
    expect(renderComponent()).toMatchSnapshot();
  });

  it('displays span when active is true', () => {
    expect(renderComponent({active: true}).type()).toEqual('span');
  });

  it('displays anchor tag when active is false', () => {
    expect(renderComponent({active: false}).type()).toEqual('a');
  });

  it('calls onClick callback', () => {
    const onClick = jest.fn();
    renderComponent({onClick}).simulate('click', { preventDefault: () => {} });
    expect(onClick).toHaveBeenCalled();
  });

  it('calls preventDefault() on event object in onClick callback', () => {
    const preventDefault = jest.fn();
    renderComponent({onClick: () => {}}).simulate('click', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });
});