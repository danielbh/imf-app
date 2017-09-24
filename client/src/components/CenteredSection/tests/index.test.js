import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CenteredSection from '../index';

describe('<CenteredSection />', () => {
  it('should render an <section> tag', () => {
    const renderedComponent = renderer.create(<CenteredSection />).toJSON();
    expect(renderedComponent.type).toEqual('section');
  });

  it('should have correct style', () => {
    expect(renderer.create(<CenteredSection/>).toJSON()).toHaveStyleRule('text-align', 'center')
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<CenteredSection />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<CenteredSection id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = renderer.create(<CenteredSection test={'test'} />).toJSON();
    expect(renderedComponent.props.test).toBeUndefined();
  });
});
