<template>
  <div class="text-center relative flex items-center p-2">
    <!-- 左侧 -->
    <div class="flex items-center relative cursor-pointer hover:bg-gray-100 rounded px-2 py-1 mx-1 text-sm">
      <span class=" text-gray-600 font-light">{{ cityName }}</span>
      <Icon icon="carbon:chevron-down" class="inline-block text-gray-400" />
      <select name="" id="" class="absolute left-0 right-0 top-0 bottom-0 opacity-0" @change="(e)=>{console.log(e.target);changeCity(e.target.value)}">
        <option v-for="item in cities" :value="item[0]">{{ item[1].name }}</option>
      </select>
    </div>

    <!-- Logo -->
    <div class="flex-auto"></div>
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-light text-lg text-gray-700 select-none"
      @click="setAbout(true)"
    >
      <Logo />
    </div>

    <!-- 右侧 -->
    <router-link to="login">
      <div class="p-2 hover:bg-gray-100 hover:text-gray-700 rounded cursor-pointer mx-1">
      <Icon icon="carbon:user-avatar" class="text-lg leading-none text-gray-500" />
    </div>
    </router-link>
    <div class="p-2 hover:bg-gray-100 hover:text-gray-700 rounded cursor-pointer mx-1" @click="setSearch(true)">
      <Icon icon="carbon:search" class="text-lg leading-none text-gray-500" />
    </div>
    <div
      class="p-2 hover:bg-gray-100 hover:text-gray-700 rounded cursor-pointer mx-1"
      @click="() => emitter.emit('location', 'test')"
    >
      <Icon icon="carbon:map" class="text-lg leading-none text-gray-500" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { emitter } from '@/utils/event';
import { setAbout, setSearch, city, cities, cityName, changeCity } from '@/utils/store';
import Logo from '@/components/Logo.vue';
</script>

<style lang="scss" scoped></style>
