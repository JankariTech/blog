<template>
  <div class="blog" v-if="peekData">
    <div class="blog--content">
      <BlogPeek
        :title="peekData.title"
        :authorAvatar="peekData.authorAvatar"
        :authorName="peekData.authorName"
        :authorLink="peekData.authorLink"
        :banner="peekData.banner"
        createdAt="June 2022, 07"
        :tags="peekData.tags"
        detailView
      />
      <div class="blog--content--data" v-html="content"></div>
    </div>
    <div class="blog--sidebar">
      <div class="blog--sidebar--wrapper">
        <div class="toc">Table of content</div>
        <div v-for="(item, index) in tableOfContent"
          :key="index"
          class="blog--sidebar--item"
          :class="`heading-${item.depth}`"
          @click="scrollToHeading(item.text)"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, watch, ref } from "vue"
import DOMPurify from "dompurify"
import { useRouter } from "vue-router"
import useMarkdown from "../composables/markdown"
import BlogPeek from "@/components/BlogPeek"
import { getContentHtml, getPeekDataFor, getTableOfContent } from "@/helpers/markdown"

const { currentRoute } = useRouter()
const { sidebarList } = useMarkdown()
let sourcePath

const content = ref(null)
const tableOfContent = ref(null)
const peekData = ref(null)

onMounted(() => {
  loadMarkdown()
})

const loadMarkdown = () => {
  const fileTitle = decodeURIComponent(currentRoute.value.params.name)
  const seriesTitle = decodeURIComponent(currentRoute.value.params.series)

  if (seriesTitle && seriesTitle !== "undefined") {
    sourcePath = sidebarList.value[seriesTitle][fileTitle]
  } else {
    sourcePath = sidebarList.value[fileTitle]
  }

  peekData.value = getPeekDataFor(sourcePath)
  const contentHtml = getContentHtml(sourcePath)
  content.value = DOMPurify.sanitize(contentHtml)
  tableOfContent.value = getTableOfContent(sourcePath)

  document.title = `Blog | ${peekData.value.title}`
}

const scrollToHeading = (headingText) => {
  const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  const regex = new RegExp("[" + punctuation + "]", "g")

  const id = headingText
    .toLowerCase()
    .replace(regex, "")
    .split(" ")
    .join("-")

  const heading = document.querySelector(`.blog--content #${id}`)
  heading.scrollIntoView({
    behavior: "smooth",
    block: "center"
  })
}

watch(currentRoute, () => {
  loadMarkdown()
})
</script>
<style lang="scss">
@import "@/styles/post";
</style>
