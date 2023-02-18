import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Button from '../UI/Button/Button';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';

type EChartsOption = echarts.EChartsOption;

interface IProps {
  option: EChartsOption;
}

export const Chart: FC<IProps> = ({ option }) => {
  const printRef = useRef<HTMLDivElement>(null);
  const download = async () => {
    const element = printRef.current;

    await handleDownloadPdf(element);
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      myChart.setOption(option);
    }
  }, [option]);

  return (
    <div>
      <Button onClick={download}>download</Button>
      <div ref={printRef}>
        <div ref={chartRef} style={{ height: 500 }}></div>
      </div>
    </div>
  );
};
