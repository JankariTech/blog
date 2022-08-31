<template>
  <img
    class="circle"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    :style="bStyle"
  >
</template>
<script setup>
import { computed } from "vue"

const props = defineProps({
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
  },
  bordered: {
    type: Number,
    default: 0
  },
  borderStyle: {
    type: String,
    default: "solid"
  },
  borderColor: {
    type: String,
    default: "#000"
  }
})

const bStyle = computed(() => {
  if (props.bordered > 0) {
    if (props.bordered) {
      return `border: ${props.bordered}px ${props.borderStyle} ${props.borderColor}`
    }
  }
  return ""
})

</script>
