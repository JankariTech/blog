import { defineStore } from "pinia"

export const useMarkdownStore = defineStore("markdown", {
  state: () => ({
    list: [],
    modules: {},
  }),
  actions: {
    setList (payload = []) {
      this.list = payload
    },
    setModules (payload = {}) {
      this.modules = payload
    }
  }
})
