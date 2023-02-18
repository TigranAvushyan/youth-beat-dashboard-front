import { useYMaps } from '@pbe/react-yandex-maps';
import { FC, useEffect, useRef, useState } from 'react';
import { useStore } from 'effector-react';
import { mapStore } from '../../store/map/mapStore';
import { handleDownloadPdf } from '../../lib/utils/downloadPdf';
import Button from '../UI/Button/Button';

const getHint = (name: string, value: number) => {
  return `<div  style="font-size: 1.4em; padding: 3px">${name}: <span>${value}</span></div>`;
};

export const Map: FC = () => {
  const ymaps = useYMaps(['Map']);
  const mapRef = useRef(null);

  const regions = useStore(mapStore.$regions);
  const [allRegions, setAllRegions] = useState<any>();
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 4,
    });
    setMap(myMap);
    ymaps.borders
      .load('RU', {
        lang: 'ru',
        quality: 1,
      })
      .then(function (geojson) {
        setAllRegions(ymaps.geoQuery(geojson));
      });
  }, [ymaps]);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map && allRegions && regions.length) {
      regions.forEach((i) => {
        allRegions
          .search(`properties.iso3166 = "${i.region_code}"`)
          .setOptions('fillColor', i.color + 'B2')
          .setOptions('strokeColor', i.color)
          .setOptions('strokeWidth', 2)
          .setProperties('hintContent', getHint(i.region_name, i.value));
      });
      allRegions.addToMap(map);
    }
  }, [map, regions]);

  return (
    <div>
      <div ref={hintRef} style={{ display: 'none', position: 'absolute' }} />
      <div ref={mapRef} style={{ width: 500, height: 500 }} />
    </div>
  );
};
