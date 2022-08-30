<template>
  <div class="blog" v-if="peekData">
    <HeadSection :peek="peekData" />
    <div class="blog--content">
      <ContentInfo />
      <ContentData :data="content" />
      <ContentSidebar :toc="toc" />
    </div>
    <div class="blog--footer">
      <hr>
      <div class="title">
        🎉 Thank you for reading the blog!
      </div>

      <div class="subtitle">
        Please, come back to us for more quality content. 👋
      </div>
    </div>
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

const { currentRoute } = useRouter()
const { modules } = useMarkdown()

const content = ref(null)
const toc = ref(null)
const peekData = ref(null)

onMounted(() => {
  loadMarkdown()
})

watch(currentRoute, () => {
  loadMarkdown()
})

const loadMarkdown = () => {
  let sTitle
  if (currentRoute.value.params.series) {
    sTitle = decodeURIComponent(currentRoute.value.params.series.toString())
  }
  const title = decodeURIComponent(currentRoute.value.params.name.toString())

  const module = modules.value.find(item => item.meta.title === title && item.meta.seriesTitle === sTitle)

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
    margin-top: 2rem;
    margin-inline: auto;
    max-width: 1550px;
    padding-inline: 1rem;

    @media only screen and (max-width: (960px)) {
      flex-direction: column-reverse;
    }
  }
  &--footer {
    padding: 2rem;
    hr {
      margin-bottom: 2rem;
    }
    text-align: center;
    .title { font-size: 2rem }
    .subtitle { font-size: 1.2rem }
  }
}
</style>
