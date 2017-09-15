import React from 'react';
import PropTypes from 'prop-types';

import ButtonBar from '../../components/ButtonBar'
import Flexbox from '../../components/Flexbox';
import ChartTabs from '../ChartTabs';

const Toolbar = () => (
  <Flexbox>
       <ChartTabs />
       <ButtonBar />
  </Flexbox>
);

export default Toolbar
