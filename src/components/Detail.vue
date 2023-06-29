<!-- 详情弹窗 -->
<template>
  <div class="p-6">
    <h1 class="text-lg">{{ name }}</h1>
    <div class="flex items-center text-gray-400 text-sm">
      <Icon icon="carbon:star-filled" :style="{ color }" v-for="item in rate" />
      <div class="mx-2">·</div>
      <div>{{ coordinates.map((i) => i.toFixed(3)).join(', ') }}</div>
      <div class="mx-2" v-if="distance">·</div>
      <div>{{ distance }}</div>
    </div>
    <table class="mt-5 mb-3 text-sm">
      <tbody>
        <tr v-for="([key, value], index) in table" :key="index">
          <td class="text-right text-gray-500 py-2 pr-5 whitespace-nowrap">{{ key }}</td>
          <td class="py-2">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <a
        class="border border-gray-200 px-4 py-[0.35rem] rounded text-gray-400 text-sm mx-1"
        target="_blank"
        rel="noreferrer"
        :href="`https://uri.amap.com/marker?position=${location1}&name=${name}&coordinate=wgs84&callnative=1`"
      >
        高德地图
      </a>
      <a
        class="border border-gray-200 px-4 py-[0.35rem] rounded text-gray-400 text-sm mx-1"
        target="_blank"
        rel="noreferrer"
        :href="`http://api.map.baidu.com/marker?location=${location2}&title=${name}&content=${AppName}&output=html&coord_type=wgs84`"
      >
        百度地图
      </a>
    </div>
  </div>
</template>

<script setup>
import { AppName } from '@/utils/constants';
import { parseShop } from '@/utils/parseShop';
import { Icon } from '@iconify/vue';

const props = defineProps({
  shop: Object,
});

const { shop, coordinates, name, color, rate, pre, distance, table, location1, location2 } = parseShop(props.shop);
</script>

<style lang="scss" scoped></style>
