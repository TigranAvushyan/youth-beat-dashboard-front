import { FC } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import { Map } from './Map';

export const MapContainer: FC = () => {
  return (
    <YMaps query={{ load: 'package.full' }}>
      <Map />
    </YMaps>
  );
};
