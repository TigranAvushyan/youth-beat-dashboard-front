import { createStore } from 'effector';
import { createEffect } from 'effector';
import { http } from '../lib/server/http';

export const createChart = () => {
  const fetchChartFx = createEffect(async () => {
    const res = await http.get('/stats/feature-values?feature=1');
    return res.data;
  });
  const $chart = createStore([]).on(
    fetchChartFx.doneData,
    (_, payload) => payload
  );
  return {
    fetchChartFx,
    $chart,
  };
};

export const chartStore = createChart();
