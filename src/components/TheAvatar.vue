<template>
  <img
    class="circle"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
  >
</template>
<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ""
  },
  size: {
    type: Number,
    default: 24
  }
})
</script>
<style>

</style>
