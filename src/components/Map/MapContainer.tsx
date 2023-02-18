import { FC, useEffect } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import { Map } from './Map';
import { mapStore } from '../../store/map/mapStore';

export const MapContainer: FC = () => {
  useEffect(() => {
    mapStore.fetchRegionsFx();
  }, []);
  return (
    <YMaps query={{ load: 'package.full' }}>
      <Map />
    </YMaps>
  );
};
