import { defineStore } from "pinia"

export const useMarkdownStore = defineStore("markdown", {
  state: () => ({
    modules: {}
  }),
  actions: {
    setModules (payload = {}) {
      this.modules = payload
    }
  }
})
