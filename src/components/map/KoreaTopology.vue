<template>
  <div ref="mapContainer"></div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {getLocationsCount} from "@/api/topology";
import {drawTopology} from "@/functions/topology";

const mapContainer = ref<HTMLElement | null>(null);
const seoul = ref(null)
const provinces = ref(['seoul','daegu'])


onMounted(() => {
  getLocationsCount().then(locationCounts => {
    drawTopology(mapContainer, locationCounts)
  }).then(()=> {
    const provinceElements = document.querySelectorAll('#path-seoul');
    console.log(provinceElements)
  })

});

</script>


<style scoped>
</style>
