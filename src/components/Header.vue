<template>
  <div class="text-center relative flex p-2">
    <!-- <div class="p-2">123</div> -->
    <div class="flex-auto"></div>
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-light text-lg text-gray-700 select-none"
      @click="setAbout(true)"
    >
      <Logo />
    </div>
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
import { setAbout, setSearch } from '@/utils/store';
import Logo from '@/components/Logo.vue';
</script>

<style lang="scss" scoped></style>
