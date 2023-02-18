import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import EChartsReact from 'echarts-for-react';
import Button from './components/UI/Button/Button';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

type EChartsOption = echarts.EChartsOption;
const option: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
};

export const Chart: FC = () => {
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
  }, []);

  return (
    <div>
      <Button onClick={handleDownloadPdf}>download</Button>
      <div ref={printRef}>
        <div ref={chartRef} style={{ height: 500 }}></div>
      </div>
    </div>
  );
};
