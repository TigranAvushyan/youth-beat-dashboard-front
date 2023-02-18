import { FC } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';
import { BarChartContainer } from '../BarChartContainer/BarChartContainer';

export const Body: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Общая статистика по регионам</h1>
      <MapContainer />
      <BarChartContainer />
    </div>
  );
};
