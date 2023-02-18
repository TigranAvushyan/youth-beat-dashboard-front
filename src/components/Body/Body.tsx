import { FC, useRef } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';
import Button from '../UI/Button/Button';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';

export const Body: FC = () => {
  const div = useRef(null);
  const download = () => {
    handleDownloadPdf(div.current);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <Button type={'primary'} onClick={download}>
        скачать PDF
      </Button>
      <div ref={div}>
        <MapContainer />
      </div>
    </div>
  );
};
