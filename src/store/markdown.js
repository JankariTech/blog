import { defineStore } from "pinia"

export const useMarkdownStore = defineStore("markdown", {
  state: () => ({
    list: [],
    modules: {},
    sidebarList: {}
  }),
  actions: {
    setSidebarList (payload) {
      this.sidebarList = payload
    },
    setList (payload = []) {
      this.list = payload
    },
    setModules (payload = {}) {
      this.modules = payload
    }
  }
})
