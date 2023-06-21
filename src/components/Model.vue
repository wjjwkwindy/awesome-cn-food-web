<template>
  <div class="fixed top-0 bottom-0 right-0 left-0 z-40" :class="{'pointer-events-none':!value}">
    <div class="bg-white opacity-80 top-0 bottom-0 right-0 left-0 absolute" :class="{'opacity-0':!value}" @click="setValue(false)"></div>
    <div class="bg-white absolute bottom-0 left-0 right-0" :style="getStyle()">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: Boolean,
  setValue: Function,
});
console.log(props.setValue);

function getStyle() {
  if (props.value) {
    return '';
  } else {
    return 'transform: translateY(100%);';
  }
}
</script>

<style lang="scss" scoped></style>
