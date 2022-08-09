import { storeToRefs } from "pinia"
import { useMarkdownStore } from "@/store/markdown"

export default function useMarkdown () {
  const store = useMarkdownStore()
  const { list, modules } = storeToRefs(store)
  const { setList, setModules } = store
  return {
    list, modules, setList, setModules
  }
}
