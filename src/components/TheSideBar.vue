<template>
  <div class="sidebar">
    <div class="sidebar--content" v-if="sidebarList">
      <div v-for="(item, index) in Object.keys(sidebarList)"
        :key="index"
      >
        <div v-if="typeof (sidebarList[item]) === 'object'"
          class="sidebar--series"
        >
          <div class="sidebar--series--title">
            {{ item }}
          </div>
          <div class="sidebar--item"
            v-for="(subItem, subIndex) in Object.keys(sidebarList[item])"
            :key="subIndex"
          >
            <a
              :title="subItem.title"
              :href="`/#/blog/${encodeURIComponent(item)}/${encodeURIComponent(subItem)}`"
            >
              {{ subItem }}
            </a>
          </div>
        </div>
        <div v-else class="sidebar--item">
          <a
            :title="item"
            :href="`/#/blog/${encodeURIComponent(item)}`"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { watch, onMounted } from "vue"
import { gsap } from "gsap"
import useSidebar from "@/composables/sidebar"
import useMarkdown from "@/composables/markdown"
import useScreen from "@/composables/screen"

const { open, setSidebarState } = useSidebar()
const { sidebarList } = useMarkdown()
const { screenWidth, xl } = useScreen()

onMounted(async () => {
  await setSidebarState(xl.value)
  await sidebarAnimation(xl.value)
})

watch(open, (val) => {
  sidebarAnimation(val)
})

watch(screenWidth, (v) => {
  setSidebarState(xl.value)
})

const sidebarAnimation = (val) => {
  const $drawer = document.querySelector(".sidebar")
  const $drawerItems = document.querySelectorAll(".sidebar--item")
  const $seriesTitles = document.querySelectorAll(".sidebar--series--title")
  const tl = gsap.timeline()
  if (val) {
    tl.to($drawer, {
      width: "250px",
      minWidth: "150px",
      maxWidth: "250px",
      opacity: 1,
      ease: "circ.out",
      duration: 0.5
    })
      .to($seriesTitles, {
        opacity: 1,
        scale: 1,
        ease: "circ.out",
        duration: 0.3
      }, "<+=.2")
      .to($drawerItems, {
        opacity: 1,
        scale: 1,
        ease: "circ.out",
        duration: 0.3
      }, "<+=.05")
  } else {
    tl.to($drawer, {
      width: 0,
      minWidth: 0,
      maxWidth: 0,
      opacity: 0,
      ease: "power3.out",
      duration: 0.3
    })
      .to($drawerItems, {
        opacity: 0,
        scale: 0.5,
        ease: "power3.out",
        duration: 0.3
      }, 0)
      .to($seriesTitles, {
        opacity: 0,
        scale: 0.5,
        ease: "power3.out",
        duration: 0.3
      }, 0)
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/sidebar";
</style>
