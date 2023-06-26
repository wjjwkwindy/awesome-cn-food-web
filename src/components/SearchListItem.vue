<template>
  <div class="py-2 border-b border-gray-100">
    <h1 class="text-gray-600">{{ name }}</h1>
    <div class="text-gray-400 text-sm flex items-center">
      <div class="flex items-center">
        <Icon icon="carbon:star-filled" :style="{ color }" v-for="i in rate" />
      </div>
      <div class="mx-3">·</div>
      <div>人均：¥ {{ pre }}</div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { parseShop } from '@/utils/parseShop';

const props = defineProps({
  item: Object,
});

const { name, color, rate, pre } = parseShop(props.item);
</script>

<style lang="scss" scoped></style>
