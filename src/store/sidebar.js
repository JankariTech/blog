import { defineStore } from "pinia"

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    open: false
  }),
  actions: {
    toggle () {
      this.open = !this.open
    },
    setSidebarState (v) {
      this.open = v
    }
  }
})
