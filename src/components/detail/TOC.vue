<template>
  <div>
    <div
      v-for="item in toc"
      :key="item.id"
      :style="{
        'padding-left': item.val * 0.2 + 'em',
        display: hidden ? 'none' : 'block',
      }"
      @click="scrollToHeading(item.id, $event)"
    >
      <mdi-menu-right class="mdi-circle" @click="hideNested($event)" />
      {{ item.title }}
      <TOC v-if="isArray(item.node)" :toc="item.node" :hidden="hidden" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

// TODO: hide with prop insted of -> hideNested

defineProps({
  toc: {
    type: Array
  },
  hidden: {
    type: Boolean
  }
})

const isArray = (c) => {
  return Array.isArray(c)
}

const scrollToHeading = (headingId, e) => {
  e.stopPropagation()
  const xpath = `//*[@id="${headingId}"]`
  const heading = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue
  if (heading) {
    const position = heading.getBoundingClientRect()
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 100,
      behavior: "smooth"
    })
  }
}

const hideNested = (e) => {
  e.preventDefault()
  e.stopPropagation()
  e = e.target
  while (e.tagName !== "DIV") {
    e = e.parentElement
  }
  e.childNodes.forEach((element) => {
    if (element.tagName === "DIV") {
      if (element.classList.length === 0) {
        element.style.display = "none"
        element.classList.add("hide")
      } else {
        element.style.display = "block"
        element.classList.remove("hide")
      }
    }
  })
}
</script>
<style scoped>
.hide {
  display: none;
}
</style>
