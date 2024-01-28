<template>
  <div class="dashboard">
    <statistic-charts></statistic-charts>
  </div>
</template>

<script setup lang="ts">

import StatisticCharts from '@/components/statistic/StatisticCharts.vue';
</script>

<style lang="scss" scoped>
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