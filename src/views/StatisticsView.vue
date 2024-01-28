<template>
  <div class="dashboard">
    <number-ranking></number-ranking>
    <statistic-charts></statistic-charts>
  </div>
</template>

<script setup lang="ts">

import StatisticCharts from '@/components/statistic/StatisticCharts.vue';
import NumberRanking from '@/components/number/NumberRanking.vue';
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