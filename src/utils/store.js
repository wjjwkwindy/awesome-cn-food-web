import { ref } from 'vue';
// import raw from "@/utils/data.json";
// import raw from "@/utils/data_food.json";

// const raw = await import(/* @vite-ignore */ `./data_food.json`);

const data = await fetch('/data_food.json');
const raw = await data.json();

const geoData = Object.freeze({
  type: 'FeatureCollection',
  features: Object.values(raw).flatMap((i) => i.data.features),
});

export const geo = geoData;

export const about = ref(false);

export const setAbout = (v) => (about.value = v);
