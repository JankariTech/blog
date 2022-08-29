<template>
  <div class="blog" v-if="peekData">
    <div class="blog--head">
      <img :src="peekData.banner || fallbackBanner"
        alt="Blog Banner"
        class="banner sharp-border"
        :class="{'contain': !peekData.banner}"
      >
      <div class="blog--head--content">
        <div class="title">{{ peekData.title }}</div>
        <div class="author-info">
          <the-avatar :src="peekData.authorAvatar"
            alt="Author Avatar"
            class="author-avatar"
            size="140"
          />
          <a class="author-name"
            :href="peekData.authorLink"
            :title="peekData.authorName"
            target="_blank"
          >
            {{ peekData.authorName }}
          </a>
          <div class="created-at">
            <mdi-clock />
            <span>{{ $moment(peekData.createdAt).format("LLLL") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="blog--content">
      <div class="blog--content--info">
        <hr>
        <br>
        <div class="title">The Blog Project</div>
        <br>
        <p class="subtitle">amplifies the voices of the open source community: the maintainers, developers, and teams whose contibutions move the world forward everyday.</p>
        <br>
        <div class="wrapper">
          <div class="title">Share</div>
          <div class="share-items">
            <mdi-twitter class="share-icon twitter" />
            <mdi-facebook class="share-icon facebook" />
            <mdi-linkedin class="share-icon linkedin" />
          </div>
        </div>
      </div>
      <div class="blog--content--data" v-html="content"></div>
      <div class="blog--content--sidebar">
        <div class="wrapper">
          <div class="toc sharp-border">Table of content</div>
          <div v-for="(item, index) in tableOfContent"
            :key="index"
            class="sidebar--item"
            :class="`heading-${item.depth}`"
            @click="scrollToHeading(item.text, item.depth)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import DOMPurify from "dompurify"
import { onMounted, watch, ref, computed } from "vue"
import { useRouter } from "vue-router"
import { getContentHtml, getTableOfContent } from "../helpers/markdown"
import useMarkdown from "../composables/markdown"
import TheAvatar from "../components/TheAvatar"
import useTheme from "../composables/theme"

const { currentRoute } = useRouter()
const { modules } = useMarkdown()
const { dark } = useTheme()

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
  let sTitle
  if (currentRoute.value.params.series) {
    sTitle = decodeURIComponent(currentRoute.value.params.series.toString())
  }
  const title = decodeURIComponent(currentRoute.value.params.name.toString())

  const module = modules.value.find(item => item.meta.title === title && item.meta.seriesTitle === sTitle)

  peekData.value = module.meta
  content.value = DOMPurify.sanitize(getContentHtml(module.raw))
  tableOfContent.value = getTableOfContent(module.raw)

  document.title = `Blog | ${peekData.value.title}`
}

const scrollToHeading = (headingText, headingDepth) => {
  const xpath = `//h${headingDepth}[contains(text(), '${headingText.trim()}')]`
  const heading = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue
  if (heading) {
    const position = heading.getBoundingClientRect()
    // scrolls to 100px above element
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 100,
      behavior: "smooth"
    })
  }
}

const fallbackBanner = computed(() => {
  if (dark.value) {
    return "/src/imgs/fallback_banner_dark.png"
  } else {
    return "/src/imgs/fallback_banner.png"
  }
})
</script>
<style lang="scss">
@import "../styles/post";
</style>
