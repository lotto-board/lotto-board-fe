<template>
  <va-card class="map-card">
    <va-card-title>
      <h6  class="va-h5">
        🎱당신 주위의 로또 🎱
      </h6>
    </va-card-title>
    <va-card-content>
      <div class="map-container">
        <naver-map
            class="naver-map"
            :mapOptions="mapOptions"
            :initLayers="initLayers"
            @onLoad="onLoadMap($event)"
        >
        </naver-map>
      </div>
    </va-card-content>
  </va-card>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NaverMap } from 'vue3-naver-maps'

const map = ref()
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
}
const initLayers = ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH']

const onLoadMap = (mapObject) => {
  map.value = mapObject
}
</script>

<style scoped>
.map-card {
  height: calc(100vh - 120px);
}

.map-container {
  width: 100%;
  height: calc(100vh - 230px);
}

.naver-map {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
