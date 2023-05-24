<template>
  <div class="blog" v-if="peekData">
    <HeadSection :peek="peekData" />
    <div class="blog--content">
      <ContentInfo />
      <ContentData :data="content" />
      <ContentSidebar :toc="toc" :tags="peekData.tags" />
    </div>
    <FootSection />
  </div>
</template>
<script setup>
import DOMPurify from "dompurify"
import useMarkdown from "../composables/markdown"
import { onMounted, watch, ref } from "vue"
import { useRouter } from "vue-router"
import { getContentHtml, getTableOfContent } from "../helpers/markdown"
import HeadSection from "../components/detail/HeadSection"
import ContentInfo from "../components/detail/ContentInfo"
import ContentData from "../components/detail/ContentData"
import ContentSidebar from "../components/detail/ContentSidebar"
import FootSection from "../components/detail/FootSection"
import { tracker } from "../helpers/tracker"

const { currentRoute, push } = useRouter()
const { modules } = useMarkdown()

const content = ref(null)
const toc = ref(null)
const peekData = ref(null)

onMounted(() => {
  loadMarkdown()
  tracker.trackPageView()
})

watch(currentRoute, () => {
  if (currentRoute?.value?.params?.name === undefined) {
    window.location.href = "/#/"
    push({ name: "Home" })
  } else {
    loadMarkdown()
  }
})

const loadMarkdown = () => {
  let sTitle
  if (currentRoute.value.params.series) {
    sTitle = decodeURIComponent(currentRoute.value.params.series.toString())
  }
  const title = decodeURIComponent(currentRoute.value.params.name.toString())

  const module = modules.value.find((item) => item.meta.title === title && item.meta.seriesTitle === sTitle)
  peekData.value = module.meta
  content.value = DOMPurify.sanitize(getContentHtml(module.raw))
  toc.value = getTableOfContent(module.raw)
  document.title = `Blog | ${peekData.value.title}`
}
</script>
<style lang="scss">
.blog {
  &--content {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
    margin-inline: auto;
    padding: 0.5rem 0.5rem 7rem;
    max-width: 1550px;

    @media only screen and (max-width: (960px)) {
      flex-direction: column-reverse;
    }
  }
}
</style>
