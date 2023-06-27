<template>
  <div ref="mapContainer" class="h-full"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';
import { emitter } from '@/utils/event';
import { geo, setLoc } from '@/utils/store';
import { Color } from '@/utils/constants';

const mapContainer = ref(null);
let map = null;

onMounted(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY29zeXNub3ciLCJhIjoiY2xpd2x6dzk5MHUzZjNtcGkyOTE0cTIzMSJ9.TF8ijkLwfCEEahMwehCBuA';
  map = new mapboxgl.Map({
    container: mapContainer.value,
    // style: "mapbox://styles/mapbox/streets-v12",
    style: 'mapbox://styles/cosysnow/cliwrj94m005001qqetun8u71',
    center: [104.063132, 30.580685],
    zoom: 9,
  });

  map.on('load', () => {
    map.addImage('#50C240', createColorPoint(80, 194, 64, 255)); // 绿色
    map.addImage('#F3AE1A', createColorPoint(255, 193, 7, 255)); // 橙色
    map.addImage('#C24740', createColorPoint(194, 71, 64, 255)); // 红色
    map.addImage('#BEBEBE', createColorPoint(125, 125, 125, 255)); // 灰色

    upadteMap();
  });

  // maxpbox 获取当前位置
  const geoControl = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
  });

  map.addControl(geoControl);

  emitter.on('location', (e) => {
    geoControl.trigger();
  });

  geoControl.on('geolocate', (e) => {
    setLoc([e.coords.longitude, e.coords.latitude]);
  });
});

// 创建颜色点
function createColorPoint(...color) {
  const d = 48;
  const r = d / 2;
  const r2 = r ** 2;
  const bytesPerPixel = 4;

  const data = new Uint8Array(d * d * bytesPerPixel);

  for (let x = 0; x < d; x++) {
    for (let y = 0; y < d; y++) {
      if ((x - r) ** 2 + (y - r) ** 2 >= r2) continue;

      const offset = (y * d + x) * bytesPerPixel;
      for (let b = 0; b < bytesPerPixel; b++) data[offset + b] = color[b];
    }
  }
  return { width: d, height: d, data };
}

// 渲染点位
function upadteMap() {
  map.addSource('source', {
    type: 'geojson',
    data: geo,
    cluster: true,
    clusterMaxZoom: 12,
    clusterRadius: 25,
  });

  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'source',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#d3cdc0',
      'circle-stroke-color': '#a59a83',
      'circle-stroke-width': 1,
      'circle-radius': 10,
    },
  });

  map.addLayer({
    id: 'clusters-count',
    type: 'symbol',
    source: 'source',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': ['get', 'point_count_abbreviated'],
      'text-size': 12,
      'text-allow-overlap': true,
    },
    paint: {
      'text-color': 'white',
    },
  });

  map.addLayer({
    id: 'layer',
    type: 'symbol',
    source: 'source',
    layout: {
      'icon-image': ['match', ['get', '评分']].concat(Object.entries(Color).flat(), 'black'),
      'icon-size': 0.25,
      'text-field': ['get', '简称'],
      'text-size': 12,
      'text-offset': [0, 0.5],
      'text-anchor': 'top',
      'icon-allow-overlap': true,
    },
    paint: {
      'text-color': '#7e6c56',
      'text-halo-color': '#fff',
      'text-halo-width': 1,
      'text-halo-blur': 0,
    },
  });
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
