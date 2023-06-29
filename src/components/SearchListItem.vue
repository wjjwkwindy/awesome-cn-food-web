<template>
  <div class="py-2 border-b border-gray-100" @click="flyToShop">
    <h1 class="text-gray-600">{{ name }}</h1>
    <div class="text-gray-400 text-sm flex items-center">
      <div class="flex items-center">
        <Icon icon="carbon:star-filled" :style="{ color }" v-for="i in rate" />
      </div>
      <div class="mx-3">·</div>
      <div>人均：¥ {{ pre }}</div>
      <div class="mx-3" v-if="distance">·</div>
      <div>{{ distance }}</div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { emitter } from '@/utils/event';
import { setSearch, setCurrent } from '@/utils/store';
import { parseShop } from '@/utils/parseShop';

const props = defineProps({
  item: Object,
});

const { shop, name, color, rate, pre, distance } = parseShop(props.item);

const flyToShop = () => {
  setSearch(false);
  setCurrent(shop);
  emitter.emit('fly-to', {
    center: [shop.coordinates[0], shop.coordinates[1] - 0.009],
    zoom: 14,
    speed: 1.5,
  });
};
</script>

<style lang="scss" scoped></style>
