<template>
  <div>
    <TheAppBar />
    <TheSideBar v-if="$route.name !== '404'" />
    <div class="content"
      :class="{
        'with-sidebar': open & $route.name !== '404',
        'without-sidebar': !open & $route.name !== '404'
      }"
    >
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { watch } from "vue"

import TheAppBar from "@/components/TheAppBar"
import TheSideBar from "@/components/TheSideBar"
import useSidebar from "@/composables/sidebar"
import useTheme from "@/composables/theme"
import useMarkdown from "@/composables/markdown"
import { readAssets, prepareSidebarList } from "@/helpers/markdown"

const { dark } = useTheme()
const { open } = useSidebar()
const { setList, setModules, setSidebarList } = useMarkdown()

watch(dark, () => {
  document.body.toggleAttribute("theme-dark")
})

const { filePaths, fileModules } = readAssets()

setList(filePaths)
setModules(fileModules)
setSidebarList(prepareSidebarList())
</script>
<style lang="scss">
@import "styles/util";
@import "styles/variables";
@import "styles/colors";
@import "styles/scrollbar";
@import "styles/app";
</style>
