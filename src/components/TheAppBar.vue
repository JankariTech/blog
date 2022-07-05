<template>
  <nav class="appbar">
    <toggle-sidebar v-if="$route.name !== '404'" />
    <a href="/">
      <img class="appbar--logo" :src="dark ? jtLogoWithNameDark: jtLogoWithName" alt="" width="200" >
    </a>
    <div class="appbar--actions">
      <button class="appbar--icon icon-button toggle-theme" @click="toggle">
        <mdi-brightness-6 class="one-rem"/>
      </button>
      <div class="font-drop">
        <button class="appbar--icon icon-button toggle-font" @click="toggleFontMenu">
          <mdi-format-font class="one-rem"/>
        </button>
        <div v-if="fontMenu" class="font-drop--menu">
          <button
            class="font-drop--menu--item"
            v-for="(item, index) in FONT_MAP"
            :key="index"
            :class="{ 'font-drop--menu--item--active': font === item.class}"
            @click="setFont(item.class)"
          >
            {{ item.name }}
          </button>
        </div>
        <button class="appbar--icon icon-button to-github"
          @click="toGithub"
        >
          <mdi-github class="one-rem"/>
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, watch, onBeforeMount } from "vue"
import useTheme from "@/composables/theme"
import ToggleSidebar from "@/components/ToggleSidebar"

const { dark, toggle, font, setFont } = useTheme()

const jtLogoWithName = new URL("../imgs/jt_logo_with_name.png", import.meta.url).href
const jtLogoWithNameDark = new URL("../imgs/jt_logo_with_name_dark.png", import.meta.url).href

const FONT_MAP = [
  { name: "Roboto", class: "font-roboto" },
  { name: "Poppins", class: "font-poppins" },
  { name: "Open Sans", class: "font-open-sans" },
  { name: "Lato", class: "font-lato" }
]

const fontMenu = ref(false)
const toggleFontMenu = () => {
  fontMenu.value = !fontMenu.value
}
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
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--appbar-height);
  padding: 0 1rem;
  border-bottom: 1px solid rgb(221 221 221);

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

.font-drop {
  position: relative;

  &--menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.5rem;
    right: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    width: 100px;

    &--item {
      border: none;
      padding: 0.5rem;
      background: inherit;

      &--active {
        background-color: var(--jankaritech);
        pointer-events: none;
      }

      &:hover {
        background-color: #ccc;
      }
    }
  }
}

body[theme-dark] {
  .appbar {
    background: #313131;
    border-bottom: none;
  }

  .font-drop {
    &--menu {
      background-color: #171717;

      &--item {
        color: white;

        &:hover {
          background-color: #434343;
        }
      }
    }
  }
}
</style>
