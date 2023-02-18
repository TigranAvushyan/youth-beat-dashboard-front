import { createMap } from './map/mapStore';
import { createFilter } from './filter/createFilter';
import { createEffect, forward, sample } from 'effector';
import { http } from '../lib/server/http';
import { toDropdownOptions } from '../lib/utils/toDropdownOptions';
import { createChart } from './chart';
import { IBarChart, IPage, IPieChart } from '../lib/types';

export const createDashboard = () => {
  const fetchRegionsFx = createEffect(async () => {
    const res = await http.get('/geography/regions');
    return toDropdownOptions(res.data);
  });

  const regionStore = createFilter();

  forward({ from: fetchRegionsFx.doneData, to: regionStore.setFilterOptions });
  sample({
    clock: fetchRegionsFx.doneData,
    fn: (source) => source[0].value,
    target: regionStore.setSelectedFilter,
  });

  const fetchFeatureFx = createEffect(async () => {
    const res = await http.get('/stats/features');
    return toDropdownOptions(res.data);
  });

  const featureStore = createFilter();

  forward({
    from: fetchFeatureFx.doneData,
    to: featureStore.setFilterOptions,
  });
  sample({
    clock: fetchFeatureFx.doneData,
    fn: (source) => source[0].value,
    target: featureStore.setSelectedFilter,
  });

  const mapStore = createMap();

  const fetchPieChartFx = createEffect(async (id: number) => {
    const res = await http.get<IPage<IPieChart>>(
      '/stats/feature-values/children',
      {
        params: {
          feature: id,
        },
      }
    );
    return res.data.results;
  });

  const fetchBarChartFx = createEffect(async (id: number) => {
    const res = await http.get<IPage<IBarChart>>('/stats/feature-values', {
      params: {
        feature: id,
      },
    });
    return res.data.results;
  });

  const pieChart = createChart<IPieChart>();

  sample({
    source: featureStore.$selectedFilter,
    fn: (source) => (source !== null ? source : 1),
    target: [mapStore.fetchRegionsFx, fetchPieChartFx, fetchBarChartFx],
  });

  forward({
    from: fetchPieChartFx.doneData,
    to: pieChart.setChartOptions,
  });

  const barChart = createChart<IBarChart>();

  forward({
    from: fetchBarChartFx.doneData,
    to: barChart.setChartOptions,
  });

  return {
    mapStore,
    featureStore,
    regionStore,
    fetchRegionsFx,
    fetchFeatureFx,
    pieChart,
    barChart,
    fetchPieChartFx,
    fetchBarChartFx,
  };
};

export const dashboard = createDashboard();
