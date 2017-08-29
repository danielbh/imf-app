/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 32px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - IMF Tracker"
        defaultTitle="IMF Tracker"
        meta={[
          { name: 'description', content: 'IMF Tracker' }
        ]}
      />
      <Dashboard />
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
