import { FC } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';

export const Body: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <MapContainer />
    </div>
  );
};
