import { ref, computed } from 'vue';
import Fuse from 'fuse.js';
import { useStorage } from '@vueuse/core';
// import raw from "@/utils/data.json";
// import raw from "@/utils/data_food.json";

// const raw = await import(/* @vite-ignore */ `./data_food.json`);

// 原始数据
const rawData = await fetch('/data_food.json');
const rawDataJSON = await rawData.json();

const geoData = Object.freeze({
  type: 'FeatureCollection',
  features: Object.values(rawDataJSON).flatMap((i) => i.data.features),
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

export const data = computed(() => rawDataJSON[city.value]); // 当前城市数据
export const city = useStorage('food-cn-city', 'chengdu'); // 当前城市
export const cityName = computed(() => data.value.name); // 当前城市中文名
export const cities = Object.entries(rawDataJSON); // 所有城市

export const about = ref(false); // 关于页面
export const search = ref(false); // 搜索页面
export const searchString = ref(''); // 搜索字符串
export const loc = ref(null); // 当前定位位置
export const current = ref(null); // 当前选中的店铺

export const setAbout = (v) => (about.value = v);
export const setSearch = (v) => (search.value = v);
export const setSearchString = (str) => (searchString.value = str);
export const setLoc = (v) => (loc.value = v);
export const setCurrent = (v) => (current.value = v);
export const changeCity = (v) => (city.value = v);
