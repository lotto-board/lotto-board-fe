<template>
  <div class="dashboard">
    <statistic-charts></statistic-charts>
    <number-ranking-table
      v-if="numberRankingData"
      :data="numberRankingData"
      title="로또 숫자 당첨 횟수 순위"
    ></number-ranking-table>
    <number-ranking-table
      v-if="bonusNumberRankingData"
      :data="bonusNumberRankingData"
      title="보너스 숫자 당첨 횟수 순위"
    ></number-ranking-table>
  </div>
</template>

<script setup lang="ts">
import StatisticCharts from '@/components/statistic/StatisticCharts.vue';
import { onBeforeMount, ref } from 'vue';
import NumberRankingTable from '@/components/number/NumberRankingTable.vue';
import type { NumberRanking } from '@/type/statistics';
import { getBonusNumberRanking, getNumberRanking } from '@/api/statistics';
import { useLoading } from '@/components/loading/useLoading';

const { showLoading, hideLoading } = useLoading();

const numberRankingData = ref<NumberRanking[]>();
const bonusNumberRankingData = ref<NumberRanking[]>();

const retrieveNumberRanking = async() => {
  const response = await getNumberRanking();
  if (!response) return;
  numberRankingData.value = response;
};

const retrieveBonusNumberRanking = async() => {
  const response = await getBonusNumberRanking();
  if (!response) return;
  bonusNumberRankingData.value = response;
};

onBeforeMount(async () => {
  showLoading();
  await retrieveNumberRanking();
  await retrieveBonusNumberRanking();
  hideLoading();
})

</script>

<style lang="scss">
.dashboard {
  .va-card {
    margin-bottom: 0 !important;
    &__title {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>