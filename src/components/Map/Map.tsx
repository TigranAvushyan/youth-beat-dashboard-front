import { useYMaps } from '@pbe/react-yandex-maps';
import { FC, useEffect, useRef } from 'react';

export const Map: FC = () => {
  const ymaps = useYMaps(['Map']);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 4,
    });
    ymaps.borders
      .load('RU', {
        lang: 'ru',
        quality: 1,
      })
      .then(function (geojson) {
        const regions = ymaps.geoQuery(geojson);
        regions
          // .setOptions('fillColor', 'rgba(255,255,255,0)')
          // .setOptions('strokeColor', 'rgba(255,255,255,0)')
          .search('properties.iso3166 = "RU-IRK"')
          .setOptions('fillColor', '#ff001a');
        // .addEvents('hover', function (e) {});
        regions.addToMap(myMap);
      });
  }, [ymaps]);
  return <div ref={mapRef} style={{ width: 500, height: 500 }} />;
};
