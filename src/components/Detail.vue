<template>
  <div class="p-6">
    <h1 class="text-lg">{{ name }}</h1>
    <div class="flex items-center text-gray-400 text-sm">
      <Icon icon="carbon:star-filled" :style="{ color }" v-for="item in rate" />
      <div class="mx-2" v-if="distance">·</div>
      <div>{{ distance }}</div>
    </div>
    <table class="mt-5 mb-3 text-sm">
      <tbody>
        <tr v-for="([key, value], index) in table" :key="index">
          <td class="text-right text-gray-500 py-2 pr-5">{{ key }}</td>
          <td class="py-2">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { parseShop } from '@/utils/parseShop';
import { Icon } from '@iconify/vue';

const props = defineProps({
  shop: Object,
});

const { shop, name, color, rate, pre, distance, table } = parseShop(props.shop);
</script>

<style lang="scss" scoped></style>
