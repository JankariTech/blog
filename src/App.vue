<template>
  <div>
    <TheAppBar />
    <div class="content sharp-border">
      <div v-if="homeRoute"
        class="app-bar-space" />
      <router-view />
      <button
        v-if="scrollButtonVisibility"
        class="scroll-to-top circle small-shadow"
        @click="scrollToTop"
      >
        <mdi-chevron-up />
      </button>
    </div>
    <TheFooter />
  </div>
</template>
<script setup>
import { watch, onMounted, ref, computed, onBeforeMount } from "vue"

import TheAppBar from "./components/TheAppBar"
import TheFooter from "./components/TheFooter"
import useTheme from "./composables/theme"
import useMarkdown from "./composables/markdown"
import { readAssets, getPeekInfoForModules } from "./helpers/markdown"
import { useRouter } from "vue-router"
import { Storage } from "./helpers/storage"
import { FONT_MAP } from "./helpers/constants"

const { dark, setFont, setDark, font } = useTheme()
const { setModules } = useMarkdown()
const { currentRoute } = useRouter()

watch(dark, () => {
  document.body.toggleAttribute("theme-dark")
})

const scrollButtonVisibility = ref(false)

onMounted(() => {
  window.addEventListener("scroll", onScroll)
})

onBeforeMount(() => {
  const { fileModules } = readAssets()
  getThemeAndFont()
  setModules(getPeekInfoForModules(fileModules))
})

const getThemeAndFont = () => {
  const savedFontName = Storage.getFont()
  const fontValue = FONT_MAP
    .find(item => item.name === savedFontName)
    ?.class || FONT_MAP[0].class

  setFont(fontValue)
  setDark(Storage.getTheme() === "dark")
  document.body.classList.add(font.value)
}

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

const homeRoute = computed(() => {
  return ["Home", "Filter", "Sort"].includes(currentRoute?.value.name)
})
</script>
<style lang="scss">
@import "styles/util";
@import "styles/variables";
@import "styles/colors";
@import "styles/scrollbar";
@import "styles/app";
</style>
