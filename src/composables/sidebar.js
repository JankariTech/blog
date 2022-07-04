import { useSidebarStore } from "@/store/sidebar"
import { storeToRefs } from "pinia"

export default function useSidebar () {
  const store = useSidebarStore()
  const { open } = storeToRefs(store)
  const { toggle } = store
  return {
    open, toggle
  }
}
