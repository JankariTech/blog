import { defineStore } from "pinia"

export const useThemeStore = defineStore("theme", {
  state: () => ({
    dark: false, // default to light mode
    font: "font-roboto" // default to roboto style
  }),
  actions: {
    toggle () {
      this.dark = !this.dark
    },
    setFont (font) {
      this.font = font
    },
    setDark (isDark) {
      this.dark = isDark
    }
  }
})
