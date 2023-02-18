import { FC } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';
import { Chart } from '../chart/Chart';

export const Body: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <MapContainer />
      {/*<Chart option={} />*/}
    </div>
  );
};
