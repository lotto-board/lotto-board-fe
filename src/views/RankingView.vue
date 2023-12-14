<template>
  <va-card
      class="ma-4"
      color="white"
      gradient
  >
    <va-card-title>
      <div class="va-h5">로또 가게 랭킹</div>
    </va-card-title>
    <va-card-content>

    </va-card-content>
  </va-card>

  <va-card class="ma-4" style="height: 80vh;">
    <lottery-shop></lottery-shop>
  </va-card>
</template>

<script setup lang='ts'>
import LotteryShop from '../components/ranking/LotteryShop.vue'

</script>

<style scoped>

</style>
