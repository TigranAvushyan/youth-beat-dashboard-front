import { FC, useEffect, useState } from 'react';
import { Map, Placemark, useYMaps, YMaps } from '@pbe/react-yandex-maps';
import { YMapTigran } from './YMapTigran';

export const LoginPage: FC = ({}) => {
  const [activePortal, setActivePortal] = useState(false);

  return (
    <YMaps query={{ load: 'package.full' }}>
      <YMapTigran />
    </YMaps>
  );
};
