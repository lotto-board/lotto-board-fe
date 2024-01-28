<template>
  <component :is='chartComponent' ref='chart' class='chart' :chart-options='chartOptions'
             :chart-data='data'></component>
</template>

<script setup lang='ts'>
import { computed, onMounted } from 'vue';
import { chartTypesMap, defaultConfig } from '@/components/chart/chart-config';
import type { TChartOptions } from 'vue-chartjs/dist/types';
import type { TChartData } from '@/type/charts';

const props = defineProps<{
  data: TChartData,
  options?: TChartOptions<'line' | 'bar' | 'bubble' | 'doughnut' | 'pie'>
  type: keyof typeof chartTypesMap
}>();

const chartComponent = computed(() => chartTypesMap[props.type]);

const chartOptions = computed(() => ({
  ...defaultConfig,
  ...props.options
}));

</script>

<style lang='scss' scoped>
.va-chart {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    height: 100%;
    width: 100%;
  }

  canvas {
    width: 100%;
    height: auto;
    min-height: 320px;
  }
}
</style>