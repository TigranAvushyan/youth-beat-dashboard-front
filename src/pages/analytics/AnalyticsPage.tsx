import { Layout } from '../../components/layout/Layout';
import { FC } from 'react';
import { Analysis } from '../../components/Analytics/Analysis';

export const AnalyticsPage: FC = () => {
  return (
    <Layout>
      <Analysis />
    </Layout>
  );
};
