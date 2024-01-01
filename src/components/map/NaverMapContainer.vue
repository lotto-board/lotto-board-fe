<template>
  <va-card class="map-card">
    <va-card-title>
      <h6 class="va-h5">
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
          <naver-marker
              v-for="(shop, index) in shopInfo"
              :key="index"
              :latitude="Number(shop.latitude)"
              :longitude="Number(shop.longitude)"
              @click="onClickMarker($event, shop)"
          ></naver-marker>
          <naver-info-window
              :marker="marker"
              :open="isOpen"
          >
            <va-card style="width: 350px; height: 250px">
              <va-card-actions
                  align="stretch"
              >
                <va-button size="small" @click="closeInfoWindow()">X</va-button>
              </va-card-actions>
              <va-card-content class="va-h6">{{ selectedShop.name }}</va-card-content>
              <va-card-content>전화번호: {{ selectedShop.phone_number }}</va-card-content>
              <va-card-content>주소: {{ selectedShop.address }}</va-card-content>
            </va-card>
          </naver-info-window>
        </naver-map>
      </div>
    </va-card-content>
  </va-card>

</template>

<script setup lang="ts">
import type { ShopInfoResponse } from '@/type/shop';
import { getTop100ShopInfo } from '@/api/shop';
import { onMounted, ref } from 'vue';
import { NaverInfoWindow, NaverMap, NaverMarker } from 'vue3-naver-maps';
import { useLoading } from "@/components/loading/useLoading";

const map = ref()
const shopInfo = ref<ShopInfoResponse[]>([]);

const marker = ref();
const selectedShop = ref<ShopInfoResponse>({
  name: '',
  phone_number: '',
  address: '',
});
const isOpen = ref(false);
const { showLoading, hideLoading } = useLoading();

const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 11,
}
const initLayers = ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH']

const retrieveShopInfo = async () => {
  const response = await getTop100ShopInfo();
  if (!response.length) return;

  shopInfo.value.push(...response);
}

const onLoadMap = (mapObject: any) => {
  map.value = mapObject
}

const onClickMarker = (markerObject, shop) => {
  isOpen.value = true;
  selectedShop.value = shop;
  marker.value = markerObject.overlay;
};

const closeInfoWindow = () => {
  isOpen.value = false;
};

onMounted(async () => {
  showLoading();
  await retrieveShopInfo();
  hideLoading();
})
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
