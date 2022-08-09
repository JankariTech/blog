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
import BlogPeek from "@/components/BlogPeek"
import { getContentHtml, getTableOfContent } from "@/helpers/markdown"
import useMarkdown from "../composables/markdown"

const { currentRoute } = useRouter()
const { modules } = useMarkdown()

const content = ref(null)
const tableOfContent = ref(null)
const peekData = ref(null)

onMounted(() => {
  loadMarkdown()
})

watch(currentRoute, () => {
  loadMarkdown()
})

const loadMarkdown = () => {
  let title
  if (currentRoute.value.params.series) {
    title = decodeURIComponent(currentRoute.value.params.series.toString())
  } else {
    title = decodeURIComponent(currentRoute.value.params.name.toString())
  }

  const module = modules.value.find(item => item.meta.title === title)

  peekData.value = module.meta
  content.value = DOMPurify.sanitize(getContentHtml(module.raw))
  tableOfContent.value = getTableOfContent(module.raw)

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
</script>
<style lang="scss">
@import "@/styles/post";
</style>
