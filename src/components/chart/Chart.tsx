import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Button from '../UI/Button/Button';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';
import { chartStore } from '../../store/chart';
import { useStore } from 'effector-react';

type EChartsOption = echarts.EChartsOption;

interface IProps {
  option: EChartsOption;
}

export const Chart: FC<IProps> = ({ option }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      myChart.setOption(option);
    }
  }, [option]);

  return (
    <div>
      <div ref={chartRef} style={{ height: 500 }}></div>
    </div>
  );
};
