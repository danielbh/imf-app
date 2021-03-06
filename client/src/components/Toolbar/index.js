import React from 'react';
import ButtonBar from '../../components/ButtonBar'
import Flexbox from '../../components/Flexbox';
import ChartTabs from '../../containers/ChartTabs';

const Toolbar = () => (
  <Flexbox justifyContent="space-around">
       <ChartTabs />
       <ButtonBar />
  </Flexbox>
);

export default Toolbar
