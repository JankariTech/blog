<template>
  <nav class="appbar">
    <button
      class="appbar--icon icon-button toggle-theme"
      title="Toggle Theme"
      @click="toggle"
    >
      <mdi-brightness-6 class="one-rem"/>
    </button>
    <div class="font-drop">
      <button class="appbar--icon icon-button toggle-font"
        title="Font Menu"
        @click="toggleFontMenu"
      >
        <mdi-format-font class="one-rem"/>
      </button>
      <div v-if="fontMenu" class="font-drop--menu">
        <button
          class="font-drop--menu--item"
          v-for="(item, index) in FONT_MAP"
          :key="index"
          :class="{ 'font-drop--menu--item--active': font === item.className}"
          @click="setFont(item.className)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
    <button class="appbar--icon icon-button to-github"
      title="GitHub Repository"
      @click="toGithub"
    >
      <mdi-github class="one-rem"/>
    </button>
  </nav>
</template>
<script setup>
import { ref, watch, onBeforeMount, computed } from "vue"
import useTheme from "@/composables/theme"
import useScreen from "@/composables/screen"
import getImageUrl from "@/helpers/images"

const { dark, toggle, font, setFont } = useTheme()
const { xs } = useScreen()

const jtSmallLogo = getImageUrl("../imgs/jt_logo_small.png")
const jtLogoWithName = getImageUrl("../imgs/jt_logo_with_name.png")
const jtLogoWithNameDark = getImageUrl("../imgs/jt_logo_with_name_dark.png")

const logo = computed(() => {
  return (dark.value) ? jtLogoWithNameDark : jtLogoWithName
})

const FONT_MAP = [
  { name: "Roboto", className: "font-roboto" },
  { name: "Poppins", className: "font-poppins" },
  { name: "Open Sans", className: "font-open-sans" },
  { name: "Lato", className: "font-lato" }
]

const fontMenu = ref(false)
const toggleFontMenu = () => {
  fontMenu.value = !fontMenu.value
}
watch(font, () => {
  document.body.classList.remove(...FONT_MAP.map(item => item.className))
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
  z-index: 998;
  position: sticky; top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: var(--appbar-height);
  padding: 0 1rem 0 4rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(221 221 221);

  &--logo-small {
    height: 35px;
    margin: 4px 4px 4px 20px;
  }

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
    border-radius: var(--default-border-radius);
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
