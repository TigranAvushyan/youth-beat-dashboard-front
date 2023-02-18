import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styles from './Body.module.css';
import { MapContainer } from '../Map/MapContainer';
import { Chart } from '../chart/Chart';
import { BarChartContainer } from '../BarChartContainer/BarChartContainer';

export const Body: FC = () => {
  const [array, setArray] = useState([]);
  const [filters, setFilters] = useState([]);

  const fetchRegions = async () => {
    const response = await axios
      .get('http://78.140.241.174:8100/geography/regions')
      .then((res) => {
        const newArray = optionsToValues(res.data);
        setArray(res.data);
      });
  };

  const fetchFilters = async () => {
    const response = await axios
      .get('http://78.140.241.174:8100/stats/features')
      .then((res) => {
        optionsToValues(res.data);
        setFilters(res.data);
      });
  };

  function optionsToValues(options: any) {
    for (let i = 0; i < options?.length; i++) {
      options[i].label = options[i].name;
      options[i].value = options[i].id;
      delete options[i].name;
    }
  }

  useEffect(() => {
    fetchRegions();
    fetchFilters();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <MapContainer options={array} filters={filters} />
      {/* <Chart option={undefined} /> */}
      <BarChartContainer />
    </div>
  );
};
