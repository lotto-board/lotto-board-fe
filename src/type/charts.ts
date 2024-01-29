import type { TChartData as ChartData } from 'vue-chartjs/dist/types';

export type ColorThemes = {
  [key: string]: string
};

export type TPieChartData = ChartData<'pie'>;
export type TLineChartData = ChartData<'line'>;
export type TDonutChartData = ChartData<'doughnut'>;

export type TChartData = TLineChartData | TPieChartData | TDonutChartData;