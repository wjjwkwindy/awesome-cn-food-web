<!-- 搜索弹窗 -->
<template>
  <div class="h-screen w-screen grid relative" style="grid-template-rows: max-content auto">
    <div class="px-4 border-b border-gray-100">
      <input
        type="text"
        class="w-full px-3 py-4 outline-none"
        placeholder="搜索餐厅"
        :value="searchString"
        @input="
          (event) => {
            setSearchString(event.target.value);
          }
        "
      />
      <Icon
        icon="carbon:close"
        class="absolute top-0 right-0 m-4 text-2xl text-gray-500 hover:text-gray-800"
        @click="setSearch(false)"
      />
    </div>
    <div class="py-2 px-6">
      <div v-if="searchString">
        <div v-if="searchResult.length">
          <SearchListItem v-for="(item, index) in searchResult" :key="index" :item="item" />
        </div>
        <div v-else class="text-center text-gray-300 p-3 text-sm">无结果</div>
      </div>
      <div v-else class="text-center text-gray-300 p-3 text-sm">输入关键字搜索</div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { searchResult, searchString, setSearchString, setSearch } from '@/utils/store';
import SearchListItem from './SearchListItem.vue';
</script>

<style lang="scss" scoped></style>
