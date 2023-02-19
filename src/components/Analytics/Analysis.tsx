import { FC, useRef, useState } from 'react';
import { AnalyticBlock } from '../AnalyticBlock/AnalyticBlock';
import { DropDown } from '../DropDown/DropDown';
import styles from './Analysis.module.css';
import { useStore } from 'effector-react';
import { dashboard } from '../../store/dataStore';
import Button from '../UI/Button/Button';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';

export const Analysis: FC = () => {
  const array = useStore(dashboard.$analysis);
  const options = useStore(dashboard.regionStore.$filters);
  const selected = useStore(dashboard.regionStore.$selectedFilter);

  const downloadRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const download = async () => {
    setLoading(true);
    await handleDownloadPdf(downloadRef.current);

    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <div className={styles.drop}>
        <DropDown
          options={options}
          value={selected}
          onChange={dashboard.regionStore.setSelectedFilter}
        />

        <Button
          style={{ marginLeft: 5 }}
          loading={loading}
          type={'primary'}
          onClick={download}
        >
          Скачать отчет в формате PDF
        </Button>
      </div>
      <div ref={downloadRef} style={{ padding: 30 }}>
        <div className={styles.blocks}>
          {array &&
            array.map((e, index) => (
              <AnalyticBlock
                key={e.text}
                status={e.status}
                text={e.text}
                plot={e.plot}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
