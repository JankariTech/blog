import { storeToRefs } from "pinia"
import { useMarkdownStore } from "@/store/markdown"

export default function useMarkdown () {
  const store = useMarkdownStore()
  const { list, sidebarList, modules } = storeToRefs(store)
  const { setList, setModules, setSidebarList } = store
  return {
    list, modules, sidebarList, setList, setModules, setSidebarList
  }
}
