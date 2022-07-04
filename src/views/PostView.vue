<template>
  <div class="blog">
    <div class="blog--content">
      <img
        v-if="peekData.banner"
        :src="peekData.banner"
        alt="Blog Banner"
        class="blog--banner"
      >
      <BlogPeek
        :title="peekData.title"
        :authorAvatar="peekData.authorAvatar"
        :authorName="peekData.authorName"
        :authorLink="peekData.authorLink"
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
import DOMPurify from "dompurify"
import { useRouter } from "vue-router"
import useMarkdown from "../composables/markdown"
import BlogPeek from "@/components/BlogPeek"
import { getContentHtml, getPeekDataFor, getTableOfContent } from "@/helpers/markdown"

const { currentRoute } = useRouter()
const { sidebarList } = useMarkdown()
let sourcePath

const fileTitle = decodeURIComponent(currentRoute.value.params.name)
const seriesTitle = decodeURIComponent(currentRoute.value.params.series)

if (seriesTitle && seriesTitle !== "undefined") {
  sourcePath = sidebarList.value[seriesTitle][fileTitle]
} else {
  sourcePath = sidebarList.value[fileTitle]
}

const peekData = getPeekDataFor(sourcePath)
const contentHtml = getContentHtml(sourcePath)
const content = DOMPurify.sanitize(contentHtml)
const tableOfContent = getTableOfContent(sourcePath)

document.title = `Blog | ${peekData.title}`

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
</script>
<style lang="scss">
@import "@/styles/post";
</style>
