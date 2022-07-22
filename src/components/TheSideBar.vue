<template>
  <aside class="sidebar">
    <!-- sidebar top space for logo and sidebar toggle button -->
    <div class="sidebar--top-space" />
    <div class="sidebar--content" v-if="sidebarList">
      <div v-for="(item, index) in Object.keys(sidebarList)"
        :key="index"
      >
        <div v-if="typeof (sidebarList[item]) === 'object'"
          class="series"
        >
            <div class="series--title s-anim">{{ item }}</div>
            <div
              class="series--blog blog s-anim"
              :title="item"
              v-for="(subItem, subIndex) in Object.keys(sidebarList[item])"
              :key="subIndex"
              @click="push(`/blog/${encodeURIComponent(item)}/${encodeURIComponent(subItem)}`)"
            >
              {{ subItem }}
            </div>
        </div>
        <div
          v-else class="blog s-anim"
          @click="push(`/blog/${encodeURIComponent(item)}`)"
          :title="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { watch, onMounted } from "vue"
import { useRouter } from "vue-router"
import { gsap } from "gsap"
import useSidebar from "@/composables/sidebar"
import useMarkdown from "@/composables/markdown"
import useScreen from "@/composables/screen"
import useTheme from "@/composables/theme"

const { open, setSidebarState } = useSidebar()
const { sidebarList } = useMarkdown()
const { screenWidth, xl, sm } = useScreen()
const {push} = useRouter()
const {dark} = useTheme()

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
  const $mainContent = document.querySelector("main.content")
  const $drawerItems = document.querySelectorAll(".s-anim")
  const $drawerImage = document.querySelector(".sidebar--image")
  let mainMargin
  if (sm.value) {
    mainMargin = "0"
  } else {
    mainMargin = "300"
  }
  const tl = gsap.timeline()
  if (val) {
    tl
      .to($drawer, {
        width: "300",
        minWidth: "300",
        opacity: 1,
        ease: "circ.out",
        duration: .5
      })
      .to($mainContent, {
        marginLeft: mainMargin,
        ease: "circ.out",
        duration: .5
      }, "-=.5")
      .to($drawerImage, {
        scale: 1,
        ease: "circ.out",
        duration: .2
      }, "-=.3")
      .to($drawerItems, {
        x: 0,
        opacity: 1,
        ease: "ease.in",
        duration: .2,
        stagger: .03
      })
  } else {
    tl
      .to($drawerItems, {
        x: -20,
        opacity: 0,
        ease: "east.in",
        duration: .2,
      })
      .to($drawerImage, {
        scale: 0,
        ease: "power3.out",
        duration: .3
      }, "-=.1")
      .to($drawer, {
        width: "0",
        minWidth: "0",
        ease: "power3.out",
        duration: 0.4
      }, "-=.1")
      .to($mainContent, {
        marginLeft: "0",
        ease: "power3.out",
        duration: 0.4
      }, "-=.4")

  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/sidebar";
</style>
