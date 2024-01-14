import * as d3 from 'd3';
import * as topojson from "topojson";
import type {Ref, UnwrapRef} from "vue";
import ObjectUtil from '@/utils/objectUtil.js';

const topologyConstants = ObjectUtil.getAndFreeze({
    jsonFilePath: '/2018_korea_topo_simple.json',
    koreanProvinces: {
        "서울": "seoul",
        "부산": "busan",
        "대구": "daegu",
        "인천": "incheon",
        "광주": "gwangju",
        "대전": "daejeon",
        "울산": "ulsan",
        "세종": "sejong",
        "경기": "gyeonggi-do",
        "강원": "gangwon-do",
        "충북": "chungcheongbuk-do",
        "충남": "chungcheongnam-do",
        "전북": "jeollabuk-do",
        "전남": "jeollanam-do",
        "경북": "gyeongsangbuk-do",
        "경남": "gyeongsangnam-do",
        "제주": "jeju-do"
    },
    blueTones: [
        "#9ec8e6", "#afd7ff", "#bfe6ff", "#cfe3ff",
        "#9ddddd", "#afd9f4", "#cfe4f7", "#dff5ff",
        "#9db9c8", "#aed6e9", "#bfd9f7", "#dfeaff",
        "#78aecb", "#89c4f5", "#9dc9f5", "#beddff",
        "#6daacc"  // 추가된 컬러
    ]
})

export const drawTopology = (mapContainer: Ref<UnwrapRef<HTMLElement | null>>, locationCounts: Array<Object>) => {
    // D3 코드 실행
    const width = 1200;
    const height = 800;

    const svg = d3.select(mapContainer.value)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'map')
    ;

    const mouseOver = function (d: any) {
        d3.selectAll(".province")
            .transition()
            .duration(200)
            .style("opacity", .5)
        d3.select(this)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "black")

        tooltip
            .style("opacity", 1)
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
    }

    const mouseLeave = function (d: any) {
        d3.selectAll(".province")
            .transition()
            .duration(200)
            .style("opacity", .8)
        d3.select(this)
            .transition()
            .duration(200)
            .style("stroke", "transparent")

        tooltip
            .style("opacity", 0)
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }

    const tooltip = d3.select(mapContainer.value)
        // https://d3-graph-gallery.com/graph/interactivity_tooltip.html#template
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "absolute")
        .style("z-index", "10")
    ;


    // count
    const provinceCount = {};

    for (const key in topologyConstants.koreanProvinces) {
        if (Object.prototype.hasOwnProperty.call(topologyConstants.koreanProvinces, key) && Object.prototype.hasOwnProperty.call(locationCounts, key)) {
            provinceCount[topologyConstants.koreanProvinces[key]] = {
                korean: key,
                english: topologyConstants.koreanProvinces[key],
                count: locationCounts[key]
            };
        }
    }

    let index = 0

    // TopoJSON 파일 로딩 및 토폴로지 맵 생성
    d3.json(topologyConstants.jsonFilePath)
        .then((korea: any) => {
            const feature = topojson.feature(korea, korea.objects.skorea_provinces_2018_geo);
            const features = feature.features;

            const bounds = d3.geoBounds(feature);
            const center = d3.geoCentroid(feature);

            const distance = d3.geoDistance(bounds[0], bounds[1]);
            const scale = height / distance / Math.sqrt(2) * 1.3;

            // 투영 설정 (예: 원근 투영 사용)
            // const projection = d3.geoIdentity().fitSize([width, height], topojson.mergeArcs(korea, korea.objects.skorea_provinces_2018_geo.geometries));
            const projection = d3.geoMercator()
                .translate([width / 2, height / 2]);
            // 패스 생성기
            const pathGenerator = d3.geoPath().projection(projection);

            projection.scale(scale).center(center);


            const mouseMove = function (d: any) {
                const provinceCountElement = provinceCount[d.target.id.toLowerCase()];
                const coords = d3.pointer(d);
                tooltip
                    .html(`${provinceCountElement.korean}<br>${provinceCountElement.count}`)
                    .style("left", (coords[0] + 30) + "px")
                    .style("top", (coords[1] + 30) + "px")
            }
            const provinces = new Array<string>();

            // https://bost.ocks.org/mike/map/
            // 지형 요소를 SVG에 추가
            svg.selectAll('path')
                .data(features)
                .enter()
                .append('path')
                .attr('d', pathGenerator)
                .attr('class', (d) => 'province')
                .attr('id', (d: any) => {
                    provinces.push(d.properties.name_eng);
                    return d.properties.name_eng;
                })
                .attr("fill", (d) => topologyConstants.blueTones[index++])
                .style('stroke', 'transparent')
                .on('mouseover', mouseOver)
                .on('mouseleave', mouseLeave)
                .on('mousemove', mouseMove)
                .attr('ref', (d: any) => d.properties.name_eng.toLowerCase())
            ;

        });

}
