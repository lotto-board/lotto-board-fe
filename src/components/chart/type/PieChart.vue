<template>
  <Pie :chart-options="chartOptions" :chart-data="props.chartData"></Pie>
</template>

<script setup lang='ts'>
import { Pie } from 'vue-chartjs'
import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import type { TChartOptions } from 'vue-chartjs/dist/types';
import type { TPieChartData } from '@/type/charts';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const props = defineProps<{
  chartData: TPieChartData
  chartOptions?: TChartOptions<'pie'>
}>();
</script>
