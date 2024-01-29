<template>
  <Line :chart-options="chartOptions" :chart-data="props.chartData"></Line>
</template>

<script setup lang='ts'>
import { Line } from 'vue-chartjs'
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import type { TChartOptions } from 'vue-chartjs/dist/types';
import type { TLineChartData } from '@/type/charts';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler);

const props = defineProps<{
  chartData: TLineChartData
  chartOptions?: TChartOptions<'line'>
}>();

</script>
