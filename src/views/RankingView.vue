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
</template>

<script setup lang='ts'>
import LotteryShop from '../components/ranking/LotteryShop.vue'

</script>

<style scoped>

</style>
