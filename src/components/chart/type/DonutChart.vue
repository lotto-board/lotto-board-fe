<template>
  <Doughnut :chart-options="chartOptions" :chart-data="props.chartData"></Doughnut>
</template>

<script setup lang='ts'>
import { Doughnut } from 'vue-chartjs'
import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import type { TChartOptions } from 'vue-chartjs/dist/types';
import type { TDonutChartData } from '@/type/charts';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  const props = defineProps<{
    chartData: TDonutChartData
    chartOptions?: TChartOptions<'doughnut'>
  }>();

</script>
