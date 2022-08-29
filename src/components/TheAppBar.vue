<template>
  <nav class="appbar sharp-border">
    <a href="/">
      <img class="appbar--logo" :src="dark ? jtLogoWithNameDark: jtLogoWithName" alt="" width="200" >
    </a>
    <div class="appbar--actions">
      <button class="appbar--icon icon-button toggle-theme" @click="toggle">
        <mdi-brightness-6 class="one-rem"/>
      </button>
      <DropMenu>
        <template #trigger>
          <button class="appbar--icon icon-button">
            <mdi-format-font class="one-rem"/>
          </button>
        </template>
        <template #drop>
          <div
            class="menu-drop-item"
            v-for="(item, index) in FONT_MAP"
            :key="index"
            :class="{ 'item-active': font === item.class}"
            @click="setFont(item.class)"
          >
            {{ item.name }}
          </div>
        </template>
      </DropMenu>
      <button class="appbar--icon icon-button to-github"
        @click="toGithub"
      >
        <mdi-github class="one-rem"/>
      </button>
    </div>
  </nav>
</template>
<script setup>
import DropMenu from "./DropMenu.vue"
import { watch, onBeforeMount } from "vue"
import useTheme from "@/composables/theme"

const { dark, toggle, font, setFont } = useTheme()

const jtLogoWithName = new URL("../imgs/jt_logo_with_name.png", import.meta.url).href
const jtLogoWithNameDark = new URL("../imgs/jt_logo_with_name_dark.png", import.meta.url).href

const FONT_MAP = [
  { name: "Lato", class: "font-lato" },
  { name: "Roboto", class: "font-roboto" },
  { name: "Poppins", class: "font-poppins" },
  { name: "Open Sans", class: "font-open-sans" }
]

watch(font, () => {
  document.body.classList.remove(...FONT_MAP.map(item => item.class))
  document.body.classList.add(font.value)
})
onBeforeMount(() => {
  document.body.classList.add(font.value)
})

const toGithub = () => {
  window.open("https://github.com/JankariTech/blog", "_blank")
}
</script>
<style lang="scss" scoped>
.appbar {
  z-index: 999;
  position: fixed;
  width: 100%;
  height: var(--appbar-height);
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(221 221 221);
  background-color: rgb(255 255 255 / 70%);
  backdrop-filter: blur(3px);

  &--icon {
    height: 2rem;
    width: 2rem;
  }

  &--actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

body[theme-dark] {
  .appbar {
    background-color: rgb(30 30 30 / 85%);
    border-bottom: none;
  }
}
</style>
