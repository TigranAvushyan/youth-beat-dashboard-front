import { FC, useEffect, useRef } from 'react';
import { Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';

interface Props {}
export const YMapTigran: FC<Props> = ({}) => {
  const ymaps = useYMaps(['Map']);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });
    const icon = ymaps.templateLayoutFactory.createClass(
      `<div style="background: black; color: white">23</div>`
    );

    // ymaps.borders
    //   .load('RU', {
    //     lang: 'ru',
    //     quality: 1,
    //   })
    //   .then(function (geojson) {
    //     const regions = ymaps.geoQuery(geojson);
    //     regions
    //       .search('properties.iso3166 = "RU-IRK"')
    //       .setOptions('fillColor', '#ff001a');
    //     regions.addToMap(myMap);
    //   });
  }, [ymaps]);
  return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }} />;
};
