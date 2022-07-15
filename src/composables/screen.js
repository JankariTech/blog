import { computed, ref } from "vue"

export default function useScreen () {
  const screenWidth = ref(window.innerWidth)

  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth
  })

  const xs = computed(() => screenWidth.value < 360)
  const sm = computed(() => screenWidth.value < 600 && screenWidth.value >= 360)
  const md = computed(() => screenWidth.value < 960 && screenWidth.value >= 600)
  const lg = computed(() => screenWidth.value < 1200 && screenWidth.value >= 960)
  const xl = computed(() => screenWidth.value >= 1200)

  return {
    screenWidth, xs, sm, md, lg, xl
  }
}
