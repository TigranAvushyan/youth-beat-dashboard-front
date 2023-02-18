import { FC, useEffect, useMemo, useRef } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';
import Button from '../UI/Button/Button';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';
import { Chart } from '../chart/Chart';
import { useStore } from 'effector-react';
import { chartStore } from '../../store/chart';

export const Body: FC = () => {
  const div = useRef(null);
  const download = () => {
    handleDownloadPdf(div.current);
  };

  useEffect(() => {
    chartStore.fetchChartFx();
  }, []);

  const chartOpt = useStore(chartStore.$chart);
  const options = useMemo(() => {
    return {
      xAxis: {
        type: 'category',
        data: chartOpt.slice(0, 10).map((i, idx) => i.name),
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      series: [
        {
          data: chartOpt.slice(0, 10).map((i) => i.value),
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };
  }, [chartOpt]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <Button type={'primary'} onClick={download}>
        скачать PDF
      </Button>
      <div ref={div}>
        <Chart option={options} />
        <MapContainer />
      </div>
    </div>
  );
};
