<template>
  <div class="map pa-5" ref="test">
    <div class="overlay">
      <VaCollapse
          v-model="collapse"
          class="ma-4"
          header="랭킹 보기"
          icon="hotel_class"
          color="info"
      >
        <ranking-view></ranking-view>
      </VaCollapse>
    </div>
    <naver-map-container></naver-map-container>

  </div>

</template>

<script setup lang="ts">
import NaverMapContainer from "@/components/map/NaverMapContainer.vue";
import RankingView from "@/views/RankingView.vue";
import {ref} from "vue";

const collapse = ref(true)
</script>

<style scoped>
.overlay {
  right: 2lvh;
  position: fixed;
  z-index: 2;
}

</style>
