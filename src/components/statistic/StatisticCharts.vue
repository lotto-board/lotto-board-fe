<template>
  <div class="grid grid-cols-12 gap-6">
    <va-card class="col-span-12 lg:col-span-6" v-if="recentPrizeLineChartData">
      <va-card-title>
        <h1>최근 당첨금액 추이</h1>
      </va-card-title>
      <va-card-content>
        <lotto-chart :data="recentPrizeLineChartData.value" type="line"></lotto-chart>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12 sm:col-span-6 lg:col-span-3" v-if="lotteryStatPieChartData">
      <va-card-title>
        <h1>숫자 구간별 확률 차트</h1>
      </va-card-title>
      <va-card-content>
        <lotto-chart :data="lotteryStatPieChartData.value" type="pie"></lotto-chart>
      </va-card-content>
    </va-card>
    <va-card class="col-span-12 sm:col-span-6 lg:col-span-3" v-if="lotteryBonusStatDonutChartData">
      <va-card-title>
        <h1>보너스 숫자 당첨 확률 차트</h1>
      </va-card-title>
      <va-card-content>
        <lotto-chart :data="lotteryBonusStatDonutChartData.value" type="donut"></lotto-chart>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue';
import { useLoading } from '@/components/loading/useLoading';
import { getBonusNumberStatistics, getRecentPrize, getStatistics } from '@/api/statistics';
import * as ChartUtils from '@/utils/chart-utils';
import LottoChart from '@/components/chart/LottoChart.vue';
import { useChartData } from '@/components/chart/composable/useChartData';

const { showLoading, hideLoading } = useLoading();

const lotteryStatPieChartData = ref();
const lotteryBonusStatDonutChartData = ref();
const recentPrizeLineChartData = ref();

const retrieveStatistics = async () => {
  const response = await getStatistics();
  if (!response) return;
  const convertedData = ChartUtils.createNumberStatPieChartData(response);
  lotteryStatPieChartData.value = useChartData(convertedData);
};

const retrieveRecentPrize = async () => {
  const response = await getRecentPrize();
  if (!response) return;
  const convertedData = ChartUtils.createRecentPrizeLineChartData(response);
  recentPrizeLineChartData.value = useChartData(convertedData, 0.6);
};

const retrieveBonusStatistics = async() => {
  const response = await getBonusNumberStatistics();
  if (!response) return;
  const convertedData = ChartUtils.createBonusStatDonutChartData(response);
  lotteryBonusStatDonutChartData.value = useChartData(convertedData);
}

onBeforeMount(async () => {
  showLoading();
  await retrieveStatistics();
  await retrieveRecentPrize();
  await retrieveBonusStatistics();
  hideLoading();
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>