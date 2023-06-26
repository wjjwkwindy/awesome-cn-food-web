import { ref, computed } from 'vue';
import Fuse from 'fuse.js';
// import raw from "@/utils/data.json";
// import raw from "@/utils/data_food.json";

// const raw = await import(/* @vite-ignore */ `./data_food.json`);

// 原始数据
const data = await fetch('/data_food.json');
const raw = await data.json();

const geoData = Object.freeze({
  type: 'FeatureCollection',
  features: Object.values(raw).flatMap((i) => i.data.features),
});

export const geo = geoData;

// 搜索配置
export const shops = Object.freeze(
  geoData.features.map((i) => ({
    ...i,
    coordinates: i.geometry.coordinates,
  })),
);
export const fuseByName = new Fuse(shops, {
  includeScore: false,
  keys: [
    ['properties', '名称'],
    ['properties', 'shortname'],
  ],
});
export const searchResult = computed(() => {
  return fuseByName.search(searchString.value).map((i) => i.item);
});

export const about = ref(false);
export const search = ref(false);
export const searchString = ref('');

export const setAbout = (v) => (about.value = v);
export const setSearch = (v) => (search.value = v);
export const setSearchString = (str) => (searchString.value = str);
