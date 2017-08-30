import React from 'react';
import { shallow } from 'enzyme';

import H4 from '../../../components/H4';
import HealthDataChart from '../chart';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const renderComponent = (props = {}) => shallow(
  <HealthDataChart color="#FFFFFF" title="title" id="id" data={['data']} {...props} />
);

const responsiveContainer = () => renderComponent().childAt(1);
const lineChart = () => renderComponent().childAt(1).childAt(0);

describe('<HealthDataChart />', () => {
  describe('rendering', () => {
    describe('<H4 />', () => {
      it('displays the H4 Component', () => {
        expect(renderComponent().childAt(0).type()).toEqual(H4);
      });

      it('should have the correct className', () => {
        expect(renderComponent().childAt(0).props().className).toEqual('title');
      });

      it('displays the correct title', () => {
        expect(renderComponent().childAt(0).childAt(0).text()).toEqual('title');
      });
    });

    describe('<ResponsiveContainer />', () => {

      it('displays the ResponsiveContainer Component', () => {
        expect(responsiveContainer().type()).toEqual(ResponsiveContainer);
      });

      it('has the correct width', () => {
        expect(responsiveContainer().props().width).toEqual('80%');
      });

      it('has the correct aspect ratio', () => {
        expect(responsiveContainer().props().aspect).toEqual(3);
      });
    });

    describe('<LineChart />', () => {

      it('displays the lineChart Component', () => {
        expect(lineChart().type()).toEqual(LineChart);
      });

      it('is passed the correct data', () => {
        expect(lineChart().props().data).toEqual(['data']);
      });

      it('has the correct margin value', () => {
        expect(lineChart().props().margin).toEqual({ top: 5, right: 0, left: 0, bottom: 5 });
      });

      describe('<XAxis />', () => {

        it('displays the XAxis Component', () => {
          expect(lineChart().childAt(0).type()).toEqual(XAxis);
        });

        it('has the right dataKey', () => {
          expect(lineChart().childAt(0).props().dataKey).toEqual('date');
        });

        it('has the right interval prop', () => {
          expect(lineChart().childAt(0).props().interval).toEqual(5);
        });
      });

      describe('<YAxis />', () => {
        it('displays the YAxis Component', () => {
          expect(lineChart().childAt(1).type()).toEqual(YAxis);
        });

        it('has the correct value for domain', () => {
          expect(lineChart().childAt(1).props().domain).toEqual(['dataMin', 'dataMax']);

        });

        it('has the correct padding', () => {
          expect(lineChart().childAt(1).props().padding).toEqual({ bottom: 5});
        });
      });

      describe('<CartesianGrid />', () => {
        it('displays the CartesianGrid Component', () => {
          expect(lineChart().childAt(2).type()).toEqual(CartesianGrid);
        });

        it('has the correct strokeDasharray value', () => {
          expect(lineChart().childAt(2).props().strokeDasharray).toEqual('2 2');
        });

        it('should have vertical prop be false', () => {
          expect(lineChart().childAt(2).props().vertical).toEqual(false);
        });

      });

      describe('<Tooltip />', () => {
        it('displays the Tooltip Component', () => {
          expect(lineChart().childAt(3).type()).toEqual(Tooltip);
        });
      });

      describe('<Line />', () => {
        it('displays the Line Component', () => {
          expect(lineChart().childAt(4).type()).toEqual(Line);
        });

        it('is of monotone type', () => {
          expect(lineChart().childAt(4).props().type).toEqual('monotone');
        });

        it('has a dataKey with the correct value', () => {
          expect(lineChart().childAt(4).props().dataKey).toEqual('value');
        });

        it('has the correct stroke color', () => {
          expect(lineChart().childAt(4).props().stroke).toEqual('#FFFFFF');
        });

        it('does not have dots on line', () => {
          expect(lineChart().childAt(4).props().dot).toEqual(false);
        });

      });
    });


  });
});
