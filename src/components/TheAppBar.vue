<template>
  <nav class="appbar sharp-border">
    <a href="/">
      <img width="200"
        class="appbar--logo"
        alt="JankariTech Logo"
        :src="dark ? logoWithNameDark: logoWithName"
      >
    </a>
    <div class="appbar--actions">
      <button class="appbar--icon icon-button toggle-theme" @click="toggleTheme()">
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
import { watch } from "vue"
import useTheme from "../composables/theme"
import { FONT_MAP } from "../helpers/constants"
import getImageUrl from "../helpers/images"
import DropMenu from "./DropMenu.vue"
import { Storage } from "../helpers/storage"

const { dark, toggle, font, setFont } = useTheme()

const logoWithName = getImageUrl("jt_logo_with_name")
const logoWithNameDark = getImageUrl("jt_logo_with_name_dark")

watch(font, () => {
  document.body.classList.remove(...FONT_MAP.map(item => item.class))
  document.body.classList.add(font.value)
  Storage.saveFont(FONT_MAP.find(item => item.class === font.value).name)
})

const toggleTheme = () => {
  toggle()
  Storage.saveTheme(dark.value ? "dark" : "light")
}

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
  background-color: rgb(255 255 255 / 80%);
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
