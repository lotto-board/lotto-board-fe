<template>
  <va-card
      class="ma-4"
      color="info"
      text-color="primary"
      gradient
  >
    <va-card-title>
      <div class="va-h6">로또 가게 랭킹</div>
    </va-card-title>

  </va-card>

  <va-card class="ma-4" style="height: 50vh;" color="transparent">
    <lottery-shop></lottery-shop>
  </va-card>
  <va-card class="ma-4" color="info">
    <va-card-title>
      <div class="va-h6">시도별 당첨 수</div>
    </va-card-title>
  </va-card>
  <va-card class="ma-4">
    <va-card-block>
      <korea-topology></korea-topology>
    </va-card-block>
  </va-card>
</template>

<script setup lang='ts'>
import LotteryShop from '../components/ranking/LotteryShop.vue'
import KoreaTopology from "@/components/map/KoreaTopology.vue";

</script>

<style scoped>

</style>
