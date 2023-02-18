import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Button from '../UI/Button/Button';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

type EChartsOption = echarts.EChartsOption;

interface IProps {
  option: EChartsOption;
}

export const Chart: FC<IProps> = ({ option }) => {
  const printRef = useRef<HTMLDivElement>(null);
  const handleDownloadPdf = async () => {
    const element = printRef.current;

    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('print.pdf');
    }
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
      <Button onClick={handleDownloadPdf}>download</Button>
      <div ref={printRef}>
        <div ref={chartRef} style={{ height: 500 }}></div>
      </div>
    </div>
  );
};
