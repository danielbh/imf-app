import React from 'react';
import { shallow } from 'enzyme';
import Flexbox from '../index'

const FlexBoxComponent = (opts) => shallow(<Flexbox {...opts} />);

describe('<Flexbox />', () => {
  it('matches snapshot', () => {
    expect(shallow(<Flexbox />)).toMatchSnapshot();
  });

  it('passes margin prop to style', () => {
    expect(FlexBoxComponent({margin: 0}).props().style.margin).toEqual(0)
  });

  it('passes flexFlow prop to style', () => {
    expect(FlexBoxComponent({flexFlow: 'flex-direction'}).props().style.flexFlow).toEqual('flex-direction')
  });

  it('passes justifyContent prop to style', () => {
    expect(FlexBoxComponent({justifyContent: 'center'}).props().style.justifyContent).toEqual('center')
  });

  it('should have the correct default style', () => {
    expect(FlexBoxComponent().props().style).toEqual({
      margin: 0,
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-end'
    })
  });
});