<template>
  <div>
    <TheAppBar />
    <div class="content">
      <router-view />
      <button
        v-if="scrollButtonVisibility"
        class="scroll-to-top small-shadow"
        @click="scrollToTop"
      >
        <mdi-chevron-up />
      </button>
    </div>
  </div>
</template>
<script setup>
import { watch, onMounted, ref } from "vue"

import TheAppBar from "@/components/TheAppBar"
import useTheme from "@/composables/theme"
import useMarkdown from "@/composables/markdown"
import { readAssets } from "@/helpers/markdown"
import { getPeekInfoForModules } from "./helpers/markdown"

const { dark } = useTheme()
const { setModules } = useMarkdown()

watch(dark, () => {
  document.body.toggleAttribute("theme-dark")
})

const { fileModules } = readAssets()

setModules(getPeekInfoForModules(fileModules))

const scrollButtonVisibility = ref(false)

onMounted(() => {
  window.addEventListener("scroll", onScroll)
})

const onScroll = (e) => {
  if (typeof window === "undefined") return
  const top = window.pageYOffset || e.target.scrollTop
  scrollButtonVisibility.value = top > 150
}

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
}
</script>
<style lang="scss">
@import "styles/util";
@import "styles/variables";
@import "styles/colors";
@import "styles/scrollbar";
@import "styles/app";
</style>
