import React from 'react';
import Helmet from 'react-helmet';
import HealthDataChartPane from '../../containers/HealthDataChartPane';
import HealthDataTable from '../../containers/HealthDataTable';
import CenteredSection from '../CenteredSection';
import Section from '../Section';
import Toolbar from '../Toolbar';

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
        <Toolbar />
      </CenteredSection>
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
