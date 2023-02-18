import { Body } from "../../components/Body/Body";
import { Layout } from "../../components/layout/Layout";
import { FC } from 'react';
import { Analytics } from "../../components/Analytics/Analytics";

export const AnalyticsPage: FC = () => {
  return (
    <Layout>
      <Analytics />
    </Layout>
  );
};