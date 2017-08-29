/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import HealthDataChartPane from '../../containers/HealthDataChartPane';
import HealthDataTable from '../../containers/HealthDataTable';
import CenteredSection from '../CenteredSection';
import Section from '../Section';

const Dashboard = () => (
  <article>
    <Helmet
      title="Home Page"
      meta={[
        { name: 'description', content: 'A React.js Boilerplate application homepage' },
      ]}
    />
    <div>
      <CenteredSection>
        <HealthDataChartPane />
      </CenteredSection>
      <Section>
        <HealthDataTable />
      </Section>
    </div>
  </article>
);

export default Dashboard;
