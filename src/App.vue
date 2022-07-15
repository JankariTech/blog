<template>
  <div>
    <TheAppBar />
    <TheSideBar v-if="$route.name !== '404'" />
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
import TheSideBar from "@/components/TheSideBar"
import useTheme from "@/composables/theme"
import useMarkdown from "@/composables/markdown"
import { readAssets, prepareSidebarList } from "@/helpers/markdown"

const { dark } = useTheme()
const { setList, setModules, setSidebarList } = useMarkdown()

watch(dark, () => {
  document.body.toggleAttribute("theme-dark")
})

const { filePaths, fileModules } = readAssets()

setList(filePaths)
setModules(fileModules)
setSidebarList(prepareSidebarList())

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
