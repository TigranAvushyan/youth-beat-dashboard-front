import { createEvent, createStore } from 'effector';

export const createChart = () => {
  const setChartOptions = createEvent();
  const $chart = createStore([]).on(setChartOptions, (_, payload) => payload);
  return {
    setChartOptions,
    $chart,
  };
};
