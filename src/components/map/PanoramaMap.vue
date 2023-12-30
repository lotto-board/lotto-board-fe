<template>
  <naver-map
      id="pano"
      :width="500"
      :height="400"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      :panoramaOptions="panoramaOptions"
      @onLoad="onLoadMap($event)">

  </naver-map>

</template>

<script setup lang="ts">
import {NaverMap} from 'vue3-naver-maps';
import {ref} from "vue";

const map = ref()
const mapOptions = {
  lat: 37.51347, // 지도 중앙 위도
  lng: 127.041722, // 지도 중앙 경도
  zoom: 15,
  pan: -135,
  tilt: 29,
  fov: 100,
  pov: {
    pan: -135,
    tilt: 29,
    fov: 100
  },
  flightSpot: true
}

const panoramaOptions = {
  lat: 37.51347, // 지도 중앙 위도
  lng: 127.041722, // 지도 중앙 경도
  pov: {
    pan: -135,
    tilt: 29,
    fov: 100
  },
  visible: true,
  aroundControl: true,
  minScale: 0,
  maxScale: 10,
  minZoom: 0,
  maxZoom: 4,
  flightSpot: true,
  logoControl: true
}
const initLayers = [
  "PANORAMA",
  "KOREAN"
];
const onLoadMap = (mapObject: Map<any, any>) => {
  map.value = mapObject
  // mapObject.setCenter
}


</script>

<style scoped>

</style>
