<template>
  <div class="app">
    <toggle-sidebar v-if="$route.name !== '404'" />
    <div class="company-name">
      <a href="/" title="Blog Home">
        <img :src="(dark) ? jtLogoWithNameDark : jtLogoWithName"  alt="Sidebar Logo" />
      </a>
    </div>
    <TheSideBar v-if="$route.name !== '404'" />
    <main class="content">
      <TheAppBar />
      <router-view />
    </main>
    <button
      v-if="scrollButtonVisibility"
      class="scroll-to-top small-shadow"
      @click="scrollToTop"
    >
      <mdi-chevron-up />
    </button>
  </div>
</template>
<script setup>
import { watch, onMounted, ref } from "vue"

import TheAppBar from "@/components/TheAppBar"
import TheSideBar from "@/components/TheSideBar"
import ToggleSidebar from "@/components/ToggleSidebar"

import useTheme from "@/composables/theme"
import useMarkdown from "@/composables/markdown"
import { readAssets, prepareSidebarList } from "@/helpers/markdown"
import getImageUrl from "@/helpers/images"

const { dark } = useTheme()
const { setList, setModules, setSidebarList } = useMarkdown()

const jtLogoWithName = getImageUrl("../imgs/jt_name.png")
const jtLogoWithNameDark = getImageUrl("../imgs/jt_name_dark.png")


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
