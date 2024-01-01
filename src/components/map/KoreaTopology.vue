<template>
  <div ref="mapContainer"></div>
</template>

<script setup lang="ts">

import * as topojson from 'topojson';
import * as d3 from 'd3'
import {onMounted, ref} from "vue";

const mapContainer = ref<HTMLElement | null>(null);


onMounted(() => {
  // D3 코드 실행
  const width = 1200;
  const height = 800;

  const svg = d3.select(mapContainer.value)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

  // TopoJSON 파일 로딩 및 토폴로지 맵 생성
  d3.json('/2018_korea_topo_simple.json').then(function (korea) {
    let feature = topojson.feature(korea, korea.objects.skorea_provinces_2018_geo);
    const features = feature.features;

    const bounds = d3.geoBounds(feature);
    const center = d3.geoCentroid(feature);

    const distance = d3.geoDistance(bounds[0], bounds[1]);
    const scale = height / distance / Math.sqrt(2) * 1.2;


    console.log("center", center);
    console.log("scale", scale);


    // 투영 설정 (예: 원근 투영 사용)
    // const projection = d3.geoIdentity().fitSize([width, height], topojson.mergeArcs(korea, korea.objects.skorea_provinces_2018_geo.geometries));
    const projection = d3.geoMercator()
        .translate([width / 4, height / 2]);
    // 패스 생성기
    const pathGenerator = d3.geoPath().projection(projection);

    projection.scale(scale).center(center);

    // https://bost.ocks.org/mike/map/
    // 지형 요소를 SVG에 추가
    svg.selectAll('path')
        .data(features)
        .enter()
        .append('path')
        .attr('d', pathGenerator)
        .style('fill', 'gray');
  });
});
</script>


<style scoped>

</style>
