import {FC, useEffect, useState} from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import { Map } from './Map';
import { mapStore } from '../../store/map/mapStore';
import { DropDown } from '../DropDown/DropDown';
import styles from './Map.module.css'

interface IProps {
  options: {id: string, label: string, value: string}[]
  filters: {id: string, label: string, value: string}[]
}

export const MapContainer: FC<IProps> = ({options, filters}) => {
  useEffect(() => {
    mapStore.fetchRegionsFx();
  }, []);

  const [values, setValues] = useState({region: 1, filter: 1})

  const getRegionStats = async () => {
    console.log('keke')
  }

  const getRegion = (id: number) => {
    setValues((prevValues) => ({...prevValues, region: id}))
    getRegionStats()
  }

  const getFilters = (id: number) => {
    setValues((prevValues) => ({...prevValues, filter: id}))
    getRegionStats()
  }




  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.filter}>
            {options &&
                <DropDown options={options} handleChange={getRegion} defaultValue='Регион' /> }
            {filters &&
                <DropDown options={filters} handleChange={getFilters} defaultValue='Признаки' /> }
          </div>
        </div>
        <div className={styles.mapContainer}>
          <YMaps query={{ load: 'package.full' }}>
            <Map />
          </YMaps>
        </div>
      </div>

  );
};
