import { FC, useRef, useState } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';
import { BarChartContainer } from '../BarChartContainer/BarChartContainer';
import { PieChartContainer } from '../PieChartContainer/PieChartContainer';
import { LineChartContainer } from '../LineChartContainer/LineChartContainer';
import Button from '../UI/Button/Button';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';
import { useStore } from 'effector-react';
import { dashboard } from '../../store/dataStore';

export const Body: FC = () => {
  const downloadRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const download = async () => {
    setLoading(true);
    await handleDownloadPdf(downloadRef.current);

    setLoading(false);
  };

  const regionOptions = useStore(dashboard.regionStore.$filters);
  const region = useStore(dashboard.regionStore.$selectedFilter);

  const regionName = regionOptions.find((i) => i?.value === region);

  const featureOptions = useStore(dashboard.featureStore.$filters);
  const feature = useStore(dashboard.featureStore.$selectedFilter);

  const featureName = featureOptions.find((i) => i?.value === feature);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Общая статистика по России</h1>

      <div ref={downloadRef} style={{ padding: '0 30px 30px' }}>
        <MapContainer />
        <BarChartContainer />
        <h1 style={{ marginBottom: 20, color: '#8C64D8' }}>
          {regionName?.label}: статистика по региону
        </h1>
        <h2 style={{ marginBottom: 20, color: '#8C64D8' }}>
          {featureName?.label}: детализация
        </h2>
        <PieChartContainer />

        <h2 style={{ marginBottom: 20, color: '#8C64D8' }}>
          {featureName?.label}: динамика по годам
        </h2>
        <LineChartContainer />
      </div>

      <Button loading={loading} type={'primary'} onClick={download}>
        Скачать отчет в формате PDF
      </Button>
    </div>
  );
};
