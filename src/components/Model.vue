<template>
  <div class="fixed top-0 bottom-0 right-0 left-0 z-40" :class="{ 'pointer-events-none': !value }">
    <div
      class="bg-white top-0 bottom-0 right-0 left-0 absolute transition-opacity duration-500 ease-out"
      :class="[value ? 'opacity-80' : 'opacity-0']"
      @click="setValue(false)"
    ></div>
    <div
      class="bg-white absolute bottom-0 left-0 right-0 transition-all duration-200 ease-out"
      :style="[value ? '' : 'transform: translateY(100%)']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: Boolean,
  setValue: Function,
});
</script>

<style lang="scss" scoped></style>
