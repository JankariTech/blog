import { useSidebarStore } from "@/store/sidebar"
import { storeToRefs } from "pinia"

export default function useSidebar () {
  const store = useSidebarStore()
  const { open } = storeToRefs(store)
  const { toggle, setSidebarState } = store
  return {
    open, toggle, setSidebarState
  }
}
