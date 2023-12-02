<template>
  <div style="width: 1000px; height: 1000px">
    <naver-map
        style="width: 100%; height: 100%"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @onLoad="onLoadMap($event)"
    >
    </naver-map>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NaverMap } from 'vue3-naver-maps'

const map = ref()
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
  zoomControl: false,
  zoomControlOptions: { position: 'TOP_RIGHT' }
}
const initLayers = ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH']

const onLoadMap = (mapObject) => {
  map.value = mapObject
}
</script>
